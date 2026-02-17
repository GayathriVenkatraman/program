# Week 2 Exercises: Callbacks & Delayed Execution

All exercises use the tea shop data. Start by loading it:

```js
import { teas } from "../../data/teas.js";
```

---

## Part 1: Functions as Values

Functions in JavaScript are "first-class citizens" - they can be assigned to variables, stored in arrays, and passed around like any other value.

<details>
<summary>📚 Recall: First-Class Functions</summary>

A first-class function can be: assigned to a variable, passed as an argument, returned from a function, stored in data structures. JavaScript treats functions like any other value.
</details>

### Exercise 1

Create a function that logs a tea's name and origin in the format `"Sencha (Japan)"`. Assign it to a variable called `logTea`. Call it with the first tea in the array.

```js
const logTea = function(tea) {
  // your code
};

logTea(teas[0]);  // should log: "Sencha (Japan)"
```

### Exercise 2

Create a function called `functionRunner` that takes a function as a parameter and calls it.

```js
function functionRunner(fn) {
  // call the function that was passed in
}

// Test it:
functionRunner(function() {
  console.log("I was called!");
});

// Also test with a function variable:
const sayHello = function() {
  console.log("Hello!");
};
functionRunner(sayHello);
```

> 💡 This is the core of callbacks: passing a function to another function that calls it.

### Exercise 3

Create an array containing three different functions. Each function should log something different. Loop through the array and call each function.

```js
const functions = [
  function() { console.log("First"); },
  // add two more
];

for (let i = 0; i < functions.length; i++) {
  functions[i]();  // call each function
}
```

### Exercise 4 ⭐

Create a function `createGreeter(greeting)` that returns a new function. The returned function should take a name and log the greeting with the name.

```js
const sayHello = createGreeter("Hello");
const sayHi = createGreeter("Hi");

sayHello("Alice");  // "Hello, Alice!"
sayHi("Bob");       // "Hi, Bob!"
```

> 💡 This pattern is called a "function factory" - a function that creates and returns other functions.

---

## Part 2: reduce

`reduce` builds up a single value from an array. It's the most powerful array method.

<details>
<summary>📚 Recall: Accumulator</summary>

The accumulator is the value being "built up" through each iteration. It starts as your initial value (the second argument to reduce) and ends as your final result.
</details>

### Exercise 5

Use `reduce` to calculate the total `stockCount` across all teas.

```js
const totalStock = teas.reduce((sum, tea) => {
  // return the new sum
}, 0);

console.log(totalStock);  // sum of all stockCount values
```

### Exercise 6

Calculate the total inventory value: the sum of `pricePerGram * stockCount` for each tea.

```js
const inventoryValue = teas.reduce(/* ... */);
console.log(inventoryValue);
```

### Exercise 7

Use `reduce` to count how many teas of each type exist.

```js
const countByType = teas.reduce((counts, tea) => {
  // increment counts[tea.type]
  // hint: counts[tea.type] might be undefined the first time
}, {});

console.log(countByType);
// Expected: { green: 6, black: 6, herbal: 4, oolong: 2, white: 2 }
```

### Exercise 8 ⭐

Use `reduce` to group tea names by their origin country.

```js
const groupedByOrigin = teas.reduce(/* ... */);
console.log(groupedByOrigin);
// Expected: { Japan: ["Sencha", "Matcha", ...], China: [...], ... }
```

> 💡 This solves Exercise 4 from Week 1's assignment! Now you know the proper way to implement it.

---

## Part 3: Building Higher-Order Functions

Let's build our own versions of array methods to understand how callbacks work under the hood.

<details>
<summary>📚 Recall: Callback</summary>

A callback is a function you pass to another function, to be called at some point. In `teas.map(tea => tea.name)`, the arrow function IS the callback - map calls it for each item.
</details>

### Exercise 9

Create your own `myForEach(array, callback)` function that works like the built-in `forEach`.

```js
function myForEach(array, callback) {
  // loop through array
  // call callback for each item
}

// Test it:
myForEach(teas, function(tea) {
  console.log(tea.name);
});
```

### Exercise 10

Create your own `myMap(array, callback)` function that works like the built-in `map`.

```js
function myMap(array, callback) {
  const result = [];
  // loop through array
  // call callback for each item
  // push the return value to result
  return result;
}

// Test it:
const names = myMap(teas, function(tea) {
  return tea.name;
});
console.log(names);  // ["Sencha", "Earl Grey", ...]
```

