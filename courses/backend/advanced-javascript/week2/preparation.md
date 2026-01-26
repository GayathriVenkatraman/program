# Week 2 Preparation

Read this introduction before class. It explains the concepts we'll practice during the session.

---

## Why Backends Need Async

Imagine a tea shop that gets 50 online orders at once. Each order requires:
1. Looking up the tea in the database (10ms)
2. Checking inventory (10ms)
3. Processing payment (200ms)

If the server waited for each step to complete before moving on, one order takes 220ms. Fifty orders? 11 seconds. The 50th customer waits 11 seconds just for their order to *start* processing.

Real backends don't work this way. Instead of waiting, they say: "Start this operation, and call me back when you're done." While waiting for one database query, they can start processing other requests.

This is **asynchronous programming** - the foundation of how backends handle multiple requests efficiently.

---

## Functions Are Values

Before we get to async, we need to understand something fundamental: in JavaScript, functions are values. Just like strings or numbers, you can:

- Assign them to variables
- Store them in arrays
- Pass them as arguments
- Return them from other functions

```js
// Assign a function to a variable
const greet = function(name) {
  return `Hello, ${name}!`;
};

// Call it through the variable
console.log(greet("Alice"));  // "Hello, Alice!"

// Pass it to another function
function runTwice(fn, value) {
  console.log(fn(value));
  console.log(fn(value));
}

runTwice(greet, "Bob");
// "Hello, Bob!"
// "Hello, Bob!"
```

This is what makes callbacks possible.

> 📚 **Glossary: First-Class Functions**
> When functions can be treated like any other value (assigned, passed, returned), they're called "first-class citizens." JavaScript has first-class functions.

---

## Callbacks

A **callback** is a function you pass to another function, to be called later.

You've already used callbacks! Every time you write `.map()`, `.filter()`, or `.forEach()`, you pass a callback:

```js
teas.map(tea => tea.name);
//       ^^^^^^^^^^^^^^^^
//       This is a callback. map calls it for each item.
```

The difference between these callbacks and async callbacks is *when* they're called:

- **Synchronous callbacks**: Called immediately, during the function's execution (like in `map`)
- **Asynchronous callbacks**: Called later, after some operation completes (like after a file loads)

> 📚 **Glossary: Callback**
> A function passed to another function to be called at some point. The receiving function decides when to "call back" your function.

---

## Synchronous vs Asynchronous

**Synchronous** code runs line by line. Each line waits for the previous one to finish:

```js
console.log("First");
console.log("Second");
console.log("Third");
// Output: First, Second, Third (always in this order)
```

**Asynchronous** code doesn't wait. You start an operation and provide a callback for when it's done:

```js
console.log("First");

setTimeout(() => {
  console.log("Second");
}, 1000);

console.log("Third");

// Output: First, Third, Second
// "Second" appears last because setTimeout waits 1000ms
```

The key insight: while waiting for the timeout, JavaScript continues running other code. It doesn't freeze.

> 📚 **Glossary: Synchronous vs Asynchronous**
> **Synchronous**: Code runs in sequence, each operation blocks until complete.
> **Asynchronous**: Code continues running while waiting for operations to complete. Callbacks handle the results when ready.

---

## setTimeout: The Simplest Async

`setTimeout` is the simplest async function. It waits a specified time, then calls your callback:

```js
setTimeout(callback, delayInMilliseconds);
```

We use it to simulate database delays:

```js
function simulatedDbLookup(id, callback) {
  setTimeout(() => {
    const result = { id, name: "Found item" };
    callback(result);
  }, 500);  // Simulates 500ms database delay
}

console.log("Starting lookup...");
simulatedDbLookup(42, result => {
  console.log("Got result:", result);
});
console.log("Lookup started, doing other work...");

// Output:
// Starting lookup...
// Lookup started, doing other work...
// Got result: { id: 42, name: "Found item" }  (after 500ms)
```

---

## Node.js File Operations

Real backend async often involves file operations. Node.js provides `fs.readFile`:

```js
import fs from "fs";

fs.readFile("./data.json", "utf8", (error, data) => {
  if (error) {
    console.error("Failed to read file:", error.message);
    return;
  }
  console.log("File contents:", data);
});
```

Notice the callback signature: `(error, data)`. This is the **error-first callback** pattern - a Node.js convention.

> 📚 **Glossary: Error-First Callback**
> Node.js convention where callbacks receive `(error, result)`. If `error` is truthy, something went wrong. If `error` is null/undefined, proceed with `result`. This pattern ensures consistent error handling across all async operations.

---

## reduce: Aggregating Data

We deferred `reduce` from Week 1 because it's the most complex array method. Now that you understand `map` and `filter`, you're ready.

`reduce` builds up a single value from an array:

```js
// Sum all numbers
const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((accumulator, current) => {
  return accumulator + current;
}, 0);  // 0 is the initial value
// total = 15
```

The **accumulator** is the value being built up. It starts as your initial value and becomes your final result:

```js
// Count teas by type
const countByType = teas.reduce((acc, tea) => {
  acc[tea.type] = (acc[tea.type] || 0) + 1;
  return acc;
}, {});  // Start with empty object

// { green: 6, black: 5, herbal: 4, oolong: 3, white: 2 }
```

> 📚 **Glossary: Accumulator**
> In `reduce`, the value being built up across iterations. It starts as the initial value you provide and transforms with each item until it becomes your final result.

---

## Pure Functions and Immutability

Two concepts become important with async code:

**Pure function**: A function that always returns the same output for the same input, and has no side effects.

```js
// Pure - no side effects, same input = same output
function double(x) {
  return x * 2;
}

// Impure - modifies external state
let total = 0;
function addToTotal(x) {
  total += x;  // side effect!
  return total;
}
```

**Immutability**: Creating new data instead of modifying existing data.

```js
// Mutable - modifies original
teas.push(newTea);  // Changes the teas array

// Immutable - creates new array
const newTeas = [...teas, newTea];  // Original unchanged
```

Why do these matter? In async code, operations can overlap. If two callbacks modify the same data, bugs happen. Pure functions and immutability make async code predictable.

> 📚 **Glossary: Pure Function**
> A function that: (1) always returns the same output for the same input, (2) has no side effects. Makes code predictable and testable.

> 📚 **Glossary: Immutability**
> Creating new data instead of modifying existing data. `map` and `filter` are immutable - they return new arrays without changing the original.

---

## Summary

| Term | Meaning |
|------|---------|
| First-class functions | Functions treated as values |
| Callback | Function passed to another function, called later |
| Synchronous | Code runs in sequence, blocking |
| Asynchronous | Code continues while waiting, uses callbacks |
| Error-first callback | Node pattern: `(error, result)` |
| Accumulator | The building-up value in reduce |
| Pure function | Same input = same output, no side effects |
| Immutability | Create new data, don't modify existing |

---

## Pre-Reading (Optional)

- [MDN: Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [MDN: setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
- [Node.js: fs.readFile()](https://nodejs.org/api/fs.html#fsreadfilepath-options-callback)
