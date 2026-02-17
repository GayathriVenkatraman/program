# Week 2 Assignment

Complete these exercises after the session. They build on callbacks, delayed execution, and reduce.

```js
import { teas } from "../data/teas.js";
import fs from "fs";
```

---

## Exercise 1: Stock by Caffeine Level

Use `reduce` to calculate the total stock for each caffeine level:

```js
function stockByCaffeine(teas) {
  return teas.reduce((acc, tea) => {
    // Your implementation
  }, {});
}

console.log(stockByCaffeine(teas));
// { high: 745, medium: 450, low: 190, none: 635 }
```

This tells you how much inventory you have for customers who want high-caffeine vs caffeine-free options.

---

## Exercise 2: Order Processing System ⭐

Create an order processing system with simulated delays.

```js
const order = {
  id: 1001,
  customerId: 42,
  items: [
    { teaId: 1, grams: 100 },
    { teaId: 8, grams: 50 },
    { teaId: 3, grams: 200 },
  ],
};
```

Create these functions:

**1. `validateOrder(order, callback)`** - 200ms delay

- Check all teaIds exist in the teas array
- Callback receives `{ valid: boolean, errors: string[] }`

**2. `calculateTotal(order, callback)`** - 300ms delay

- Sum up `pricePerGram * grams` for each item
- Callback receives `{ orderId: number, total: number }`

**3. `checkStock(order, callback)`** - 400ms delay

- Check if each tea has enough stock for the order quantity
- Callback receives `{ orderId: number, inStock: boolean, shortages: string[] }`

Test each function individually with console.log as callback function to see results after delays:

You an test `validateOrder` like this:

```js
validateOrder(order, (result) => {
  console.log("Validation result:", result);
});
```

---

## Exercise 3: Sequential Processing

Using the functions from Exercise 2, process an order through all three steps _in sequence_:

1. First validate
2. If valid, calculate total
3. If total calculated, check stock
4. Log final result

This requires "callback nesting" - calling the next function inside the previous callback.

```js
function processOrder(order) {
  console.log("Processing order", order.id);

  validateOrder(order, (validation) => {
    if (!validation.valid) {
      console.log("Validation failed:", validation.errors);
      return;
    }
    console.log("Validation passed");

    calculateTotal(order, (pricing) => {
      console.log("Total:", pricing.total, "DKK");

      // Continue with checkStock...
    });
  });
}

processOrder(order);
```

> 💡 This nesting is ugly and hard to read. It's called "callback hell." Week 3 will show how Promises solve this!

---

## Exercise 4: Inventory Aggregation from File

Create a file `inventory-updates.json`:

<!-- prettier-ignore -->
```jsonl
[
  { "teaId": 1, "change": -20, "reason": "sale" },
  { "teaId": 1, "change": 50, "reason": "restock" },
  { "teaId": 8, "change": -10, "reason": "sale" },
  { "teaId": 3, "change": -100, "reason": "sale" },
  { "teaId": 8, "change": 30, "reason": "restock" }
]
```

Write a function that:

1. Reads this file using a callback
2. Uses `reduce` to calculate net change per tea
3. Combines with original tea data to show new stock levels
4. Logs a report

```js
function generateInventoryReport(callback) {
  fs.readFile("./inventory-updates.json", "utf8", (error, data) => {
    if (error) {
      callback(error, null);
      return;
    }

    // Parse updates, calculate changes, build report
    // Call callback(null, report) when done
  });
}

generateInventoryReport((error, report) => {
  if (error) {
    console.error("Failed:", error.message);
    return;
  }
  console.log(report);
});
```

Expected output format:

```plaintext
Inventory Report:
- Sencha: was 150, change +30, now 180
- Matcha: was 30, change +20, now 50
- Dragon Well: was 45, change -100, now -55 (NEGATIVE!)
```

---

## Exercise 5: Build runSequentially ⭐⭐

Create a utility function that runs delayed operations in sequence:

```js
function runSequentially(tasks, finalCallback) {
  // tasks is an array of functions
  // each function signature: (done) => { ... done(); }
  // run them one after another
  // when all done, call finalCallback
}
```

Test it:

```js
const tasks = [
  (done) =>
    setTimeout(() => {
      console.log("Task 1");
      done();
    }, 300),
  (done) =>
    setTimeout(() => {
      console.log("Task 2");
      done();
    }, 200),
  (done) =>
    setTimeout(() => {
      console.log("Task 3");
      done();
    }, 100),
];

runSequentially(tasks, () => {
  console.log("All tasks complete!");
});
```

Expected output (in order, despite different delays):

```plaintext
Task 1
Task 2
Task 3
All tasks complete!
```

> 💡 This is challenging! Hint: use recursion or track an index. Each task's `done` callback should trigger the next task.

---

## Submission

Create a folder `week2-assignment/` with:

- `exercise1.js`
- `exercise2.js`
- `exercise3.js`
- `exercise4.js` + `inventory-updates.json`
- `exercise5.js`

Each file should be runnable with `node exerciseN.js`.

```js
// Example structure for exercise1.js
import { teas } from "../data/teas.js";

function teasByOrigin(teas) {
  return teas.reduce((acc, tea) => {
    // ...
  }, {});
}

console.log(teasByOrigin(teas));
```
