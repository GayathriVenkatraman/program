# Session plan

## Session outline

- [Database interaction with Knex](#database-interaction-with-knex)
- [Snippets API continued](#snippets-api-continued)
- [Advanced Postman use cases](#advanced-postman)

## Database interaction with Knex

Trainees have used Knex before. In foundation, they used it with the `.raw()` command to execute SQL easily. And they also used it last week when learning about Express.

This part of the module should explain Knex in a lot more technical detail. The following implementation is how we expect to see trainees using database interaction from this point forward.

1. What is Knex, and why we need it
   - Knex is SQL query builder for Node, which helps us write databases queries more cleanly, without raw SQL.
   - It supports multiple databases (e.g. SQLite, Postgres) with the same API.
   - It helps avoid security issues like SQL injection by handling things safely for us.
   - It provides advanced features such as migrations.

2. Comparison: `.raw()` method vs. the Query Builder methods
   - `.raw()`, which you've been using so far, lets you run plain SQL
   - However, you lose the "single API" benefit of using Knex
   - You also lose the safety of Knex's security precautions regarding SQL injetion
   - Using the Query Builder methods like `.select()` help us write safer, more readable DB queries that work even if we change our database type.

### Live coding - Database interaction

Run through the [phonebook example](./session-materials/phonebook/). The functions are already written, but feel free to clear them and write them together in the session.

1. Set up [`database.js`](./session-materials/phonebook/database.js)
2. Walk through [`phonebook.js`](./session-materials/phonebook/phonebook.js)

## Implementing REST with Express

### REST refresher

Building software is like building houses: architecture is everything. The design of each part is just as important as the utility of it. REST is a specific architectural style for web applications. It serves to organise code in **predictable** ways.

The most important features of REST are:

- An application has a `frontend` (client) and a `backend` (server). This is called [separation of concerns](https://medium.com/machine-words/separation-of-concerns-1d735b703a60): each section has its specific job to do. The frontend deals with presenting data in a user friendly way, the backend deals with all the logic and data manipulation
- The server is `stateless`, which means that it doesn't store any data about a client session. Whenever a client sends a request to the server, each request from the client to server must contain all of the information necessary to understand the request, and cannot take advantage of any stored context on the server. This makes it possible to handle requests from millions of users.
- Server responses can be temporarily stored on the client (a browser) using a process called `caching`: storing files like images or webpages in the browser to load the next time you enter a website (instead of getting them from the server, which generally takes longer to do).
- Client-server communication is done through `Hypertext Transfer Protocol (HTTP)`, which serves as the style (the how) of communication.

It's important to know about REST because it teaches us how web applications are designed and holds us to a standard that makes development and usage predictable.

For further reading, check the following resources:

- [What is REST: a simple explanation for beginners](https://medium.com/extend/what-is-rest-a-simple-explanation-for-beginners-part-1-introduction-b4a072f8740f)
- [@NoerGitKat (lots of web app clones/examples to learn from)](https://github.com/NoerGitKat)

### Snippets API continued

Now we can pick up where we left the exercises last week. Help the trainees complete the remaining endpoints:

1. [POST endpoint exercise](./session-materials/07-post-endpoint.md)
2. [PUT endpoint exercise](./session-materials/08-put-endpoint.md)
3. [DELETE endpoint exercise](./session-materials/09-delete-endpoint.md)

## Error handling

Error handling is important so we have visibility of issues that occur in applications, and gain some understanding of what is going wrong.

### HTTP Status Codes Refresher

Here are some of the most commonly used:

#### 2XX - Success

`200 OK` - The request succeeded, e.g. a webpage loads as it should.
`201 Created` - A new resource was made, e.g. a new user account.

#### 3XX - Redirection

`301 Moved Permanently` - The URL has changed, e.g. redirect from oldsite.com to newsite.com.
`302 Found` - A temporary redirect, e.g. redirecting Spanish visitors to the Spanish version of the website.

#### 4XX - Client Errors

`400 Bad Request` - The request was invalid, e.g. form data missing or incorrect.
`401 Unauthorized` - You need to log in e.g. trying to access user features when logged out.
`404 Not Found` - Nothing at that URL e.g. a missing page or resource.

#### 5XX - Client Errors

`500 Internal Server Error` - Generic server issue, e.g. something goes wrong in the backend.
`503 Service Unavailable` - Server is down or busy e.g. backend API is not running.

Read more at [HTTP Status cheatsheet](https://devhints.io/http-status).

### Client vs Server

Server-side errors should be designed for developers. Detailed errors help debugging and ultimately fixing issues easier.
e.g. If a database table is missing, record the missing table name in your logs.

Client-side errors should be designed for users, including the correct HTTP status code.
e.g. In the missing database table case, simply return a `500 Internal Server Error` and a useful page to the user to explain how to continue.

It's important to hide specific error details from the user for multiple reasons:

1. Security - Revealing database names and other internal details can give attackers too many clues about your system which can make your app more vulnerable to exploitation.
2. Privacy - Many internal errors can include sensitive data (e.g. user IDs, personal information) that shouldn't be exposed.
3. User Experience - Some technical errors would confuse most users, so stick with simple, friendly messages that can help the user continue.

### Live coding - Error handling

Walk through [`api/contacts.js`](./session-materials/phonebook/api/contacts.js) to explain the try/catch pattern, appropriate server and client side error handling, correct usage of HTTP codes and why the knex code is insecure.

## Advanced Postman

Postman can be used for quickly testing APIs, but it can also be configured in more advanced ways to support the development workflow. Here are four ways trainees can level up their Postman game.

### 1. Creating collections and saving requests

Collections let you group related requests into a reusable library. This makes it easy to organize, run, and share sets of API calls.

Read more on the [Official docs](https://learning.postman.com/docs/collections/collections-overview/).

#### Exercise 1

Create a collection for the Snippets API. Add an unauthenticated `GET /api/snippets` request, and save it to the collection.

1. In Postman, click **New → Collection**, and give it a meaningful name and description.
2. On the collection, click the **+** icon and create the GET request. Give it a meaningful name and **Save** it to the collection, once it's working.

### 2. Set Up Multiple Environments

Environments in Postman let you define sets of variables (e.g. base URLs, tokens) for different contexts. That could be a local environment, staging, and production. Switching environments changes the variable values used in your requests.

Read more on the [Official docs](https://learning.postman.com/docs/sending-requests/variables/managing-environments/).

#### Exercise 2

1. In Postman, go to **Environments** (top-right environment selector) and click **Add**.
2. Name your environment your first environment `Local`
3. Add a variable called `base_url` and set it to `http://localhost:3000` (or wherver you're running your local server).
4. Update your requests to use them in the URL, like: `{{base_url}}/api/snippets`.
5. Select the environment in the dropdown to apply its variables to all requests you run.

All details you place in variables are local by default. For additional security, mark them as sensitive, if you keep secrets or passwords in here.

In the future, when you come to deploy your app to the web, you can create a new environment in the same way called `Production` and recreate the same variables with updated values for your deployed app. Then you can easily switch between them in Postman to test both local and production versions of the APIs.

### 3. Managing Secrets

You'll often need to use sensitive data in requests, namely secrets (API keys, passwords, tokens). These should not be hard-coded in the requests for security reasons! Postman provides a **Vault** and sensitive variable settings to securely store and reuse secrets.

Read more on the [Official docs](https://learning.postman.com/docs/sending-requests/postman-vault/postman-vault-secrets/).

#### Exercise 3

Let's add the authenticated request to `GET /api/snippets`, so we can test returning private snippets.

1. Open the **Postman Vault** (Vault icon or `Ctrl+Shift+V`).
2. When prompted, Postman generates a vault key - save it securely.
3. Add a new secret called `users_token` with a value from the `users.token` column in your database.
4. Now you're ready to use it in a request! Create a new GET request as you did in the first exercise, but this time add an authorization header. Where you need to reference your token, use `{{vault:users_token}}`.

Now you can safely and securely test APIs using secrets. Test to make sure the request is working correctly, and save it to your collection.

### 4. Create Basic Test Suites

Postman allows you to write test scripts (in JavaScript) that validate your API responses — checking status codes, payloads, and performance. These tests can be grouped into collections and run automatically. They are a handy way to validate that your API is working correctly, and continues to work correctly as changes are made.

Read more on the [Official docs](https://learning.postman.com/docs/tests-and-scripts/write-scripts/test-scripts/).

#### Exercise 4

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
