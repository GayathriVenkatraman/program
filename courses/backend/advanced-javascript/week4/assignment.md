# Week 4 Assignment

Complete these exercises after the session. All exercises use the tea data.

```js
import { teas } from "../data/teas.js";
```

---

## Exercise 1: Tea Class with Validation

Build a complete `Tea` class with validation and a static factory method.

```js
class Tea {
  constructor(name, type, origin, pricePerGram, organic) {
    // Validate:
    // - name must be a non-empty string
    // - type must be one of: "green", "black", "herbal", "oolong", "white"
    // - pricePerGram must be a positive number
    // Store all properties
  }

  priceFor(grams) {
    // Return price for given weight
  }

  describe() {
    // Return "Sencha (green) from Japan - 12.00 DKK/100g [organic]"
    // Only include "[organic]" if the tea is organic
  }

  static fromObject(obj) {
    // Create a Tea from a plain object (like from the data file)
  }
}

// Test validation:
try { new Tea("", "green", "Japan", 0.12, true); }
catch (e) { console.log(e.message); } // "Name is required"

try { new Tea("Test", "purple", "Japan", 0.12, true); }
catch (e) { console.log(e.message); } // "Invalid type: purple"

// Test factory method:
const teaInstances = teas.map(Tea.fromObject);
console.log(teaInstances.length); // 20
console.log(teaInstances[0].describe());
// "Sencha (green) from Japan - 12.00 DKK/100g [organic]"
console.log(teaInstances[1].describe());
// "Earl Grey (black) from India - 8.00 DKK/100g"
```

---

## Exercise 2: Order System

Build `OrderItem` and `Order` classes that work together.

```js
class OrderItem {
  constructor(tea, grams) {
    // tea is a Tea instance, grams is a positive number
    // Validate: grams must be positive
  }

  lineTotal() {
    // Use tea.priceFor()
  }

  describe() {
    // "200g Sencha - 24.00 DKK"
  }
}

class Order {
  constructor() {
    // items array, status starts as "pending"
  }

  addItem(orderItem) {
    // Add item (only when pending)
  }

  getTotal() {
    // Sum all line totals using .reduce()
  }

  getSummary() {
    // Return formatted multi-line string:
    // "Order (pending) - 2 items"
    // "  200g Sencha - 24.00 DKK"
    // "  50g Matcha - 22.50 DKK"
    // "Total: 46.50 DKK"
  }
}

// Test:
const teaInstances = teas.map(Tea.fromObject);
const order = new Order();
order.addItem(new OrderItem(teaInstances[0], 200)); // Sencha
order.addItem(new OrderItem(teaInstances[7], 50));   // Matcha

console.log(order.getSummary());
console.log("Total:", order.getTotal().toFixed(2), "DKK");
```

---

## Exercise 3: Inventory Manager ⭐

Build an `Inventory` class that tracks stock for multiple teas.

```js
class Inventory {
  constructor() {
    // Store a Map or object of tea ID → { tea, stockCount }
  }

  add(tea, stockCount) {
    // Add a tea to inventory
  }

  sell(teaName, grams) {
    // Reduce stock. Throw if not enough stock.
  }

  restock(teaName, grams) {
    // Increase stock
  }

  getStock(teaName) {
    // Return current stock count for a tea
  }

  getLowStock(threshold) {
    // Return array of { tea, stockCount } where stock < threshold
    // Use .filter()
  }

  getTotalValue() {
    // Sum of (pricePerGram * stockCount) for all items
    // Use .reduce()
  }
}

// Test:
const teaInstances = teas.map(Tea.fromObject);
const inventory = new Inventory();

teaInstances.forEach(tea => {
  const data = teas.find(t => t.name === tea.name);
  inventory.add(tea, data.stockCount);
});

console.log("Sencha stock:", inventory.getStock("Sencha")); // 150

inventory.sell("Sencha", 50);
console.log("After selling 50g:", inventory.getStock("Sencha")); // 100

console.log("Low stock (< 50):");
inventory.getLowStock(50).forEach(item => {
  console.log(`- ${item.tea.name}: ${item.stockCount}g`);
});

console.log("Total inventory value:", inventory.getTotalValue().toFixed(2), "DKK");
```

---

## Exercise 4: Customer with History ⭐

Build a `Customer` class that tracks order history and spending.

