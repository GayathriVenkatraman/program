# Promises & async/await (Week 3)

Last week you learned about callbacks - functions that run later. You saw how nesting callbacks gets messy ("callback hell"). This week, you'll learn Promises and async/await - cleaner ways to handle asynchronous operations.

This week you'll work with a real API: the Tea Shop backend. You'll fetch data, handle errors, and chain operations - just like you would when building real backend services.

## Contents

- [Preparation](./preparation.md)
- [Slides](./slides/index.html)
- [Session Plan](./session-plan.md) (for mentors)
- [Session Materials](./session-materials/)
- [Assignment](./assignment.md)

## Learning Goals

By the end of this session, you will be able to:

- [ ] Understand why Promises exist (solving callback hell)
- [ ] Consume Promises with `.then()` and `.catch()`
- [ ] Chain multiple `.then()` calls
- [ ] Create your own Promises with `new Promise()`
- [ ] Use `async`/`await` syntax for cleaner code
- [ ] Handle errors with `try`/`catch` in async functions
- [ ] Run multiple Promises in parallel with `Promise.all()`
- [ ] Fetch data from APIs using `fetch()`

```js
// From callback hell...
validateOrder(order, (err, valid) => {
  if (err) return handleError(err);
  calculateTotal(order, (err, total) => {
    if (err) return handleError(err);
    checkStock(order, (err, inStock) => {
      if (err) return handleError(err);
      // deeply nested...
    });
  });
});

// ...to clean async/await
async function processOrder(order) {
  const valid = await validateOrder(order);
  const total = await calculateTotal(order);
  const inStock = await checkStock(order);
  return { valid, total, inStock };
}
```
