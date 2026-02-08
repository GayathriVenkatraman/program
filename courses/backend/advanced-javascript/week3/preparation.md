# Week 3 Preparation

Read this introduction before class. It explains the concepts we'll practice during the session.

---

## The Problem: Callback Hell

Last week you wrote code like this:

```js
validateOrder(order, (err, validation) => {
  if (err) return console.error(err);

  calculateTotal(order, (err, total) => {
    if (err) return console.error(err);

    checkStock(order, (err, stock) => {
      if (err) return console.error(err);

      processPayment(order, total, (err, receipt) => {
        if (err) return console.error(err);
        // Finally done... but look at this pyramid!
      });
    });
  });
});
```

This is called **callback hell** - deeply nested callbacks that are hard to read and maintain. Each new step adds another level of indentation. Error handling is repetitive. The code grows sideways instead of downward.

Promises solve this.

---

## What is a Promise?

A **Promise** is an object representing an operation that hasn't completed yet. Think of it like an order ticket at a cafe:

1. You place an order and receive a ticket (the Promise)
2. The ticket promises you'll get coffee eventually
3. Two outcomes: you get your coffee (resolved) or they're out (rejected)

```js
const orderTicket = placeOrder("latte");
// orderTicket is a Promise - the coffee isn't ready yet

orderTicket
  .then(coffee => console.log("Got my", coffee))
  .catch(error => console.log("No coffee:", error));
```

> 📚 **Glossary: Promise**
> An object representing the eventual completion (or failure) of an asynchronous operation. A Promise is always in one of three states: pending, fulfilled (resolved), or rejected.

---

## Consuming Promises: .then() and .catch()

When you have a Promise, you can attach callbacks using `.then()` and `.catch()`:

```js
const API_BASE = "https://tea-api-787553294298.europe-west1.run.app/api/v1";

fetch(`${API_BASE}/teas`)
  .then(response => response.json())
  .then(teas => {
    console.log("Got", teas.length, "teas");
  })
  .catch(error => {
    console.error("Failed:", error.message);
  });
```

- `.then()` runs when the Promise **resolves** (succeeds)
- `.catch()` runs when the Promise **rejects** (fails)

> 📚 **Glossary: resolve / reject**
> A Promise "resolves" when the operation succeeds, passing the result to `.then()`. It "rejects" when the operation fails, passing the error to `.catch()`.

---

## Chaining Promises

The magic of Promises: `.then()` returns a new Promise, so you can chain them:

```js
const API_BASE = "https://tea-api-787553294298.europe-west1.run.app/api/v1";

fetch(`${API_BASE}/teas/1`)
  .then(response => response.json())
  .then(tea => {
    console.log("Tea:", tea.name);
    return fetch(`${API_BASE}/inventory/${tea.id}`);
  })
  .then(response => response.json())
  .then(inventory => {
    console.log("Stock:", inventory.stockCount);
  })
  .catch(error => {
    // Catches errors from ANY step above
    console.error("Something failed:", error.message);
  });
```

No more nesting! The code flows downward, and one `.catch()` handles all errors.

> 📚 **Glossary: then / catch**
> `.then(callback)` schedules a callback to run when a Promise resolves. `.catch(callback)` schedules a callback to run when a Promise rejects. Both return new Promises, enabling chaining.

---

## Creating Promises

You can create your own Promises using `new Promise()`:

```js
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

wait(2000).then(() => console.log("2 seconds passed!"));
```

The Promise constructor takes a function with two parameters:
- `resolve` - call this when the operation succeeds
- `reject` - call this when the operation fails

```js
function findTeaById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const tea = teas.find(t => t.id === id);
      if (tea) {
        resolve(tea);
      } else {
        reject(new Error(`Tea ${id} not found`));
      }
    }, 500);
  });
}
```

---

## async/await: Even Cleaner Syntax

`async`/`await` is syntactic sugar over Promises - it makes async code look synchronous:

```js
const API_BASE = "https://tea-api-787553294298.europe-west1.run.app/api/v1";

async function getTea(id) {
  const response = await fetch(`${API_BASE}/teas/${id}`);
  const tea = await response.json();
  return tea;
}
```

- `async` before a function makes it return a Promise
- `await` pauses execution until a Promise resolves
- The code reads top-to-bottom, like synchronous code

> 📚 **Glossary: async / await**
> `async` declares a function that returns a Promise. `await` pauses execution until a Promise settles, then returns its resolved value. Only works inside `async` functions.

---

## Error Handling with try/catch

With async/await, you handle errors using `try`/`catch`:

```js
const API_BASE = "https://tea-api-787553294298.europe-west1.run.app/api/v1";

async function getTea(id) {
  try {
    const response = await fetch(`${API_BASE}/teas/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const tea = await response.json();
    return tea;
  } catch (error) {
    console.error("Failed to get tea:", error.message);
    return null;
  }
}
```

This is the same pattern as synchronous error handling - familiar and readable.

---

## Promise.all: Parallel Operations

Sometimes you want to run multiple operations at once:

```js
const API_BASE = "https://tea-api-787553294298.europe-west1.run.app/api/v1";

// Sequential - slow (3 requests, one after another)
const tea1 = await fetch(`${API_BASE}/teas/1`).then(r => r.json());
const tea2 = await fetch(`${API_BASE}/teas/2`).then(r => r.json());
const tea3 = await fetch(`${API_BASE}/teas/3`).then(r => r.json());

// Parallel - fast (3 requests at the same time)
const [tea1, tea2, tea3] = await Promise.all([
  fetch(`${API_BASE}/teas/1`).then(r => r.json()),
  fetch(`${API_BASE}/teas/2`).then(r => r.json()),
  fetch(`${API_BASE}/teas/3`).then(r => r.json()),
]);
```

`Promise.all()` takes an array of Promises and returns a Promise that resolves when ALL of them resolve.

> 📚 **Glossary: Promise.all**
> Takes an array of Promises and returns a single Promise that resolves when all input Promises resolve (with an array of results), or rejects when any input Promise rejects.

---

## Summary

| Term | Meaning |
|---------|-------------|
| Promise | Object representing future completion/failure |
| resolve | Promise succeeded, pass result to .then() |
| reject | Promise failed, pass error to .catch() |
| .then() | Handle successful result |
| .catch() | Handle error |
| async | Makes function return a Promise |
| await | Pause until Promise resolves |
| Promise.all | Run multiple Promises in parallel |

---

## Pre-Reading (Optional)

If you want to go deeper, read these MDN pages:

- [Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

---

## The Tea Shop API

During class you'll work with a real API:

```
Base URL: https://tea-api-787553294298.europe-west1.run.app/api/v1

Endpoints:
GET  /teas           - List all teas
GET  /teas/:id       - Get single tea
GET  /inventory      - Get stock levels
POST /auth/login     - Get auth token
GET  /orders         - List orders (requires auth)
POST /orders         - Create order (requires auth)
```

Example:
```js
const API_BASE = "https://tea-api-787553294298.europe-west1.run.app/api/v1";

const response = await fetch(`${API_BASE}/teas`);
const teas = await response.json();
console.log(teas);
```
