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

## Exercise 2: Inventory Report ⭐

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

## Exercise 4: Teas by Origin ⭐⭐

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

console.log(searchTeas(teas, "earl"));
// Returns: ["Earl Grey"]

console.log(searchTeas(teas, "dragon"));
// Returns: ["Dragon Well"]

console.log(searchTeas(teas, "ch"));
// Returns: ["English Breakfast", "Genmaicha", "Lapsang Souchong"]
```

Hint: Use `.toLowerCase()` and `.includes()` for case-insensitive search.

---

## Optional: reduce

These exercises use `reduce`. Try them if you want a challenge!

### Exercise 6: Total Inventory Value (Optional)

Calculate the total value of all tea inventory using `reduce`:

```js
const totalValue = teas.reduce((sum, tea) => {
  // add pricePerGram * stockCount to sum
}, 0);

console.log("Total inventory value:", totalValue);
```

Hint: `reduce` builds up a single value by processing each item. The `0` is your starting value.

### Exercise 7: Count by Type (Optional)

Use `reduce` to count how many teas of each type exist:

```js
const countByType = teas.reduce((counts, tea) => {
  // increment counts[tea.type]
}, {});

console.log(countByType);
// Expected: { green: 6, black: 6, herbal: 4, oolong: 2, white: 2 }
```

---

## Submission

Create a folder `week1-assignment/` with:
- `exercise1.js` - Rewrite with array methods
- `exercise2.js` - Inventory report
- `exercise3.js` - Low stock alert
- `exercise4.js` - Teas by origin
- `exercise5.js` - Search function
- `exercise6.js` - Total inventory value (optional)
- `exercise7.js` - Count by type (optional)

Each file should be runnable with `node exerciseN.js`.

```js
// Example structure for exercise1.js
import { teas } from "../data/teas.js";

const result = teas
  .filter(/* ... */)
  .map(/* ... */);

console.log(result);
```
