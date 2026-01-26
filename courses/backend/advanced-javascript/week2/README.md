# Callbacks & Delayed Execution (Week 2)

Backends can't run top-to-bottom. Database queries take time. File reads take time. Network calls take time. If your server waited for each operation to complete before doing anything else, it could only serve one request at a time.

This week you'll learn how JavaScript handles operations that take time. You'll understand callbacks, build your own higher-order functions, and see why delayed execution is essential for backends.

## Contents

- [Preparation](./preparation.md)
- [Slides](./slides/index.html)
- [Session Plan](./session-plan.md) (for mentors)
- [Session Materials](./session-materials/)
- [Assignment](./assignment.md)

## Learning Goals

By the end of this session, you will be able to:

- [ ] Assign functions to variables and pass them as arguments
- [ ] Return functions from other functions (function factories)
- [ ] Use `reduce()` to aggregate data (totals, grouping)
- [ ] Write and use callback functions
- [ ] Understand how delayed callbacks work
- [ ] Use `setTimeout()` to schedule delayed execution
- [ ] Use Node.js `fs.readFile()` with callbacks
- [ ] Understand the error-first callback pattern

```js
// Example: Simulated database lookup
function findTeaById(id, callback) {
  setTimeout(() => {
    const tea = teas.find(t => t.id === id);
    callback(tea);
  }, 500);
}

findTeaById(3, tea => {
  console.log("Found:", tea.name);
});
```
