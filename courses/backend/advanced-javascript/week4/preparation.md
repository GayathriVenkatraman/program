# Week 4 Preparation

Read this introduction before class. It explains the concepts we'll practice during the session.

---

## Why Classes? The Copy-Paste Problem

Over the past three weeks, you've worked with plain objects like this:

```js
const tea1 = { name: "Sencha", pricePerGram: 0.12, origin: "Japan" };
const tea2 = { name: "Earl Grey", pricePerGram: 0.08, origin: "India" };
```

That works fine for reading data. But what happens when you need to *do things* with it?

```js
// Calculate price for 100 grams
const price1 = tea1.pricePerGram * 100;
const price2 = tea2.pricePerGram * 100;

// Validate a new tea
function validateTea(tea) {
  if (!tea.name) throw new Error("Name required");
  if (tea.pricePerGram < 0) throw new Error("Price must be positive");
}
```

Every time you create a tea, you have to remember its shape. Every time you calculate a price, you repeat the same formula. Every time you validate, you call a separate function that isn't connected to the data.

Now imagine a backend that creates hundreds of tea objects, order objects, and inventory objects. The same formulas, the same validation, scattered across your codebase. Change the price formula? Find and update every place it appears.

Classes solve this by bundling **data** and **behavior** together.

---

## The Constructor and `this`

A **constructor** is a special method that runs when you create an object from a class. It sets up the initial state:

```js
class Tea {
  constructor(name, pricePerGram, origin) {
    this.name = name;
    this.pricePerGram = pricePerGram;
    this.origin = origin;
  }
}
```

The keyword `this` refers to the specific object being created. When you write `this.name = name`, you're saying "store the `name` parameter on this particular object."

Think of it like filling in a form. The class is the blank form, and the constructor fills in the fields for each specific instance.

```js
const sencha = new Tea("Sencha", 0.12, "Japan");
// this.name = "Sencha"
// this.pricePerGram = 0.12
// this.origin = "Japan"

const earlGrey = new Tea("Earl Grey", 0.08, "India");
// this.name = "Earl Grey"  (different object, different "this")
```

Each object gets its own copy of the data. Changing `sencha.name` doesn't affect `earlGrey.name`.

> 📚 **Glossary: constructor**
> A special method that runs automatically when you create a new instance with `new`. It initializes the object's properties.

> 📚 **Glossary: this**
> Inside a class, `this` refers to the current instance - the specific object being created or used. It's how methods access the object's own data.

---

## Creating Instances with `new`

The `new` keyword creates an object from a class:

```js
const sencha = new Tea("Sencha", 0.12, "Japan");
```

Here's what `new` does:
1. Creates a fresh, empty object
2. Calls the constructor, with `this` set to the new object
3. Returns the object

The class is a **blueprint**. The instance is a **building**. One blueprint can produce many buildings, each with different details but the same structure.

```js
// One class (blueprint)
class Tea { /* ... */ }

// Many instances (buildings)
const tea1 = new Tea("Sencha", 0.12, "Japan");
const tea2 = new Tea("Earl Grey", 0.08, "India");
const tea3 = new Tea("Matcha", 0.45, "Japan");
```

> 📚 **Glossary: instance**
> A specific object created from a class using `new`. `sencha` and `earlGrey` are both instances of the `Tea` class.

---

## Methods: Behavior Lives with Data

The real power of classes: you can attach functions directly to your data. These are called **methods**:

```js
class Tea {
  constructor(name, pricePerGram, origin) {
    this.name = name;
    this.pricePerGram = pricePerGram;
    this.origin = origin;
  }

  priceFor(grams) {
    return this.pricePerGram * grams;
  }

  describe() {
    return `${this.name} from ${this.origin}`;
  }
}

const sencha = new Tea("Sencha", 0.12, "Japan");
console.log(sencha.priceFor(100));  // 12
console.log(sencha.describe());     // "Sencha from Japan"
```

Notice: the price formula lives *with* the Tea data. You don't pass the tea to an external function - the tea knows how to calculate its own price. That's **encapsulation**: bundling data and the operations that work on it together.

Now compare:

