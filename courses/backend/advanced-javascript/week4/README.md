# Classes & Object-Oriented Programming (Week 4)

Over the past three weeks you've transformed data with array methods, managed async flows with callbacks and Promises, and fetched from a real API. But all your data has been plain objects - no validation, no built-in behavior, no structure beyond what you remember to add each time.

This week you'll learn classes: blueprints for creating objects with consistent structure and built-in behavior. You'll build Tea, Order, and Inventory classes that validate data, calculate totals, and work together - just like the models behind the Tea Shop API you've been using.

## Contents

- [Preparation](./preparation.md)
- [Slides](./slides/index.html)
- [Session Plan](./session-plan.md) (for mentors)
- [Session Materials](./session-materials/)
- [Assignment](./assignment.md)

## Learning Goals

By the end of this session, you will be able to:

- [ ] Understand why classes exist (organizing data with behavior)
- [ ] Declare a class using `class`, `constructor`, and `this`
- [ ] Instantiate objects from classes using `new`
- [ ] Add methods to classes and call them on instances
- [ ] Use `this` to access and modify instance state
- [ ] Use static methods for utility operations on a class
- [ ] Use inheritance with `extends` and `super()`
- [ ] Understand the difference between a class (blueprint) and an object (instance)

```js
// From scattered plain objects...
const tea = { name: "Sencha", pricePerGram: 0.12, origin: "Japan" };
// No validation, no behavior, no consistency

// ...to structured classes with built-in behavior
class Tea {
  constructor(name, pricePerGram, origin) {
    this.name = name;
    this.pricePerGram = pricePerGram;
    this.origin = origin;
  }

  priceFor(grams) {
    return this.pricePerGram * grams;
  }
}

const sencha = new Tea("Sencha", 0.12, "Japan");
console.log(sencha.priceFor(100)); // 12
```
