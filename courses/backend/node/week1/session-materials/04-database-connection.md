# Database connection

Let's create the database connection in a separate file:

```js
// Contents of database.js

import knex from "knex";

const dbFile = "PATH_TO_YOUR_SQLITE_DB";

const knexInstance = knex({
  client: "sqlite3",
  connection: {
    filename: dbFile,
  },
});

export default knexInstance;
```

For Express to handle JSON requests, we need to add `app.use(express.json())` to `app.js`:

```js
// Contents of app.js

import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Class!");
});

// Rest of the file...
```

## Test the app

Run the main app. Can you access the database from your endpoint? To make sure, add a simple `knex` request in the endpoint.

## End file structure

At this point verify that your project structure looks like this:

- api
  - snippets.js
- app.js
- database.js
- package.json
