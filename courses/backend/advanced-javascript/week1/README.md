# Array Methods (Week 1)

Array methods are the Logic layer's core tools. Every backend request involves transforming data: filtering results, mapping to response formats, reducing to totals. These operations happen on nearly every request.

This week you'll learn the three essential methods: `forEach`, `map`, and `filter`. You'll understand when to use each one, and how they fit into the Data → Logic → Rendering model.

## Contents

- [Preparation](./preparation.md)
- [Slides](./session-materials/slides/index.html)
- [Session Plan](./session-plan.md) (for mentors)
- [Session Materials](./session-materials/)
- [Assignment](./assignment.md)

## Learning Goals

By the end of this session, you will be able to:

- [ ] Use `forEach` for side effects (logging, rendering)
- [ ] Use `map` to transform arrays (N items → N transformed items)
- [ ] Use `filter` to select items (N items → fewer items, same shape)
- [ ] Combine multiple array methods through chaining
- [ ] Use arrow function syntax with implicit and explicit returns
- [ ] Recognize which methods belong in the Logic layer vs Rendering layer
- [ ] Know how to find and learn about other array methods such as `.find()`, `.some()`, `.reduce()`

### After this session you will understand code like this

```js
// Example: Get names of organic Japanese teas
const result = teas
  .filter((tea) => tea.origin === "Japan")
  .filter((tea) => tea.organic)
  .map((tea) => tea.name);
// ["Sencha", "Matcha"]
```
