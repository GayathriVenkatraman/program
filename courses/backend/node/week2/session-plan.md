# Session plan

## Session outline

- Database interaction
  - Connecting to mysql using knex
  - Executing queries
    - `select`, `create`. You could let the students figure out how `delete` and `update` works
  - [Code inspiration](#phonebook-database) especially focus on the promise and query part
- API
  - REST
  - CRUD
    - Router verb `GET`, `POST`, `DELETE`, `PUT`
      - Especially focus on post with `app.use(express.urlencoded({ extended: true }));` and `app.use(express.json());`
  - [Code inspiration](#phonebook-api)
- Postman
  - `POST`, `DELETE`, `PUT` requests
- Exercise finish concerts api

## Code inspiration

### Phonebook database

- Go to the `teacher-live-coding` [repo](https://github.com/HackYourFuture-CPH/teacher-live-coding), to the relevant folder
- Copy the `.env.example` and rename the copied file to `.env`
- Run `npm install`
- Start the application by running `nodemon ./src/backend/phonebook-database-queries.js`

Try and implement this functionality from the bottom while explaining.

## Postman

Postman can be used for quickly testing your APIs, but can also be configured in more advanced ways to support your development workflow. Here, you'll learn about four ways to level up your Postman game.

### 1. Creating collections and saving requests

Collections let you group related requests into a reusable library. This makes it easy to organize, run, and share sets of API calls. Read more on the [Official docs](https://learning.postman.com/docs/collections/collections-overview/).

#### Exercise
Create a collection for your Snippets API. Add an unauthenticated `GET /api/snippets` request, and save it to the collection.

1. In Postman, click **New → Collection**, and give it a meaningful name and description.  
2. On the collection, click the **+** icon and create the GET request. Give it a meaningful name and **Save** it to the collection, once it's working. 

### 2. Set Up Multiple Environments

Environments in Postman let you define sets of variables (e.g. base URLs, tokens) for different contexts. That could be your local environment, staging, and production. Switching environments changes the variable values used in your requests.  
Read more on the [Official docs](https://learning.postman.com/docs/sending-requests/variables/managing-environments/).

#### Exercise
1. In Postman, go to **Environments** (top-right environment selector) and click **Add**.  
2. Name your environment your first environment `Local`
3. Add a variable called `base_url` and set it to `http://localhost:3000` (or wherver you're running your local server).
4. Update your requests to use them in the URL, like: `{{base_url}}/api/snippets`.
5. Select the environment in the dropdown to apply its variables to all requests you run.

All details you place in variables are local by default. For additional security, mark them as sensitive, if you keep secrets or passwords in here.

In the future, when you come to deploy your app to the web, you can create a new environment in the same way called `Production` and recreate the same variables with updated values for your deployed app. Then you can easily switch between them in Postman to test both local and production versions of the APIs.

### 3. Managing Secrets

You'll often need to use sensitive data in your requests, namely secrets (API keys, passwords, tokens). These should not be hard-coded in your requests for security reasons! Postman provides a **Vault** and sensitive variable settings to securely store and reuse secrets. Read more on the [Official docs](https://learning.postman.com/docs/sending-requests/postman-vault/postman-vault-secrets/).

#### Exercise
Let's add the authenticated request to `GET /api/snippets`, so we can test returning private snippets.

1. Open the **Postman Vault** (Vault icon or `Ctrl+Shift+V`).  
2. When prompted, Postman generates a vault key - save it securely.
3. Add a new secret called `users_token` with a value from the `users.token` column in your database.
4. Now you're ready to use it in a request! Create a new GET request as you did in the first exercise, but this time add an authorization header. Where you need to reference your token, use `{{vault:users_token}}`.  

Now you can safely and securely test APIs using secrets. Test to make sure the request is working correctly, and save it to your collection.

### 4. Create Basic Test Suites

Postman allows you to write test scripts (in JavaScript) that validate your API responses — checking status codes, payloads, and performance. These tests can be grouped into collections and run automatically. They are a handy way to validate that your API is working correctly, and continues to work correctly as you make changes. Read more on the [Official docs](https://learning.postman.com/docs/tests-and-scripts/write-scripts/test-scripts/).

#### Exercise
1. In a request, open the **Tests** tab.  
2. Write assertions using `pm.test()` and the `pm.response` object. Here are two examples you can paste in:
```javascript
pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});

pm.test("Snippet has a numeric 'id' field", function () {
    const json = pm.response.json();
    pm.expect(json.id).to.be.a("number");
});
```
3. Write at least one additional test case for both of your requests.
4. These tests will run automatically each time you send the request. You can also run them all together, like a test suite. Click on your collection, and find the "Run" button. Make sure all the requests are checked that you wish to test. Click run, and a report will display all of test results.
