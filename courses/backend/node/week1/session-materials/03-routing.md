# Routing

## End goal structure

The end goal of the exercise is to implement the following routes:

- `GET /api/snippets` to get a list of snippets
- `GET /api/snippets/:id` to get a single snippet

## Create Snippets router

We will create the snippet routes in a different file, `api/snippets.js`, which will export an [Express router](https://expressjs.com/en/starter/basic-routing.html).

That will look something like this:

```js
// Contents of api/snippets.js

import express from "express";
const router = express.Router();

// GET /api/snippets
router.get("/", async (request, response) => {
  // TODO
  console.log("Hello from Snippets");
});

// TODO: GET /api/snippets/:id

export default router;
```

## Add the router to the main server

Next thing in the setup is to actually use the router we're exporting from `api/snippets.js`.
Inside `app.js`, below setting up Express, add your new snippets router:

```js
import snippetsRouter from "./api/snippets.js";

app.use("/api/snippets", snippetsRouter);
```

## Test the app

Run the main app. Does you console log `Hello from Snippets` on <http://localhost:3000/api/snippets>?

## End file structure

At this point verify that your project structure looks like this:

- api
  - snippets.js
- app.js
- package.json