```js
class Customer {
  constructor(name, email) {
    // Store name, email, and empty orders array
  }

  placeOrder(order) {
    // Confirm the order and add to this.orders
    // Return the order
  }

  totalSpent() {
    // Sum all order totals using .reduce()
  }

  getOrderHistory() {
    // Return formatted string of all orders
    // "Alex (alex@example.com) - 2 orders"
    // ""
    // "Order 1 (confirmed) - 1 item"
    // "  100g Sencha - 12.00 DKK"
    // "Total: 12.00 DKK"
    // ""
    // "Order 2 (confirmed) - 1 item"
    // "  50g Matcha - 22.50 DKK"
    // "Total: 22.50 DKK"
    // ""
    // "Lifetime total: 34.50 DKK"
  }
}

// Test:
const teaInstances = teas.map(Tea.fromObject);
const customer = new Customer("Alex", "alex@example.com");

const order1 = new Order();
order1.addItem(new OrderItem(teaInstances[0], 100)); // Sencha
customer.placeOrder(order1);

const order2 = new Order();
order2.addItem(new OrderItem(teaInstances[7], 50)); // Matcha
customer.placeOrder(order2);

console.log(customer.getOrderHistory());
console.log("Total spent:", customer.totalSpent().toFixed(2), "DKK");
```

---

## Exercise 5: Full Tea Shop System ⭐⭐

Build a `TeaShop` class that orchestrates all the other classes together.

```js
class TeaShop {
  constructor(teaData) {
    // Create a TeaCatalog from the data
    // Create an Inventory from the data
    // Store customers as an empty array
  }

  registerCustomer(name, email) {
    // Create and return a new Customer
  }

  createOrder(customer, items) {
    // items is array of { teaName, grams }
    // 1. Find each tea in the catalog
    // 2. Check stock in inventory
    // 3. Create OrderItems and an Order
    // 4. Sell from inventory
    // 5. Place order on the customer
    // 6. Return the order
  }

  getReport() {
    // Return a shop report:
    // - Total customers
    // - Total orders
    // - Total revenue
    // - Low stock items
  }
}

// Test:
const shop = new TeaShop(teas);

const alex = shop.registerCustomer("Alex", "alex@example.com");
const maria = shop.registerCustomer("Maria", "maria@example.com");

const order1 = shop.createOrder(alex, [
  { teaName: "Sencha", grams: 100 },
  { teaName: "Matcha", grams: 50 }
]);
console.log(order1.getSummary());

const order2 = shop.createOrder(maria, [
  { teaName: "Earl Grey", grams: 200 }
]);
console.log(order2.getSummary());

console.log(shop.getReport());
```

---

## Exercise 6: Inheritance ⭐⭐

Build specialized classes using inheritance. This exercise is optional.

```js
// 1. PremiumTea extends Tea
class PremiumTea extends Tea {
  constructor(name, type, origin, pricePerGram, organic, grade) {
    // Call super(), store grade
    // Validate grade is "A", "B", or "C"
  }

  priceFor(grams) {
    // Override: A = 50% markup, B = 25%, C = 10%
  }

  describe() {
    // Override: include [Grade A] in description
  }

  static fromTea(tea, grade) {
    // Create a PremiumTea from an existing Tea instance
  }
}

// 2. ExpressOrder extends Order
class ExpressOrder extends Order {
  constructor(expressFee) {
    // Call super(), store express fee (default 25 DKK)
  }

  getTotal() {
    // Override: add express fee to parent's total
  }

  getSummary() {
    // Override: include express fee line in summary
  }
}

// Test PremiumTea:
const gyokuro = new PremiumTea("Gyokuro", "green", "Japan", 0.56, false, "A");
console.log(gyokuro.describe());
// "Gyokuro [Grade A] (green) from Japan - 84.00 DKK/100g"
console.log(gyokuro.priceFor(100)); // 84

const upgraded = PremiumTea.fromTea(teas.map(Tea.fromObject)[0], "B");
console.log(upgraded.describe());

// Test ExpressOrder:
const express = new ExpressOrder(25);
express.addItem(new OrderItem(gyokuro, 100));
console.log(express.getSummary());
// Should show items + express fee + total
console.log(express.getTotal()); // 84 + 25 = 109
```

---

## Submission

Create a folder `week4-assignment/` with:
- `exercise1.js` - Tea class with validation
- `exercise2.js` - Order system
- `exercise3.js` - Inventory manager
- `exercise4.js` - Customer with history
- `exercise5.js` - Full tea shop system
- `exercise6.js` - Inheritance (optional)

Each file should be runnable with `node exerciseN.js`.

```js
// Example structure for exercise1.js
import { teas } from "../data/teas.js";

class Tea {
  // ...
}

// Test your class
const teaInstances = teas.map(Tea.fromObject);
teaInstances.forEach(t => console.log(t.describe()));
```
