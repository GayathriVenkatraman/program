# Session Plan (Week 3: Promises & async/await)

> This guide is for mentors. It outlines how to run the session, what to emphasize, and why we introduce certain terminology.

---

## Session Goals

By the end of this session, trainees should:

1. Understand why Promises exist (solving callback hell)
2. Consume Promises with `.then()` and `.catch()`
3. Create Promises with `new Promise()`
4. Use `async`/`await` for cleaner async code
5. Handle errors with `try`/`catch`
6. Use `Promise.all()` for parallel operations
7. Fetch data from the Tea Shop API

---

## Glossary Goals

| Term                 | Why we introduce it                                                    |
| -------------------- | ---------------------------------------------------------------------- |
| **Promise**          | Core concept for modern async JavaScript. They'll use this everywhere. |
| **resolve / reject** | Understanding Promise outcomes is essential for proper error handling. |
| **then / catch**     | The foundational API for working with Promises.                        |
| **async / await**    | Modern syntax they'll use daily. Built on Promises.                    |
| **Promise.all**      | Essential for performance - parallel operations.                       |

---

## Session Outline

### 1. Introduction

- Recall Week 2: callback hell example
- "There has to be a better way" - introduce Promises
- Show the transformation: nested callbacks → chained Promises → async/await

**Use:** [Slides](./slides/index.html) (introduction sections)

### 2. Promise Consumption

- Start with consuming, NOT creating Promises
- Use `fetch()` - a real function that returns a Promise
- Live code: fetch teas from the API
- Explain `.then()` and `.catch()`
- Emphasize: `.then()` returns a Promise (enables chaining)

**Key point:** "When you have a Promise, you can call .then() for success and .catch() for failure."

**Exercises:** [Part 1](./session-materials/exercises.md#part-1-consuming-promises) (exercises 1-4)

### 3. Chaining Promises

- Show chaining: one `.then()` after another
- The return value becomes the next `.then()`'s input
- One `.catch()` at the end handles all errors
- Compare to callback hell: flat vs nested

**Key point:** "Each .then() returns a new Promise. That's what makes chaining work."

**Exercises:** [Part 2](./session-materials/exercises.md#part-2-chaining-promises) (exercises 5-6)

### Break 1

### 4. Creating Promises

- Now show how to CREATE Promises
- `new Promise((resolve, reject) => { ... })`
- Convert callback-based code to Promise-based
- Live code: promisify `setTimeout`
- Live code: promisify `fs.readFile`

**Key point:** "resolve = success, reject = failure. You decide when to call them."

**Exercises:** [Part 3](./session-materials/exercises.md#part-3-creating-promises) (exercises 7-9)

### 5. async/await

- "Promises are great, but there's even cleaner syntax"
- `async` makes a function return a Promise
- `await` pauses until Promise resolves
- Live code: rewrite `.then()` chains with async/await
- Error handling with `try`/`catch`

**Key point:** "async/await is just Promises with nicer syntax. The code looks synchronous but runs asynchronously."

**Exercises:** [Part 4](./session-materials/exercises.md#part-4-asyncawait) (exercises 10-13)

### Break 2

### 6. Promise.all

- Problem: sequential requests are slow
- Solution: run them in parallel with `Promise.all()`
- Live code: fetch multiple teas at once
- Show timing difference

**Key point:** "Promise.all runs operations in parallel. Much faster when requests don't depend on each other."

**Exercises:** [Part 5](./session-materials/exercises.md#part-5-promiseall) (exercises 14-15)

### 7. Wrap-up

- Recap: Promises → .then/.catch → async/await → Promise.all
- Mention Part 6 (Authentication) as optional stretch for fast learners
- Preview Week 4: "Next week we organize code with Classes"
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

### Teach consumption before creation

Students often get confused when Promise creation and consumption are mixed. Teach them separately:

1. First: "Here's a Promise (from fetch). How do we USE it?"
2. Later: "How do we CREATE our own Promises?"

### The order matters

Don't explain async/await until they understand .then/.catch. async/await is sugar on top of Promises - if they don't understand Promises, async/await will be magic they can't debug.

### Use real API calls

The Tea Shop API makes exercises concrete. Students see real network delays, real errors, real data. Much more engaging than setTimeout simulations.

### Common mistakes to watch for

- Forgetting `await` (getting Promise objects instead of values)
- Forgetting to return in `.then()` chains
- Not handling errors (no `.catch()` or try/catch)
- Using `await` outside an `async` function

---

## Materials

- [Slides](./slides/index.html) - Reveal.js presentation
- [Exercises](./session-materials/exercises.md) - In-class exercises
- [Assignment](./assignment.md) - Take-home work
- [Tea Shop API](https://tea-api-787553294298.europe-west1.run.app/api/v1) - Live API for exercises
