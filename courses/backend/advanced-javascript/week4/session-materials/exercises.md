# Week 4 Exercises: Classes & Object-Oriented Programming

All exercises use the tea shop data. Start by loading it:

```js
import { teas } from "../../data/teas.js";
```

---

## Part 1: Creating Classes

A class is a blueprint for creating objects. The constructor initializes each instance.

<details>
<summary>📚 Recall: constructor and this</summary>

The `constructor` method runs when you create an instance with `new`. Inside it, `this` refers to the new object being created. `this.name = name` stores the parameter on the instance.

</details>

### Exercise 1

Create a `Tea` class with a constructor that accepts `name`, `type`, and `origin`. Create two instances and log them.

```js
class Tea {
  // your constructor
}

const sencha = new Tea("Sencha", "green", "Japan");
const earlGrey = new Tea("Earl Grey", "black", "India");

console.log(sencha.name); // "Sencha"
console.log(sencha.type); // "green"
console.log(earlGrey.origin); // "India"
```

### Exercise 2

Extend your `Tea` class to also accept `pricePerGram` and `organic` (boolean). Create an instance from the first tea in the data array.

```js
const firstTea = teas[0];
const tea = new Tea(
  firstTea.name,
  firstTea.type,
  firstTea.origin,
  firstTea.pricePerGram,
  firstTea.organic,
);
console.log(tea);
```

### Exercise 3

Create the Tea instances using `.map()` and your class:

```js
const teaInstances = teas.map(
  (t) => new Tea(t.name, t.type, t.origin, t.pricePerGram, t.organic),
);
console.log(teaInstances.length); // 20
console.log(teaInstances[0].name); // "Sencha"
```

### Exercise 4 ⭐

Add validation to your constructor. Throw an error if:

- `name` is empty or missing
- `pricePerGram` is negative
- `type` is not one of: "green", "black", "herbal", "oolong", "white"

```js
// Should work:
const valid = new Tea("Sencha", "green", "Japan", 0.12, true);

// Should throw:
const noName = new Tea("", "green", "Japan", 0.12, true);
// Error: "Name is required"

const badPrice = new Tea("Sencha", "green", "Japan", -1, true);
// Error: "Price must be positive"

const badType = new Tea("Sencha", "purple", "Japan", 0.12, true);
// Error: "Invalid type: purple"
```

---

## Part 2: Methods

Methods are functions that belong to a class. They use `this` to access the instance's data.

<details>
<summary>📚 Recall: encapsulation</summary>

Encapsulation means bundling data and the operations that work on it together. Instead of separate functions that take a tea object as a parameter, the tea _itself_ has methods.

</details>

### Exercise 5

Add a `priceFor(grams)` method to your Tea class that returns the price for a given weight.

```js
const sencha = new Tea("Sencha", "green", "Japan", 0.12, true);
console.log(sencha.priceFor(100)); // 12
console.log(sencha.priceFor(50)); // 6
```

### Exercise 6

Add a `describe()` method that returns a formatted string:

```js
const sencha = new Tea("Sencha", "green", "Japan", 0.12, true);
console.log(sencha.describe());
// "Sencha (green) from Japan - 12.00 DKK/100g"

const earlGrey = new Tea("Earl Grey", "black", "India", 0.08, false);
console.log(earlGrey.describe());
// "Earl Grey (black) from India - 8.00 DKK/100g"
```

Hint: Use `(this.pricePerGram * 100).toFixed(2)` for the price.

### Exercise 7

Create an `OrderItem` class that takes a Tea instance and a number of grams. Add a `lineTotal()` method.

```js
class OrderItem {
  constructor(tea, grams) {
    // store the tea instance and grams
  }

  lineTotal() {
    // use the tea's priceFor method
  }
}

const sencha = new Tea("Sencha", "green", "Japan", 0.12, true);
const item = new OrderItem(sencha, 200);

console.log(item.tea.name); // "Sencha"
console.log(item.grams); // 200
console.log(item.lineTotal()); // 24
```

> 💡 Notice: OrderItem _uses_ a Tea instance - it doesn't extend it. This is composition: one class containing another.

### Exercise 8 ⭐

Add a `describe()` method to `OrderItem` that returns a formatted line:

```js
const item = new OrderItem(sencha, 200);
console.log(item.describe());
// "200g Sencha - 24.00 DKK"
```

Then create several order items from the tea data and use `.map()` to log all descriptions:

```js
const items = [
  new OrderItem(teaInstances[0], 100),
  new OrderItem(teaInstances[1], 200),
  new OrderItem(teaInstances[7], 50),
];

items.map((item) => item.describe()).forEach((line) => console.log(line));
// "100g Sencha - 12.00 DKK"
// "200g Earl Grey - 16.00 DKK"
// "50g Matcha - 22.50 DKK"
```

