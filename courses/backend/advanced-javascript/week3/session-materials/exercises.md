# Week 3 Exercises: Promises & async/await

All exercises use the Tea Shop API:

```js
const API_BASE = "https://tea-api-787553294298.europe-west1.run.app/api";
```

---

## Part 1: Consuming Promises

`fetch()` returns a Promise. Let's learn to use it.

<details>
<summary>📚 Recall: Promise</summary>

A Promise represents a future value. It's either pending (waiting), fulfilled (success), or rejected (error). Use `.then()` for success, `.catch()` for errors.
</details>

### Exercise 1

Fetch all teas from the API and log how many there are.

```js
fetch(`${API_BASE}/teas`)
  .then(response => {
    // response.json() also returns a Promise!
  })
  .then(teas => {
    // log the count
  });
```

Expected output: `Found 50 teas`

> 💡 Notice: `response.json()` itself returns a Promise - that's why you need a second `.then()` to get the actual data.

### Exercise 2

Fetch a single tea by ID and log its name and origin.

```js
fetch(`${API_BASE}/teas/3`)
  // your code
```

Expected output: `Dragon Well from China`

### Exercise 3

Try fetching a tea that doesn't exist (ID 999). Handle the error with `.catch()`.

```js
fetch(`${API_BASE}/teas/999`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then(tea => {
    console.log(tea.name);
  })
  .catch(error => {
    // handle the error
  });
```

Expected output: `Error: HTTP error: 404` (or similar)

### Exercise 4

Fetch the inventory endpoint and log which teas are low on stock (less than 50).

```js
fetch(`${API_BASE}/inventory`)
  // your code
```

Expected output (will vary):
```plaintext
Low stock:
- Sencha: 0
- Chamomile: 0
- Darjeeling: 33
- ...
```

---

## Part 2: Chaining Promises

Chain `.then()` calls to perform sequential operations.

<details>
<summary>📚 Recall: Chaining</summary>

`.then()` returns a new Promise. The return value of your callback becomes the input to the next `.then()`. This lets you chain operations without nesting.
</details>

### Exercise 5

Fetch a tea, then fetch its inventory status. Log both pieces of information.

```js
fetch(`${API_BASE}/teas/1`)
  .then(response => response.json())
  .then(tea => {
    console.log("Tea:", tea.name);
    // Return a new fetch to chain it
    return fetch(`${API_BASE}/inventory`);
  })
  .then(response => response.json())
  .then(inventory => {
    // Find this tea's stock in the inventory
    // Log the stock count
  })
  .catch(error => console.error("Error:", error.message));
```

### Exercise 6 ⭐

Fetch all teas, filter to only Japanese teas, then for each one log its name and price. All using `.then()` chains.

```js
fetch(`${API_BASE}/teas`)
  .then(response => response.json())
  .then(teas => {
    // Filter to Japanese teas
    // Log each one's name and price
  })
  .catch(error => console.error(error));
```

---

## Part 3: Creating Promises

Build your own Promises with `new Promise()`.

<details>
<summary>📚 Recall: resolve / reject</summary>

When creating a Promise, call `resolve(value)` for success or `reject(error)` for failure. The value/error is passed to `.then()` or `.catch()`.
</details>

### Exercise 7

Create a `wait(ms)` function that returns a Promise which resolves after `ms` milliseconds.

```js
function wait(ms) {
  return new Promise((resolve) => {
    // use setTimeout
  });
}

// Test it:
console.log("Starting...");
wait(2000).then(() => console.log("2 seconds passed!"));
```

> 💡 Wrapping `setTimeout` in a Promise is a common pattern. You're converting callback-based code to Promise-based code - this is called "promisifying."

### Exercise 8 ⭐

Create a `fetchTeaWithTimeout(id, timeoutMs)` function. It should:
- Fetch the tea from the API
- Reject if it takes longer than `timeoutMs`

Hints:
- Use `setTimeout` to create a timeout that calls `reject`
- Use `clearTimeout` to cancel the timeout if fetch succeeds
- Remember to handle fetch errors too

```js
function fetchTeaWithTimeout(id, timeoutMs) {
  return new Promise((resolve, reject) => {
    // Your code here
  });
}

// Test with a generous timeout (should work)
fetchTeaWithTimeout(1, 5000)
  .then(tea => console.log("Got:", tea.name))
  .catch(err => console.log("Failed:", err.message));

// Test with a tiny timeout (should fail)
fetchTeaWithTimeout(1, 1)
  .then(tea => console.log("Got:", tea.name))
  .catch(err => console.log("Failed:", err.message));
```

### Exercise 9 ⭐

Convert this callback-based function to return a Promise:

