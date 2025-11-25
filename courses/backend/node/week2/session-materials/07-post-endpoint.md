# POST endpoint

## `POST /api/snippets`

Let's start with a simplified version of the `POST /api/snippets` route. First we add the POST route to `api/snippets.js`:

```js
// ...

// POST /api/snippets
router.post("/", async (request, response) => {
  // TODO
});

// ...
```

To be able to insert a row into the `snippets` table, we need to have data in the `users` table. Create a user and note what the user ID is.

The POST request we want to make will look something like this:

```text
POST /api/snippets
{
    "title": "Snippet title",
    "contents": "#hello",
    "is_private": false
}
```

### Exercise: Implement the POST endpoint

When we now make a request like:

```text
POST /api/snippets
{
    "title": "Snippet title",
    "contents": "#hello",
    "is_private": false
}
```

you should insert a new row into the `snippets` table with the data from the request body.

When creating a snippet we also need to specify a `user_id`. For now, you can just pass in the `user_id` in the request body (alongside the other snippet data).