### Exercise 11 ⭐

Create your own `myFilter(array, callback)` function that works like the built-in `filter`.

```js
function myFilter(array, callback) {
  // your implementation
}

// Test it:
const organic = myFilter(teas, function(tea) {
  return tea.organic;
});
console.log(organic.length);  // number of organic teas
```

> 💡 Building these yourself demystifies array methods. They're just functions that call your callback at the right time.

---

## Part 4: setTimeout & Delayed Callbacks

Now the twist: what if the callback runs *later*? `setTimeout` is the simplest example - it waits, then calls your callback.

<details>
<summary>📚 Recall: Delayed Execution</summary>

With delayed execution, the code doesn't wait. "Start this operation, continue running other code, call the callback when done." Unlike regular code which runs line-by-line and blocks.
</details>

### Exercise 12

What order will these console.logs appear? Write your prediction first, then run the code to check.

```js
console.log("1. Starting");

setTimeout(function() {
  console.log("2. Timeout done");
}, 1000);

console.log("3. Continuing");
```

### Exercise 13

Create a function `runAfterDelay(delay, callback)` that waits `delay` milliseconds, then calls the callback.

```js
function runAfterDelay(delay, callback) {
  // use setTimeout
}

// Test it:
runAfterDelay(2000, function() {
  console.log("This runs after 2 seconds");
});

runAfterDelay(1000, function() {
  console.log("This runs after 1 second");
});

console.log("This runs immediately");
```

What order do the three messages appear?

### Exercise 14

Create a function `findTeaById(id, callback)` that simulates a database lookup with a 500ms delay.

```js
function findTeaById(id, callback) {
  // Use setTimeout to wait 500ms
  // Inside the timeout: find the tea by id, then call the callback with it
}

// Test it:
console.log("Looking up tea...");
findTeaById(3, function(tea) {
  console.log("Found:", tea.name);
});
console.log("Request sent, waiting...");
```

Before running: predict the output order. Then run it to check.

Expected output order:
1. "Looking up tea..."
2. "Request sent, waiting..."
3. (after 500ms) "Found: Dragon Well"

### Exercise 15 ⭐

Call `findTeaById` three times in a row with different IDs. Notice that all three requests start at the same time - they don't wait for each other.

```js
findTeaById(1, function(tea) { console.log("Got:", tea.name); });
findTeaById(5, function(tea) { console.log("Got:", tea.name); });
findTeaById(10, function(tea) { console.log("Got:", tea.name); });
console.log("All requests sent!");
```

> 💡 "All requests sent!" appears first, then all three results appear together after 500ms. This is how backends handle multiple requests efficiently.

---

## Part 5: File System

Node.js file operations use callbacks. `fs.readFile` takes a callback that runs when the file is loaded.

<details>
<summary>📚 Recall: Error-First Callback</summary>

Node.js convention: callbacks receive `(error, result)`. If error exists, something went wrong - handle it and return early. If error is null/undefined, proceed with result.
</details>

### Exercise 16

First, create a file called `orders.json` in the same folder with this content:
<!-- prettier-ignore -->
```jsonl
[
  { "id": 1, "customerId": 101, "items": [{ "teaId": 1, "grams": 100 }] },
  { "id": 2, "customerId": 102, "items": [{ "teaId": 3, "grams": 50 }, { "teaId": 8, "grams": 30 }] },
  { "id": 3, "customerId": 103, "items": [{ "teaId": 5, "grams": 200 }] }
]
```

Then write code that reads the file and logs how many orders there are:

```js
import fs from "fs";

fs.readFile('./orders.json', {encoding: 'utf8'}, function(error, data) {
  if (error) {
    console.error(error);
    return;
  }
  // 1. Parse the JSON string into an array
  // 2. Log the number of orders
});
```

Try to point to a non-existent file to see how the error handling works.

Expected output: `Number of orders: 3`

### Exercise 17 ⭐⭐

Building on Exercise 16, after reading the orders:
1. For each order, look up the tea prices from the teas array
2. Calculate the total value of each order (`pricePerGram * grams`)
3. Log each order's total

```js
// Expected output:
// Order 1: 12.00 DKK (1 item)
// Order 2: 26.00 DKK (2 items)
// Order 3: 36.00 DKK (1 item)
```

> 💡 You'll need to find each tea by ID, then multiply pricePerGram by grams.