---

## Part 3: this and State

Methods can modify instance state, not just read it. `this` is how you access and change an object's data.

<details>
<summary>📚 Recall: this</summary>

Inside a class, `this` refers to the current instance. `this.name` reads the instance's name. `this.stockCount -= 10` modifies it. Each instance has its own state.

</details>

### Exercise 9

Create an `Inventory` class that tracks stock for a tea. It should have `sell(grams)` and `restock(grams)` methods.

```js
class Inventory {
  constructor(tea, stockCount) {
    this.tea = tea;
    this.stockCount = stockCount;
  }

  sell(grams) {
    // Subtract grams from stockCount
    // Throw an error if not enough stock
  }

  restock(grams) {
    // Add grams to stockCount
  }
}

const sencha = new Tea("Sencha", "green", "Japan", 0.12, true);
const stock = new Inventory(sencha, 150);

console.log(stock.stockCount); // 150
stock.sell(50);
console.log(stock.stockCount); // 100
stock.restock(200);
console.log(stock.stockCount); // 300

stock.sell(500); // Error: "Not enough stock for Sencha (have 300, need 500)"
```

### Exercise 10 ⭐

Create an `Order` class with status transitions. An order starts as "pending" and can move through: pending → confirmed → shipped → delivered.

```js
class Order {
  constructor() {
    this.items = [];
    this.status = "pending";
  }

  addItem(orderItem) {
    // Only allow adding items when status is "pending"
    // Throw error otherwise
  }

  confirm() {
    // Change status to "confirmed" (only from "pending")
  }

  ship() {
    // Change status to "shipped" (only from "confirmed")
  }

  deliver() {
    // Change status to "delivered" (only from "shipped")
  }
}

const order = new Order();
const sencha = new Tea("Sencha", "green", "Japan", 0.12, true);
order.addItem(new OrderItem(sencha, 100));
console.log(order.status); // "pending"

order.confirm();
console.log(order.status); // "confirmed"

order.addItem(new OrderItem(sencha, 50));
// Error: "Cannot add items to a confirmed order"

order.ship();
order.deliver();
console.log(order.status); // "delivered"
```

### Exercise 11 ⭐

Add a `getTotal()` method to your Order class that uses `.reduce()` to sum all item totals:

```js
const order = new Order();
order.addItem(
  new OrderItem(new Tea("Sencha", "green", "Japan", 0.12, true), 100),
);
order.addItem(
  new OrderItem(new Tea("Matcha", "green", "Japan", 0.45, true), 50),
);

console.log(order.getTotal()); // 34.5  (12 + 22.5)
```

Also add a `getSummary()` method that returns a formatted order summary:

```js
console.log(order.getSummary());
// Order (pending) - 2 items
// - 100g Sencha - 12.00 DKK
// - 50g Matcha - 22.50 DKK
// Total: 34.50 DKK
```

---

## Part 4: Classes Working Together

Real applications have multiple classes that work together. Each class handles its own responsibility.

<details>
<summary>📚 Recall: composition</summary>

Composition means one class uses instances of another class. An Order contains OrderItems. A Catalog contains Teas. Each class handles its own job and delegates to others.

</details>

### Exercise 12

Create a `TeaCatalog` class that holds Tea instances and provides search/filter methods:

```js
class TeaCatalog {
  constructor(teas) {
    // Store the array of Tea instances
  }

  search(query) {
    // Return teas where name includes query (case-insensitive)
  }

  filterByType(type) {
    // Return teas matching the type
  }
}

const catalog = new TeaCatalog(
  teas.map((t) => new Tea(t.name, t.type, t.origin, t.pricePerGram, t.organic)),
);

console.log(catalog.search("earl"));
// [Tea { name: "Earl Grey", ... }]

console.log(catalog.filterByType("green").map((t) => t.name));
// ["Sencha", "Dragon Well", "Matcha", "Genmaicha", "Jasmine Pearl", ...]
```

### Exercise 13

Create a `Customer` class that can place orders:

```js
class Customer {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.orders = [];
  }

  placeOrder(order) {
    // Add the order to this.orders
    // Confirm the order
    // Return the order
  }

  totalSpent() {
    // Use .reduce() to sum getTotal() across all orders
  }
}

const customer = new Customer("Alex", "alex@example.com");

const order1 = new Order();
order1.addItem(
  new OrderItem(new Tea("Sencha", "green", "Japan", 0.12, true), 100),
);
customer.placeOrder(order1);

const order2 = new Order();
order2.addItem(
  new OrderItem(new Tea("Matcha", "green", "Japan", 0.45, true), 50),
);
customer.placeOrder(order2);

console.log(customer.orders.length); // 2
console.log(customer.totalSpent()); // 34.5
```

