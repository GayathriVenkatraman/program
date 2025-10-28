# Session Plan - Week 2

- The idea is to build on the previous week's knowledge, focusing on advanced database features and practical applications.
- Use the same task database throughout all examples for consistency
- Use problem-based approach: show issues, guide trainees to solutions

## Requirements: Setup DB and start the example API

### Mentor Instructions

You need to have the example API running to demonstrate concepts and exercises.
Share your screen and setup the session materials:

```shell
git clone https://github.com/HackYourFuture-CPH/hyf-assignment-template.git
cd courses/backend/databases/
```

### Trainee Instructions

- They should have their `tasks.sqlite3` database from Week 1 ready to use with a GUI tool. [Tools setup - Week 1](../week1/preparation.md#tools-setup)
- They should follow the same instructions but on their own fork of the assignment repo.
- The materials for this session are located in `courses/backend/databases/`

## Aggregate Functions

### Reporting

- A common business need: "We need reports from our task management system"
- Show inefficient approach: calculating stats in application code
  - <http://localhost:3000/api/stats/tasks-per-user-unoptimized>
  - Show code in `/tasks-per-user-unoptimized` endpoint
- Introduce SQL aggregates as a more performant solution
  - Show code in `/tasks-per-user` and `/status-distribution` endpoints

### Key Aggregate Functions

Other examples of questions we can answer with aggregates:

- **COUNT**: How many tasks were created?
- **SUM**: Total estimated hours across tasks
- **AVG**: Average completion time
- **MIN/MAX**: Earliest/latest due dates
- **GROUP BY**: Essential for aggregation

### Exercise: Write Your Own Aggregate Queries

#### Trainees work with their tasks.sqlite3 from Week 1

Write SQL queries to answer these questions:

1. How many tasks are overdue? (due_date < today)
2. What's the average number of tasks per user?
3. Which status has the most tasks?
4. Find the user with the most completed tasks.

#### Solutions discussion

<details>
<summary>Click to see the solutions</summary>

This can be executed directly in the SQLite command line or any SQLite client.

```sql
-- Count overdue tasks
SELECT COUNT(*) AS overdue_count
FROM task
WHERE due_date < DATE('now');

-- Average tasks per user
SELECT AVG(task_count) AS average_tasks
FROM (
  SELECT user_id, COUNT(*) AS task_count
  FROM user_task
  GROUP BY user_id
);

-- Status with most tasks
SELECT s.name, COUNT(*) AS task_count
FROM task t
JOIN status s ON t.status_id = s.id
GROUP BY s.id, s.name
ORDER BY task_count DESC
LIMIT 1;

-- User with most completed tasks (status_id = 3 for 'Done')
SELECT u.name, COUNT(*) AS completed_tasks
FROM user u
JOIN user_task ut ON u.id = ut.user_id
JOIN task t ON ut.task_id = t.id
WHERE t.status_id = 3
GROUP BY u.id, u.name
ORDER BY completed_tasks DESC
LIMIT 1;
```

</details>

---

## Database Security

### SQL Injection Demo

- The idea is to show the vulnerable search endpoint and how it can be exploited

Normal search: <http://localhost:3000/api/search/vulnerable?query=wash>

Leak user data: <http://localhost:3000/api/search/vulnerable?query=%27%20UNION%20SELECT%20name%2C%20email%2C%20phone%20FROM%20user%3B%20-->

### Exercise: SQL Injection Attack Practice

#### Trainees try to exploit the vulnerable endpoint

Using the running API, try these attacks:

1. Extract all user emails
2. Try to delete data (see what happens)
3. Attempt to find hidden information

#### Attack strings to try

```sql
' OR '1'='1
'; DROP TABLE tasks; --
' UNION SELECT * FROM user --
```

### Security Best Practices

- Show how it's fixed in the `search/secure` endpoint
- Always use parameterized queries or ORMs which make things easier for developers
- Mention the importance of validation, both in client and server

## Database Types Overview

### When NOT to use relational databases?

- **Key-Value Stores (Redis)**: Caching, real-time features
- **Document Stores (MongoDB)**: Flexible schemas, JSON-like data
- **Graph Databases (Neo4j)**: Social networks, recommendation engines
- **Time-Series**: IoT sensor data, financial metrics

## Deployment Overview

### Development vs Production: Understanding the Journey

![Local vs Prod environment](./session-materials/local-vs-prod-environments.png)

> [!NOTE]
> The diagram illustrates the difference between local development and production environments.

#### Why do we care about different environments?

- We use them to test and develop our applications in a safe space without affecting real users or data.
- They help us identify and fix issues before deployment.

#### A recap of what we mean when we say "the cloud"

- A remote server (computer) running 24/7 somewhere else
- Multiple users can connect simultaneously
- Databases run on these servers
- Your data needs to be accessible from anywhere

#### Why do we need to migrate to another database?

| Aspect              | SQLite (Dev)            | PostgreSQL (Production)       |
| ------------------- | ----------------------- | ----------------------------- |
| Location            | Local file              | Remote server                 |
| Use case            | Development, small apps | Production, real applications |
| Type of information | Testing, prototyping    | Real user data, critical info |
| Scaling             | Limited                 | Excellent                     |

### Demo time!

> [!NOTE]
> Guide the trainees through the steps, explaining each part.
> You can choose to show it entirely and have them replicate later or to give them some time to follow along.

We're going to recreate our local SQLite database to a remote PostgreSQL database on Render.com

#### Step 1: Create Postgres DB on Render

Follow the steps from the hyf-project-template: <https://github.com/HackYourFuture-CPH/hyf-project-template/tree/main/api#deploying>

#### Step 2: Recreate Database using DBeaver

We'll use DBeaver to connect to the remote PostgreSQL database and run SQL commands to recreate our schema and data.

1. Connect to your PostgreSQL database on Render:
   - Open DBeaver
   - New Connection (Ctrl + Shift + N) → PostgreSQL
   - Fill in connection details from Render's "Connection Info" page
   - Test connection

2. Create a new SQL script:
   - Right-click on your PostgreSQL connection → SQL Editor → New SQL Script
   - Copy the provided PostgreSQL-compatible SQL (see `tasks-postgres.sql`)
3. Execute the script:
   - Paste the entire SQL content
   - Click **Execute SQL Script** (Not "Execute SQL Statement")
   - Should see an output saying the number of queries executed and the updated rows

4. Verify:
   - Disconnect and reconnect to refresh
   - Expand Tables to see: `user`, `task`, `status`, `user_task`
   - Right-click any table → View Data to verify records

#### Step 3: Environment Variables

Environment variables allow us to configure our application differently based on where it's running (development vs production) without changing code.

Create a `.env` file in the `example-api` folder

```bash
# .env file for local development
NODE_ENV=development

# For production testing (get this from Render)
DATABASE_URL=postgresql://user:password@host:5432/database
```

> [!IMPORTANT]
> Never commit `.env` files to git! They contain sensitive credentials. Always add `.env` to your `.gitignore` file.

##### Database Configuration Code

Show the trainees how the code switches between databases:

```javascript
// example-api/index.js

// Development: local SQLite
const developmentConfig = {
  client: "sqlite3",
  //...
};

// Production: remote PostgreSQL
const productionConfig = {
  client: "pg",
  //...
};
```

#### Step 4: Test Both Environments

Now we'll test our API with both databases to see the differences.

##### Testing development (SQLite)

```bash
npm run dev
```

Open your browser:

- <http://localhost:3000/api/users>

What's happening

- Reading from local `tasks.sqlite3` file
- Perfect for development and testing

##### Testing production (PostgreSQL)

```bash
# Update .env to use production
# DATABASE_URL=your-render-database-url

npm run prod
```

Open your browser to the same endpoints:

- <http://localhost:3000/api/users>

What's happening:

- Reading from remote PostgreSQL on Render
- Slightly slower (network latency)
- Same data, different database engine

> [!TIP]
> You can show the diagram again to illustrate how you are connecting to different databases based on environment.

### Key Concepts to Emphasize

#### Environment Variables

- Never hardcode database credentials
- Different configs for dev/staging/production
- `.env` file locally, Render UI for production
- Always add `.env` to `.gitignore`

#### Migration Best Practices

- Always backup before migrating
- Monitor after deployment
- Keep development and production schemas in sync

#### Alternative: Knex Migrations (Optional)

> [!TIP]
> For production projects, you'll likely use migration tools like Knex.js to version-control your schema changes. This is beyond today's scope but worth exploring for your projects.

#### Questions to Explore

- What happens if the remote database goes down?
- How do we update the database after the first setup?
- Can multiple developers work with the same production database?

## Summary & Q&A

### Key takeaways

- SQL aggregates are your friends for calculations: reporting, dashboard stats
- Security: Never trust user input, always validate.
- Choose the right database for your use case
