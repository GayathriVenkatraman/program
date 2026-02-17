# Week 3 Assignment

Build a Tea Shop CLI tool that interacts with the Tea Shop API.

```js
const API_BASE = "https://tea-api-787553294298.europe-west1.run.app/api";
```

---

## Exercise 1: Tea Search

Create a function that searches for teas by name:

```js
async function searchTeas(query) {
  // 1. Fetch all teas from the API
  // 2. Filter to teas where name includes query (case-insensitive)
  // 3. Return array of matching tea objects
}

// Test it:
searchTeas("pearl").then(teas => {
  console.log("Search results for 'pearl':");
  teas.forEach(tea => console.log(`- ${tea.name}`));
});
```

Expected output:
```plaintext
Search results for 'pearl':
- Jasmine Pearl
- Royal Kenya Pearl
- Imperial China Pearl
- Mountain Sri Lanka Pearl
```

---

## Exercise 2: Tea Details

Create a function that gets full details for a tea, including its current stock:

```js
async function getTeaDetails(id) {
  // Fetch tea and inventory in PARALLEL using Promise.all
  // Return combined object: { ...tea, stock: number }
}

// Test it:
getTeaDetails(1).then(tea => {
  console.log(`${tea.name} (${tea.origin})`);
  console.log(`Price: ${tea.pricePerGram} DKK/gram`);
  console.log(`Stock: ${tea.stock} grams`);
  console.log(`Value: ${(tea.pricePerGram * tea.stock).toFixed(2)} DKK`);
});
```

---

## Exercise 3: Order Calculator ⭐

Create a function that calculates the total for an order:

```js
async function calculateOrderTotal(items) {
  // items is an array of { teaId, grams }
  // 1. Fetch all teas from API
  // 2. For each item, find the tea and calculate price
  // 3. Return total price

  // Bonus: throw an error if a teaId doesn't exist
}

const order = [
  { teaId: 1, grams: 100 },
  { teaId: 3, grams: 50 },
  { teaId: 8, grams: 200 }
];

calculateOrderTotal(order)
  .then(total => console.log(`Order total: ${total.toFixed(2)} DKK`))
  .catch(err => console.error("Error:", err.message));
```

---

## Exercise 4: Stock Check ⭐

Create a function that checks if all items in an order are in stock:

```js
async function checkOrderStock(items) {
  // items is an array of { teaId, grams }
  // 1. Fetch inventory from API
  // 2. Check if each item has enough stock
  // 3. Return { inStock: boolean, shortages: [...] }
}

const largeOrder = [
  { teaId: 1, grams: 100 },
  { teaId: 2, grams: 500 },  // might be out of stock
  { teaId: 3, grams: 9999 }  // definitely out of stock
];

checkOrderStock(largeOrder).then(result => {
  if (result.inStock) {
    console.log("All items in stock!");
  } else {
    console.log("Shortages:");
    result.shortages.forEach(s => {
      console.log(`- ${s.name}: need ${s.needed}, have ${s.available}`);
    });
  }
});
```

---

## Exercise 5: Full Order Flow ⭐⭐

Combine everything into a complete order processing flow:

```js
async function processOrder(items) {
  console.log("Processing order...\n");

  // Step 1: Validate items exist
  console.log("1. Validating items...");
  // Fetch all teas, check all teaIds exist
  // If any don't exist, throw error

  // Step 2: Check stock
  console.log("2. Checking stock...");
  const stockResult = await checkOrderStock(items);
  if (!stockResult.inStock) {
    throw new Error("Items out of stock");
  }

  // Step 3: Calculate total
  console.log("3. Calculating total...");
  const total = await calculateOrderTotal(items);

  // Step 4: Create order summary
  console.log("4. Creating summary...\n");

  return {
    items: items.length,
    total,
    status: "ready"
  };
}

const myOrder = [
  { teaId: 1, grams: 50 },
  { teaId: 5, grams: 100 }
];

processOrder(myOrder)
  .then(result => {
    console.log("Order ready!");
    console.log(`Items: ${result.items}`);
    console.log(`Total: ${result.total.toFixed(2)} DKK`);
  })
  .catch(err => {
    console.error("Order failed:", err.message);
  });
```

---

## Exercise 6: Authenticated Orders ⭐⭐

Create functions to work with the authenticated orders endpoint.

First, sign up for an account, then use login to get a token:

> ⚠️ Use a **dummy email and password** — not your real ones! This is a practice API with no security guarantees.

```js
// Helper: sign up (only needed once)
async function signup(email, password) {
  const response = await fetch(`${API_BASE}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  if (!response.ok) throw new Error("Signup failed");
  return response.json();
}

// Helper: login and get token
async function getAuthToken() {
  const response = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "yourname@example.com",
      password: "mypassword"
    })
  });

  if (!response.ok) throw new Error("Login failed");
  const data = await response.json();
  return data.token;
}

// Create a new order (POST /orders)
async function createOrder(items) {
  const token = await getAuthToken();

  // POST to /orders with:
  // - Authorization header with token
  // - Body with items array

  // Return the created order
}

// Get all orders (GET /orders)
async function getMyOrders() {
  const token = await getAuthToken();

  // GET /orders with Authorization header
  // Return array of orders
}

// Test (sign up first, then create and list orders):
signup("yourname@example.com", "mypassword")
  .catch(() => {}) // ignore if already signed up
  .then(() => createOrder([{ teaId: 1, grams: 100 }]))
  .then(order => console.log("Created order:", order.id))
  .then(() => getMyOrders())
  .then(orders => console.log("All orders:", orders.length));
```

---

## Submission

Create a folder `week3-assignment/` with:
- `exercise1.js` - Tea search
- `exercise2.js` - Tea details
- `exercise3.js` - Order calculator
- `exercise4.js` - Stock check
- `exercise5.js` - Full order flow
- `exercise6.js` - Authenticated orders (optional)

Each file should be runnable with `node exerciseN.js`.

```js
// Example structure for exercise1.js
const API_BASE = "https://tea-api-787553294298.europe-west1.run.app/api";

async function searchTeas(query) {
  // ...
}

// Run the function
searchTeas("pearl").then(results => {
  console.log("Found:", results.length, "teas");
  results.forEach(tea => console.log(`- ${tea.name}`));
});
```
