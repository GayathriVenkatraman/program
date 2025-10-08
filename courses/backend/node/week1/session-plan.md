# Session plan

## Session Outline

- Express
  - What is Express (10 mins)
    - [Live coding: setup a server](./session-materials/01-server.md)
    - [Excercise: create a local project and database schema](./session-materials/02-schema.md)
  - Routing in Express (20 mins)
    - `app.use`
    - `app.get`
    - [Live coding: routing](#appget-vs-appuse)
    - [Excercise: Setup routing](./session-materials/03-routing.md) (10 mins)
  - URL parameters in Express (30 mins)
    - [Explanation and live coding](#query-parameters-vs-url-parameters)
    - [Excercise: connect to the database](./session-materials/04-database-connection.md)
    - [Excercise: GET endpoints](./session-materials/05-get-endpoints.md)
  - Route order (15 mins)
    - [Live coding: why route order matters](#route-order)
    - Logging and debugging
  - Middleware (15 mins)
    - [`next` method](https://expressjs.com/en/guide/using-middleware.html)
    - Modifying `request` and `response`
    - <https://fullstackopen.com/en/part3/node_js_and_express#express>
    - [Live coding: basic middleware example](#middleware)
  - Authentication (30 mins)
    - Authentication explanation
    - [Excercise: implement authentication](./session-materials/06-auth.md)
- Postman (30 mins)
  - Create collection and save queries
  - Sending `GET` requests
    - Query parameters in Postman
    - URL parameters in Postman
  - Excercise: Test and save your queries

## Exercises

1. [Server](./session-materials/01-server.md): Setup project
2. [DB schema](./session-materials/02-schema.md): Setup MySQL database schema
3. [API](./session-materials/03-routing.md): Snippets API exercises
   - [POST endpoint](./session-materials/03-routing.md)
   - [GET endpoints](./session-materials/05-get-endpoints.md)
   - [Authentication](./session-materials/06-auth.md)

## Live coding

### `app.get` vs `app.use`

Let's clarify the routing in Express using an [Express router](https://expressjs.com/en/starter/basic-routing.html).

Code example can be found in the [module materials](../module-materials/index.js) and [router](../module-materials/examples/router.js).

```js
node --watch index.js
```

### Query parameters vs URL parameters

#### URL parameters

These are part of the URL path used to identify specific resources.

**Example:** GET `/api/snippets/123` represented in our router by `/api/snippets/:id`

In the above URL, `123` is an ID of the snippet to fetch. The route indicates that we will only return this one resouce or nothing else. `:id` is **dynamic**, so that we can define one route and be sure to get and parse any ID passed. In the same time, passing an `:id` is **required**.

#### Query parameters

These come after the `?` character and are usually key=value pairs, separated by `&`.

**Example:** GET `/api/snippets?tag=popular`

Used for sorting, filtering, pagination, or tracking, are usually **optional**. Can also be multiple values.

Code example can be found in the [parameters file](../module-materials/examples/parameters.js).

```js
node --watch examples/parameters.js
```

### Route order

Code example can be found in the [route order file](../module-materials/examples/route-order.js)

```js
node --watch examples/route-order.js
```

### Middleware

Middleware is a generic term used for any software that acts as a connector between two other bits of software. In Express world, middleware is a layer that can be injected between a request and response and perform additional tasks.

You can find out more about Express middleware in the [Express middleware documentation](https://expressjs.com/en/guide/using-middleware.html).

Code example of a sample middleware can be found in the [middleware file](../module-materials/examples/middleware.js)

```js
node --watch examples/middleware.js
```