```js
import fs from "fs";

// Callback version
function readJsonFile(path, callback) {
  fs.readFile(path, "utf8", (error, data) => {
    if (error) {
      callback(error, null);
      return;
    }
    try {
      const parsed = JSON.parse(data);
      callback(null, parsed);
    } catch (parseError) {
      callback(parseError, null);
    }
  });
}

// Convert to Promise version
function readJsonFilePromise(path) {
  return new Promise((resolve, reject) => {
    // your code
  });
}

// Test it:
readJsonFilePromise("./test.json")
  .then(data => console.log(data))
  .catch(error => console.error(error.message));
```

---

## Part 4: async/await

Rewrite Promise chains with cleaner async/await syntax.

<details>
<summary>📚 Recall: async/await</summary>

`async` before a function makes it return a Promise. `await` pauses execution until a Promise resolves. Together they make async code read like sync code.
</details>

### Exercise 10

Rewrite Exercise 1 using async/await:

```js
async function countTeas() {
  // use await instead of .then()
}

countTeas();
```

### Exercise 11

Rewrite Exercise 5 using async/await - fetch a tea, then fetch its inventory.

```js
async function getTeaWithStock(id) {
  // your code
}

getTeaWithStock(1);
```

### Exercise 12

Add error handling to Exercise 11 using try/catch:

```js
async function getTeaWithStock(id) {
  try {
    // your code
  } catch (error) {
    console.error("Failed:", error.message);
    return null;
  }
}

// Test with valid ID
getTeaWithStock(1);

// Test with invalid ID
getTeaWithStock(999);
```

### Exercise 13 ⭐

Create an async function that:
1. Fetches all teas
2. Filters to organic teas
3. Gets inventory for each
4. Returns only those with stock > 100

```js
async function getWellStockedOrganicTeas() {
  // your code
}

getWellStockedOrganicTeas().then(teas => {
  console.log("Well-stocked organic teas:", teas);
});
```

---

## Part 5: Promise.all

Run multiple Promises in parallel for better performance.

<details>
<summary>📚 Recall: Promise.all</summary>

`Promise.all([p1, p2, p3])` runs all Promises simultaneously and resolves when ALL complete. Returns an array of results in the same order.
</details>

### Exercise 14

Fetch 3 specific teas (IDs 1, 5, and 10) in parallel using `Promise.all`.

```js
async function getThreeTeas() {
  const ids = [1, 5, 10];

  // 1. Create an array of fetch Promises (use .map())
  // 2. Use Promise.all() to wait for all of them
  // 3. Log each tea's name
}

getThreeTeas();
```

**Bonus:** Modify it to also log how long the operation took using `Date.now()`.

> 💡 All three fetches run at the same time. `Promise.all` only waits as long as the slowest one - much faster than fetching one after another.

### Exercise 15 ⭐

Create a function that fetches ALL teas and ALL inventory data in parallel, then combines them into a single report:

```js
async function getFullInventoryReport() {
  // Fetch both endpoints in parallel
  const [teas, inventory] = await Promise.all([
    // your code
  ]);

  // Combine: for each tea, add its stock count
  // Return array of { name, origin, stock }
}

getFullInventoryReport().then(report => {
  console.log("Inventory Report:");
  report.forEach(item => {
    console.log(`- ${item.name} (${item.origin}): ${item.stock} in stock`);
  });
});
```

---

## Part 6: Authentication ⭐⭐

Work with protected endpoints using authentication tokens.

### Exercise 16

The `/orders` endpoint requires authentication. First sign up, then log in:

1. POST to `/auth/signup` with your email and a password to create an account
2. POST to `/auth/login` with the same email and password to get a token

> ⚠️ Use a **dummy email and password** — not your real ones! This is a practice API with no security guarantees.

```js
// Step 1: Sign up (only needed once)
async function signup(email, password) {
  // POST to ${API_BASE}/auth/signup
  // Body: { email, password }
  // Return: data.token
}

// Step 2: Log in
async function login(email, password) {
  // POST to ${API_BASE}/auth/login
  // Body: { email, password }
  // Return: data.token
}

// Sign up first, then log in (use dummy credentials!)
await signup("yourname@example.com", "mypassword");
login("yourname@example.com", "mypassword")
  .then(token => console.log("Got token:", token))
  .catch(err => console.error(err.message));
```

Hint: Use `method: "POST"` and `headers: { "Content-Type": "application/json" }` in your fetch options.

### Exercise 17 ⭐⭐

Use the token from Exercise 16 to fetch orders:

```js
async function getOrders() {
  // 1. Login to get token (use your login function)
  // 2. Fetch /orders with Authorization header: "Bearer <token>"
  // 3. Return the orders
}

getOrders()
  .then(orders => console.log("Orders:", orders))
  .catch(err => console.error(err.message));
```

Hint: The Authorization header format is `Bearer ${token}`
