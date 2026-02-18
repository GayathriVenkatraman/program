# Session Plan (Week 4: Classes & Object-Oriented Programming)

> This guide is for mentors. It outlines how to run the session, what to emphasize, and why we introduce certain terminology.

---

## Session Goals

By the end of this session, trainees should:

1. Understand why classes exist (organizing data with behavior)
2. Declare a class with `constructor` and `this`
3. Create instances with `new`
4. Add and call methods on instances
5. Understand `this` as "the current object"
6. Know when to use static methods
7. Understand inheritance basics (`extends`, `super()`)

---

## Glossary Goals

| Term              | Why we introduce it                                                                                        |
| ----------------- | ---------------------------------------------------------------------------------------------------------- |
| **class**         | Fundamental concept in every backend framework. They'll see classes in Express, database ORMs, everywhere. |
| **constructor**   | Understanding initialization is essential for creating properly structured objects.                        |
| **instance**      | Distinguishing blueprint from object is crucial for understanding how classes work.                        |
| **this**          | Required for writing any class method. Keep it simple: "this = the current object."                        |
| **encapsulation** | Core OOP principle. Helps them understand why methods live inside classes.                                 |

---

## Session Outline

### 1. Introduction

- Recap the course journey: array methods → callbacks → Promises → now organizing code
- Show the copy-paste problem: same validation, same price formula, repeated everywhere
- "What if the tea object could validate itself and calculate its own prices?"
- Introduce the class concept

**Use:** [Slides](./session-materials/slides/index.html) (introduction sections)

### 2. Classes, Constructor, this, new

- Start simple: a class with just a constructor
- Explain `this` as "the current object being created"
- Show how `new` creates an instance
- Live code: build a `Tea` class step by step
- Compare plain object vs class instance

**Key point:** "A class is a blueprint. `new` builds an object from that blueprint. `this` is the object being built."

**Exercises:** [Part 1](./session-materials/exercises.md#part-1-creating-classes) (exercises 1-4)

### 3. Methods

- Add `priceFor(grams)` and `describe()` methods to Tea
- Emphasize: the method lives _with_ the data (encapsulation)
- Introduce `OrderItem`: a class that _uses_ a Tea instance (composition)
- Live code: `OrderItem` with `lineTotal()`

**Key point:** "Methods live inside the class, right next to the data they work with. The object knows how to do things with its own data."

**Exercises:** [Part 2](./session-materials/exercises.md#part-2-methods) (exercises 5-8)

### Break 1

### 4. this and State

- Show how methods can _modify_ instance state, not just read it
- Live code: `Inventory` with `sell()` and `restock()`
- Live code: `Order` with status transitions
- Emphasize: `this` is how you read AND write state

**Key point:** "Methods don't just read data - they can change it. `this.stockCount -= grams` modifies this specific instance's state."

**Exercises:** [Part 3](./session-materials/exercises.md#part-3-this-and-state) (exercises 9-11)

### 5. Classes Working Together

- Show composition: classes that use other classes
- Live code: `TeaCatalog` that holds Tea instances
- Live code: `Order` that contains `OrderItem` instances
- Connect to previous weeks: use `.filter()`, `.map()`, `.reduce()` inside methods

**Key point:** "Real programs are built from classes that work together. An Order contains OrderItems. A Catalog holds Teas. Each class does its own job."

**Exercises:** [Part 4](./session-materials/exercises.md#part-4-classes-working-together) (exercises 12-14)

### Break 2

### 6. Static Methods

- Some operations belong to the class, not to any instance
- Live code: `Tea.fromObject()` factory method
- Live code: `Tea.findCheapest()` utility
- Explain when to use static vs instance methods

**Key point:** "Static methods are called on the class: `Tea.fromObject(data)`. Instance methods are called on objects: `sencha.priceFor(100)`. Use static when the operation doesn't belong to one specific instance."

**Exercises:** [Part 5](./session-materials/exercises.md#part-5-static-methods) (exercises 15-16)

### 7. Wrap-up

- Brief inheritance demo: `PremiumTea extends Tea`
- Recap: the four-week journey (array methods → callbacks → Promises → classes)
- How classes connect to everything: the Tea Shop API uses models like these behind the scenes
- Part 6 is a stretch goal for fast learners
- Introduce the assignment

---

## Teaching Tips

### Managing exercises with mixed skill levels

The exercises are intentionally numerous - students progress at different speeds. Here's how to manage this:

1. **Let students work on Part 1** - observe how far each gets individually
2. **Solve one exercise in plenum** - pick one that weaker students struggled with but stronger students just finished. This way everyone benefits
3. **Move on to Part 2** - weaker students skip remaining Part 1 exercises (they can revisit later)
4. **Repeat** for each part

Exercises marked with ⭐ are optional stretch goals. If your fastest students finish all exercises while others haven't solved the first one, that part needs an additional challenge - let us know, or create a PR with a creative challenging exercise!

### Keep `this` simple

The `this` keyword is notoriously confusing in JavaScript. For this session, keep it simple: "Inside a class, `this` means the current object." Don't get into `bind`, `call`, `apply`, or arrow function `this` behavior. Those are advanced topics for later.

### Composition before inheritance

Spend most of the time on classes working together (composition). Inheritance is introduced last and only briefly. Most real-world JavaScript code uses composition more than inheritance.

### Connect to previous weeks

This is the last week - tie it all together:

- "Remember `.filter()` and `.map()` from Week 1? You'll use them inside class methods"
- "Remember `.reduce()` from Week 2? Perfect for calculating totals in an Order"
- "The Tea Shop API from Week 3? Its backend uses classes just like these"

### Common mistakes to watch for

- Forgetting `new` when creating instances (get `undefined` or errors)
- Forgetting `this.` when accessing properties in methods
- Calling instance methods on the class instead of on an instance
- Confusing static methods with instance methods

---

## Materials

- [Slides](./session-materials/slides/index.html) - Reveal.js presentation
- [Exercises](./session-materials/exercises.md) - In-class exercises
- [Assignment](./assignment.md) - Take-home work
- [Tea Data](../data/teas.js) - Shared dataset
