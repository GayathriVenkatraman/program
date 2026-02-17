# Week 1 Exercises: Array Methods

All exercises use the tea shop data. Start by loading it:

```js
import { teas } from "../../data/teas.js";
```

---

## Part 1: forEach

`forEach` walks through each item. No return value - just side effects.

<details>
<summary>📚 Recall: Side Effect</summary>

A side effect is when a function modifies something outside itself - like logging to console or updating a variable. `forEach` is designed for side effects.

</details>

### Exercise 1

Log each tea's name to the console.

### Exercise 2

Log each tea in the format: `"Sencha (Japan)"`

### Exercise 3

Count how many teas are organic. Use a variable outside the forEach to track the count.

> 💡 Notice: You're modifying an external variable (`count`). That's a side effect - and exactly what `forEach` is for.

---

## Part 2: map

`map` transforms each item. Same count in, same count out.

> 💡 Unlike `forEach`, `map` has no side effects. It creates a new array without changing the original.

### Exercise 4

Create an array containing just the tea names.

```js
// Expected: ["Sencha", "Earl Grey", "Dragon Well", ...]
```

### Exercise 5

Create an array of prices in DKK for 100 grams (multiply `pricePerGram` by 100).

```js
// Expected: [12, 8, 25, ...]
```

### Exercise 6

Create an array of display strings in the format: `"Sencha - 12 DKK/100g"`

---

## Part 3: filter

`filter` keeps items that match. Fewer items out, same shape.

<details>
<summary>📚 Recall: Predicate</summary>

The function you pass to `filter` is called a predicate - a function that returns `true` or `false`. Items where the predicate returns `true` are kept.

</details>

### Exercise 7

Get all organic teas.

### Exercise 8

Get all teas from Japan.

### Exercise 9

Get all teas with `caffeineLevel` equal to `"high"`.

### Exercise 10

Get all teas that are both in stock AND organic.

> 💡 The items themselves aren't changed - they're just selected. That's the difference between `filter` (select) and `map` (transform).

---

## Part 4: Combining Methods

Chain methods together: the output of one becomes input to the next.

<details>
<summary>📚 Recall: Pipeline</summary>

When you chain methods, data flows through like water through pipes. Each step's output becomes the next step's input. This is a pipeline.

</details>

### Exercise 11

Get the names of all green teas.

```js
// filter to green type, then map to names
```

### Exercise 12

Get display prices (format: `"Sencha - 12 DKK/100g"`) for organic teas only.

### Exercise 13 ⭐

Get Japanese teas sorted by price (lowest first).

```js
// Hint: .sort((a, b) => a.pricePerGram - b.pricePerGram)
```

---

## Part 5: Arrow Functions

Rewrite the exercises above using arrow function syntax.

### Exercise 14

Rewrite exercises 1-3 using arrow functions.

### Exercise 15

Rewrite exercises 4-6 using arrow functions with implicit return (no curly braces).

Example:

```js
// Traditional
teas.map(function (tea) {
  return tea.name;
});

// Arrow with implicit return
teas.map((tea) => tea.name);
```

### Exercise 16 ⭐

When do you need explicit return (curly braces)?

Rewrite exercise 6 both ways:

- With implicit return (hint: use template literals inline)
- With explicit return (curly braces and `return` keyword)

---

## Part 6: Challenge

### Exercise 17 ⭐⭐

Build a `filterTeas(teas, criteria)` function that accepts a filter object:

```js
filterTeas(teas, { organic: true });
// Returns all organic teas

filterTeas(teas, { origin: "Japan" });
// Returns all Japanese teas

filterTeas(teas, { organic: true, origin: "Japan" });
// Returns organic Japanese teas

filterTeas(teas, { type: "green", inStock: true });
// Returns green teas that are in stock
```

The function should work with any combination of filter properties.

<details>
<summary>📚 This is declarative programming</summary>

Instead of writing specific filter functions for each case, you're describing _what_ you want with a data structure (the criteria object). The function figures out _how_ to apply it. That's declarative.

</details>
