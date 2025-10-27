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
    - [Authentication explanation](#authentication-explanation)
    - [Excercise: implement authentication](./session-materials/06-auth.md)

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

### Authentication explanation

Think of authentication like different ways to prove who you are when visiting a building. You need to show ID, but how you do it matters for security and convenience.

#### Database-Stored Tokens (What We're Using)

Server issues a unique token on login and stores it in the database to validate against on each request.

**Metaphor:** Like a membership card the building keeps a copy of in their files.

**Pros:**

- Simple to implement and understand
- Easy to revoke access by deleting the token from database
- Full control over token lifecycle

**Cons:**

- Requires database lookup on every authenticated request (slower)
- Database becomes a bottleneck at scale
- If database is slow or down, authentication fails

**Security:** 🟡🟡🟡⚪⚪ (3/5) - Secure, but tokens must be properly generated and stored safely.

#### JWT (JSON Web Tokens)

A self-contained token with user info encoded inside, signed by the server and verifiable without database lookups.

**Metaphor:** Like a driver's license that the DMV signs with a special stamp - you can't fake it because only they have the stamp.

**Pros:**

- No database lookups needed (much faster)
- Works across multiple servers in distributed systems
- Contains user information directly in the token

**Cons:**

- Cannot easily revoke tokens until they expire
- If secret key is stolen, attackers can create fake tokens
- Tokens cannot be modified once issued

**Security:** 🟢🟢🟢🟢⚪ (4/5) - Very secure when implemented correctly with proper secret key management.

#### Session-Based Authentication

Server creates a session ID on login and stores session data in server memory or cache, sending only the ID to the client.

**Metaphor:** Like getting a visitor badge when you arrive that you wear the entire visit, while the building keeps track of all active badges in a secure room.

**Pros:**

- Can instantly revoke access by deleting session
- Server maintains full control over authentication state
- Simple logout process

**Cons:**

- Requires server to store session data (memory/cache)
- Does not work well with multiple servers without shared storage
- Session storage must scale with user load

**Security:** 🟢🟢🟢🟢⚪ (4/5) - Secure for traditional web applications with proper session management.

#### API Keys

A single permanent credential issued once and used for all requests, typically for machine-to-machine communication.

**Metaphor:** Like having a permanent membership card that never expires.

**Pros:**

- Extremely simple to implement
- Easy for developers to use in their code
- No complex authentication flow needed

**Cons:**

- If stolen, access continues until key is regenerated
- No built-in expiration
- Lacks granular permission controls

**Security:** 🟡🟡⚪⚪⚪ (2/5) - Moderately secure for machine-to-machine communication, weak for user authentication.

#### Basic Authentication (Username/Password)

Client sends username and password directly in the request headers with every API call.

**Metaphor:** Like showing your ID card at the entrance every single time you visit - literally showing your credentials each visit.

**Pros:**

- Simplest to implement
- Works everywhere, universal standard
- Easy to understand

**Cons:**

- Credentials sent with every request (security risk)
- Cannot revoke access without changing password
- Highly insecure over unencrypted connections

**Security:** 🔴⚪⚪⚪⚪ (1/5) - Very insecure, only acceptable over HTTPS and for internal tooling.
