# Week 1 Assignment

Complete these exercises after the session. All exercises use the tea data.

```js
import { teas } from "../data/teas.js";
```

---

## Exercise 1: Rewrite with Array Methods

This code uses a traditional for-loop. Rewrite it using `filter` and `map` with arrow functions:

```js
const result = [];
for (let i = 0; i < teas.length; i++) {
  if (teas[i].caffeineLevel !== "none") {
    result.push(teas[i].name.toUpperCase());
  }
}
console.log(result);
```

Your solution should be 2-3 lines using chained array methods.

---

## Exercise 2: Inventory Report

Build a function that generates an inventory report:

```js
function inventoryReport(teas) {
  return {
    totalTeas: /* total number of teas */,
    inStock: /* number of teas where inStock is true */,
    outOfStock: /* number of teas where inStock is false */,
    totalInventoryValue: /* sum of (pricePerGram * stockCount) for all teas */,
    averagePrice: /* average pricePerGram across all teas */
  };
}

console.log(inventoryReport(teas));
```

Expected output structure:
```js
{
  totalTeas: 20,
  inStock: 18,
  outOfStock: 2,
  totalInventoryValue: 234.55,  // example number
  averagePrice: 0.21           // example number
}
```

---

## Exercise 3: Low Stock Alert

Create a function that returns teas with low stock (less than 50 items):

```js
function lowStockAlert(teas) {
  // Return array of objects with name and stockCount
  // sorted by stockCount (lowest first)
}

console.log(lowStockAlert(teas));
```

Expected output format:
```js
[
  { name: "Silver Needle", stockCount: 25 },
  { name: "Matcha", stockCount: 30 },
  // ...
]
```

---

## Exercise 4: Teas by Origin

Create a function that groups teas by their origin country:

```js
function teasByOrigin(teas) {
  // Return object where keys are origins and values are arrays of tea names
}

console.log(teasByOrigin(teas));
```

Expected output format:
```js
{
  Japan: ["Sencha", "Matcha", "Gyokuro", "Genmaicha"],
  India: ["Earl Grey", "Darjeeling", "Assam"],
  China: ["Dragon Well", "White Peony", ...],
  // ...
}
```

---

## Exercise 5: Search Function

Create a search function for the tea shop:

```js
function searchTeas(teas, query) {
  // Return teas where the name contains the query (case-insensitive)
  // Return just the names, sorted alphabetically
}

console.log(searchTeas(teas, "green"));
// Might return: ["Dragon Well", "Genmaicha", "Gyokuro", ...]

console.log(searchTeas(teas, "earl"));
// Returns: ["Earl Grey"]
```

Hint: Use `.toLowerCase()` and `.includes()` for case-insensitive search.

---

## Submission

Create a file called `assignment.js` with your solutions. Each exercise should be a function that can be called and tested.

```js
import { teas } from "../data/teas.js";

// Exercise 1
const rewrittenResult = teas
  .filter(/* ... */)
  .map(/* ... */);

// Exercise 2
function inventoryReport(teas) {
  // ...
}

// Exercise 3
function lowStockAlert(teas) {
  // ...
}

// Exercise 4
function teasByOrigin(teas) {
  // ...
}

// Exercise 5
function searchTeas(teas, query) {
  // ...
}

// Test your functions
console.log("Exercise 1:", rewrittenResult);
console.log("Exercise 2:", inventoryReport(teas));
console.log("Exercise 3:", lowStockAlert(teas));
console.log("Exercise 4:", teasByOrigin(teas));
console.log("Exercise 5:", searchTeas(teas, "green"));
```