### Exercise 14 ⭐

Bring it together: create a catalog, find teas, create an order, and assign it to a customer.

```js
// 1. Create a TeaCatalog from the tea data
const catalog = new TeaCatalog(
  teas.map((t) => new Tea(t.name, t.type, t.origin, t.pricePerGram, t.organic)),
);

// 2. Find all Japanese teas
const japaneseTeas = catalog.search("").filter((t) => t.origin === "Japan");

// 3. Create an order with 100g of each Japanese tea
const order = new Order();
japaneseTeas.forEach((tea) => {
  order.addItem(new OrderItem(tea, 100));
});

// 4. Create a customer and place the order
const customer = new Customer("Tea Lover", "lover@tea.com");
customer.placeOrder(order);

// 5. Log the summary
console.log(`${customer.name} ordered ${order.items.length} Japanese teas`);
console.log(`Total: ${customer.totalSpent().toFixed(2)} DKK`);
```

---

## Part 5: Static Methods

Static methods belong to the class itself, not to instances. Use them for factory methods and utility operations.

<details>
<summary>📚 Recall: static methods</summary>

A static method is called on the class: `Tea.fromObject(data)`. An instance method is called on an object: `sencha.priceFor(100)`. Static methods don't have access to `this` as an instance.

</details>

### Exercise 15

Add a static `fromObject(obj)` factory method to your Tea class that creates a Tea from a plain object:

```js
class Tea {
  // ... existing code ...

  static fromObject(obj) {
    // Create and return a new Tea from a plain object
  }
}

// Convert all plain objects to Tea instances in one line:
const teaInstances = teas.map(Tea.fromObject);

console.log(teaInstances[0].describe());
// "Sencha (green) from Japan - 12.00 DKK/100g"
console.log(teaInstances[0].priceFor(100));
// 12
```

> 💡 This pattern is common on backends: data comes from a database or API as plain objects, and a factory method converts them to class instances.

### Exercise 16 ⭐

Add these static utility methods to your Tea class:

```js
class Tea {
  // ... existing code ...

  static findCheapest(teas) {
    // Return the tea with the lowest pricePerGram
  }

  static findMostExpensive(teas) {
    // Return the tea with the highest pricePerGram
  }

  static averagePrice(teas) {
    // Return the average pricePerGram across all teas
  }
}

const teaInstances = teas.map(Tea.fromObject);

console.log(Tea.findCheapest(teaInstances).name);
// "English Breakfast"

console.log(Tea.findMostExpensive(teaInstances).name);
// "Gyokuro"

console.log(Tea.averagePrice(teaInstances).toFixed(2));
// "0.22"
```

Hint: `findCheapest` and `findMostExpensive` can use `.reduce()`.

---

## Part 6: Inheritance ⭐⭐

Inheritance lets one class build on another. The child class gets all parent methods and can add or override them.

<details>
<summary>📚 Recall: extends and super()</summary>

`extends` creates a child class from a parent. `super()` in the constructor calls the parent's constructor. `super.method()` calls the parent's version of an overridden method.

</details>

### Exercise 17 ⭐⭐

Create a `PremiumTea` class that extends `Tea`:

```js
class PremiumTea extends Tea {
  constructor(name, type, origin, pricePerGram, organic, grade) {
    // Call parent constructor with super()
    // Store grade ("A", "B", or "C")
  }

  priceFor(grams) {
    // A = 50% markup, B = 25% markup, C = 10% markup
    // Use super.priceFor(grams) to get the base price
  }

  describe() {
    // Override to include grade
    // "Gyokuro [Grade A] (green) from Japan - 84.00 DKK/100g"
  }
}

const gyokuro = new PremiumTea("Gyokuro", "green", "Japan", 0.56, false, "A");
console.log(gyokuro.describe());
// "Gyokuro [Grade A] (green) from Japan - 84.00 DKK/100g"

console.log(gyokuro.priceFor(100));
// 84  (56 * 1.5)

// It's still a Tea:
console.log(gyokuro instanceof Tea); // true
console.log(gyokuro instanceof PremiumTea); // true
```

Test with different grades:

```js
const gradeB = new PremiumTea(
  "Silver Needle",
  "white",
  "China",
  0.5,
  true,
  "B",
);
console.log(gradeB.priceFor(100)); // 62.5  (50 * 1.25)

const gradeC = new PremiumTea("Darjeeling", "black", "India", 0.18, false, "C");
console.log(gradeC.priceFor(100)); // 19.8  (18 * 1.1)
```

**Bonus:** Add a static `fromTea(tea, grade)` method to PremiumTea that upgrades an existing Tea to a PremiumTea.
