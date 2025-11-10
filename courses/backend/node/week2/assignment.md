# Assignment

You'll set up and work with your own version of a simple Contacts API.

It will start with one endpoint (and you will add more throughout the task):

- `GET /api/contacts`

This endpoint accepts a query parameter `sort`. Here's how it should be possible to use it:

- `GET /api/contacts?sort=first_name%20ASC`
  - Sorts contacts by first name, ascending
- `GET /api/contacts?sort=last_name%20DESC`
  - Sorts contacts by last name, descending

## Setup

1. Go to/create a `node/week2` directory in your `hyf-assignment` repo.
2. Create yourself a new node application
3. Create a database called `phonebook` with a `contacts` table, with the following schema and data:

```sql
CREATE TABLE `contacts` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Sample data
insert into contacts (id, first_name, last_name, email, phone) values (1, 'Selig', 'Matussov', 'smatussov0@pinterest.com', '176-630-4577');
insert into contacts (id, first_name, last_name, email, phone) values (2, 'Kenny', 'Yerrington', null, null);
insert into contacts (id, first_name, last_name, email, phone) values (3, 'Emilie', 'Gaitskell', null, null);
insert into contacts (id, first_name, last_name, email, phone) values (4, 'Jordon', 'Tokell', null, null);
insert into contacts (id, first_name, last_name, email, phone) values (5, 'Sallyann', 'Persse', 'spersse4@webnode.com', '219-157-2368');
insert into contacts (id, first_name, last_name, email, phone) values (6, 'Berri', 'Bulter', null, null);
insert into contacts (id, first_name, last_name, email, phone) values (7, 'Lanni', 'Ivanilov', 'livanilov6@fda.gov', null);
insert into contacts (id, first_name, last_name, email, phone) values (8, 'Dagny', 'Milnthorpe', null, null);
insert into contacts (id, first_name, last_name, email, phone) values (9, 'Annadiane', 'Bansal', null, null);
insert into contacts (id, first_name, last_name, email, phone) values (10, 'Tawsha', 'Hackley', null, null);
insert into contacts (id, first_name, last_name, email, phone) values (11, 'Rubetta', 'Ozelton', null, null);
insert into contacts (id, first_name, last_name, email, phone) values (12, 'Charles', 'Boughey', 'cbougheyb@senate.gov', '605-358-5664');
insert into contacts (id, first_name, last_name, email, phone) values (13, 'Shantee', 'Robbe', null, null);
insert into contacts (id, first_name, last_name, email, phone) values (14, 'Gleda', 'Peat', null, null);
insert into contacts (id, first_name, last_name, email, phone) values (15, 'Arlinda', 'Ethersey', 'aetherseye@biglobe.ne.jp', '916-139-1300');
insert into contacts (id, first_name, last_name, email, phone) values (16, 'Armando', 'Meachem', 'ameachemf@oaic.gov.au', '631-442-5339');
insert into contacts (id, first_name, last_name, email, phone) values (17, 'Codi', 'Redhouse', null, '401-953-6897');
insert into contacts (id, first_name, last_name, email, phone) values (18, 'Ann', 'Buncombe', 'abuncombeh@ow.ly', '210-338-0748');
insert into contacts (id, first_name, last_name, email, phone) values (19, 'Louis', 'Matzkaitis', 'lmatzkaitisi@ebay.com', '583-996-6979');
insert into contacts (id, first_name, last_name, email, phone) values (20, 'Jessey', 'Pala', null, null);
insert into contacts (id, first_name, last_name, email, phone) values (21, 'Archy', 'Scipsey', 'ascipseyk@ask.com', '420-983-2426');
insert into contacts (id, first_name, last_name, email, phone) values (22, 'Benoit', 'Mould', 'bmouldl@bing.com', '271-217-9218');
insert into contacts (id, first_name, last_name, email, phone) values (23, 'Sherm', 'Girardey', 'sgirardeym@guardian.co.uk', '916-999-2957');
insert into contacts (id, first_name, last_name, email, phone) values (24, 'Raquel', 'Mudge', 'rmudgen@slate.com', '789-830-7473');
insert into contacts (id, first_name, last_name, email, phone) values (25, 'Tabor', 'Reavey', null, null);
```

4. Set up Express and an Sqlite connection in your node application. In your knex instance, make sure to set: `multipleStatements: true` - this is important!

5. Make sure you have an API router under the `/api` path set up like so:

```js
app.use("/api", apiRouter);
```

6. Create a contacts router at `/contacts`, and attach it to your API router.
7. In your contacts API, create the following endpoint:

```js
contactsAPIRouter.get("/", async (req, res) => {
  let query = knexInstance.select("*").from("contacts");

  if ("sort" in req.query) {
    const orderBy = req.query.sort.toString();
    if (orderBy.length > 0) {
      query = query.orderByRaw(orderBy);
    }
  }

  console.log("SQL", query.toSQL().sql);

  try {
    const data = await query;
    res.json({ data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});
```

## The tasks

### Task 1 - Solve the SQL injection

The current implementation of the `sort` query parameter has introduced an SQL injection vulnerability.

First, you should demonstrate the SQL injection and that, for instance, it is possible to drop/delete the `contacts` table with the `sort` query parameter. Capture this demonstration with a screen recording, and attach it to your PR when you submit your assignment.

After having demonstrated the SQL injection vulnerability, your task is then to fix the issue. Your solution should be solved in the `app.js` file only. While the the `multipleStatements: true` configuration you used enables this vulnerability, it should not be changed in your solution.

### Task 2 - Improve your API

Create two additional endpoints to enable the following functionality:

1. Create new contacts
2. Delete an existing contact

### Task 3 - Error handling

Update your endpoints with appropriate error handling. You should, at least, handle the following cases:

1. Successful requests
2. Incorrect requests (e.g. an incorrectly formatted sort request)
3. Server issues (e.g. a missing database table, or an offline database)
4. A catch all for any other errors

Remember to:

1. Return the appropriate HTTP code
2. Avoid sending any implementation or internal data to the client
3. Log an appropriate message so you can debug issues that occur in your service

### Task 3 - Postman

1. Create a Postman collection to capture some example requests with your new API.
2. Create a basic test suite that you can run to validate that everything is working correctly.

Share both a link to your Collection and a link to a test run showing your tests passing in your pull request.
