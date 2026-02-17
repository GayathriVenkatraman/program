# Week 1 Preparation

Read this introduction before class. It explains the concepts we'll practice during the session.

---

## Array Methods: A Different Way of Thinking

You've written `for` loops before. They work. But there's another way to work with arrays that's more common in professional JavaScript code: **array methods**.

```js
// Imperative: you describe HOW to do it
const names = [];
for (let i = 0; i < teas.length; i++) {
  names.push(teas[i].name);
}

// Declarative: you describe WHAT you want
const names = teas.map(function (tea) {
  return tea.name;
});
```

Both produce the same result. But the second version is **declarative** - you're declaring what you want (the names), not describing the step-by-step process of how to get them.

By the end of this week, you'll write it even shorter:

```js
const names = teas.map((tea) => tea.name);
```

That's called an **arrow function**. We'll get there - but first, let's take things step by step, and understand what's happening with the regular function syntax.

> 📚 **Glossary: Declarative vs Imperative**
> **Imperative** code describes _how_ to do something (step by step).
> **Declarative** code describes _what_ you want (the result).
> Array methods are declarative - you say "give me the names" not "create empty array, loop, push each name."

---

## Higher-Order Functions

`map`, `filter`, and `forEach` are all **higher-order functions**. This sounds fancy, but it just means: they're functions that take another function as an argument.

```js
teas.map(function (tea) {
  return tea.name;
});
//       ^^^^^^^^^^^^^^^^^^^^
//       this function is passed TO map
```

> 📚 **Glossary: Higher-Order Function**
> A function that takes another function as an argument (or returns a function).
> All array methods like `map`, `filter`, `forEach` are higher-order functions.

---

## Side Effects

Here's an important concept. Look at this code:

```js
let count = 0;
teas.forEach(function (tea) {
  count = count + 1; // modifies something OUTSIDE the function
});
```

This modifies `count` - a variable that exists outside the function. That's a **side effect**: the function reaches out and changes something in the world.

Other examples of side effects:

- Logging to console (`console.log`)
- Updating the DOM
- Writing to a database
- Sending an HTTP request

`forEach` is designed for side effects. That's why it doesn't return anything - its job is to _do_ something for each item, not to produce a new array.

> 📚 **Glossary: Side Effect**
> When a function modifies something outside its own scope: changing a variable, logging to console, updating the DOM, writing to a database.
> `forEach` is typically used _for_ its side effects (like logging).

---

## The Four Methods

Here's what each method does at a high level:

### forEach - "Do something for each item"

- **Input:** N items
- **Output:** Nothing (undefined)
- **Purpose:** Side effects - logging, rendering, sending data

```js
teas.forEach(function (tea) {
  console.log(tea.name);
});
```

### map - "Transform each item"

- **Input:** N items
- **Output:** N transformed items
- **Purpose:** Convert data from one shape to another

```js
const names = teas.map(function (tea) {
  return tea.name;
});
// 20 teas in → 20 names out
```

### filter - "Keep items that match"

- **Input:** N items
- **Output:** 0 to N items (same shape as input)
- **Purpose:** Select a subset based on criteria

The function you pass to `filter` is called a **predicate** - a function that returns `true` or `false`.

```js
const organic = teas.filter(function (tea) {
  return tea.organic;
});
// Keep only items where predicate returns true
```

> 📚 **Glossary: Predicate**
> A function that returns `true` or `false`. Used to test a condition.
> The function you pass to `filter` is a predicate - it decides which items to keep.

---

## Pipelines: Chaining Methods

Because each method returns a new array, you can chain them together:

```js
const result = teas
  .filter(function (tea) {
    return tea.organic;
  })
  .filter(function (tea) {
    return tea.inStock;
  })
  .map(function (tea) {
    return tea.name;
  })
  .sort();
```

Data flows through each step like water through pipes. This is called a **pipeline**.

Once you learn arrow functions, this becomes much cleaner:

```js
const result = teas
  .filter((tea) => tea.organic)
  .filter((tea) => tea.inStock)
  .map((tea) => tea.name)
  .sort();
```

Same logic, less noise. That's why arrow functions are popular for array methods.

> 📚 **Glossary: Pipeline**
> A sequence of operations where each step's output becomes the next step's input.
> Chaining array methods creates a data pipeline.

---

## Summary

| Term                  | Meaning                                      |
| --------------------- | -------------------------------------------- |
| Declarative           | Describe _what_ you want, not _how_          |
| Higher-order function | A function that takes a function as argument |
| Side effect           | Modifying something outside the function     |
| Predicate             | A function returning true/false              |
| Pipeline              | Chained operations, output → input           |

---

## Pre-Reading (Optional)

If you want to go deeper, read these MDN pages:

- [Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