```js
// Without classes: data and behavior are separate
const tea = { name: "Sencha", pricePerGram: 0.12 };
function priceFor(tea, grams) { return tea.pricePerGram * grams; }
priceFor(tea, 100);

// With classes: data and behavior live together
const sencha = new Tea("Sencha", 0.12, "Japan");
sencha.priceFor(100);
```

When you add validation, formatting, and calculations to a class, everything stays organized in one place.

> 📚 **Glossary: encapsulation**
> Bundling data and the operations that work on that data together in one unit (a class). Instead of separate functions operating on plain objects, the object itself knows how to perform its operations.

---

## Static Methods

Sometimes you need a method that belongs to the **class itself**, not to any particular instance. These are **static methods**:

```js
class Tea {
  constructor(name, pricePerGram, origin) {
    this.name = name;
    this.pricePerGram = pricePerGram;
    this.origin = origin;
  }

  // Instance method - called on a specific tea
  priceFor(grams) {
    return this.pricePerGram * grams;
  }

  // Static method - called on the class itself
  static fromObject(obj) {
    return new Tea(obj.name, obj.pricePerGram, obj.origin);
  }

  static findCheapest(teas) {
    return teas.reduce((cheapest, tea) =>
      tea.pricePerGram < cheapest.pricePerGram ? tea : cheapest
    );
  }
}
```

You call static methods on the class, not on instances:

```js
// Static methods: called on Tea (the class)
const sencha = Tea.fromObject({ name: "Sencha", pricePerGram: 0.12, origin: "Japan" });
const cheapest = Tea.findCheapest(teas);

// Instance methods: called on sencha (an instance)
sencha.priceFor(100);
sencha.describe();
```

The `fromObject` pattern is especially useful on backends: data arrives from APIs or databases as plain objects, and `fromObject` converts them into class instances with methods and validation. This is called a **factory method**.

---

## Inheritance: `extends` and `super()`

Sometimes you want a specialized version of an existing class. **Inheritance** lets one class build on another:

```js
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

class PremiumTea extends Tea {
  constructor(name, pricePerGram, origin, grade) {
    super(name, pricePerGram, origin);  // Call parent constructor
    this.grade = grade;
  }

  priceFor(grams) {
    const base = super.priceFor(grams);  // Call parent method
    return base * 1.2;  // 20% premium markup
  }
}
```

- `extends` says "PremiumTea is a specialized Tea"
- `super()` calls the parent's constructor or method
- PremiumTea **inherits** all of Tea's methods, and can **override** specific ones

```js
const gyokuro = new PremiumTea("Gyokuro", 0.56, "Japan", "A");
console.log(gyokuro.priceFor(100)); // 67.2 (56 * 1.2)
console.log(gyokuro.grade);         // "A"
```

Inheritance is useful when you have an "is-a" relationship: a PremiumTea *is a* Tea with extra features. But don't overuse it - most of the time, composition (classes using other classes) is more flexible.

---

## Classes vs Objects

This distinction is fundamental:

| | Class | Instance |
|--|-------|----------|
| What | Blueprint / template | Specific object |
| How many | One per type | Many per class |
| Created with | `class` keyword | `new` keyword |
| Example | `Tea` | `sencha`, `earlGrey` |
| Analogy | Cookie cutter | Cookies |

```js
// Tea is a class - it describes what teas look like
class Tea {
  constructor(name, pricePerGram, origin) { /* ... */ }
  priceFor(grams) { /* ... */ }
}

// sencha is an instance - it IS a specific tea
const sencha = new Tea("Sencha", 0.12, "Japan");

// You can check:
console.log(sencha instanceof Tea);  // true
```

> 📚 **Glossary: class**
> A blueprint for creating objects with shared structure and behavior. Defines what properties and methods instances will have, but isn't itself an object you work with directly.

---

## Summary

| Term | Meaning |
|------|---------|
| class | Blueprint for creating objects with shared structure |
| constructor | Method that initializes a new instance |
| instance | A specific object created from a class |
| this | Refers to the current instance inside a class |
| encapsulation | Bundling data and operations together |
| static method | Method on the class itself, not on instances |
| extends | Create a specialized version of another class |
| super() | Call the parent class's constructor or method |

---

## Pre-Reading (Optional)

If you want to go deeper, read these MDN pages:

- [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)
- [static](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)
- [extends](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)
