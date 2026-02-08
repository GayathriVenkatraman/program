# Session Plan (Week 2: Callbacks & Delayed Execution)

> This guide is for mentors. It outlines how to run the session, what to emphasize, and why we introduce certain terminology.

---

## Session Goals

By the end of this session, trainees should:

1. Understand functions as first-class values
2. Use `reduce` confidently for aggregation
3. Build their own higher-order functions (myForEach, myMap)
4. Understand how delayed callbacks work (setTimeout, fs.readFile)
5. Write callbacks for `setTimeout` and `fs.readFile`
6. Understand the error-first callback pattern

---

## Glossary Goals

| Term | Why we introduce it |
|------|---------------------|
| **Callback** | Central concept. Week 1 used them implicitly; now we name them explicitly. |
| **Accumulator** | Essential for understanding `reduce`. Common in documentation. |
| **Pure function** | Foundation for understanding why bugs with delayed code happen. |
| **Immutability** | Connects to state management and safety with delayed code. |
| **Error-first callback** | Node.js convention. They'll see this pattern constantly. |
| **Delayed execution** | Fundamental concept for backend development. |

---

## Session Outline

### 1. Introduction

- Recall Week 1: forEach, map, filter all take functions as arguments
- "Those functions are callbacks - but they run immediately"
- This week: callbacks that run *later*
- The cafe metaphor: a waiter doesn't stand at the kitchen waiting for one order

**Use:** [Slides](./slides/index.html) (introduction sections)

### 2. Functions as Values

- Functions are "first-class citizens" - treated like any other value
- Live code: assign function to variable, call via variable
- Live code: `functionRunner(fn)` that calls the passed function - core callback pattern
- Live code: array of functions, call each
- Live code: function that returns a function (factory pattern)

**Key point:** "You can pass functions around like data. This is what makes callbacks possible."

**Exercises:** [Part 1](./session-materials/exercises.md#part-1-functions-as-values) (exercises 1-4)

### 3. reduce Method

- Connect to Week 1: map transforms, filter selects, forEach does side effects
- reduce: the "build up" pattern
- Walk through the accumulator concept with a simple sum
- Live code: sum of stockCount
- Live code: group by origin (object accumulator)

**Key point:** "reduce lets you build any single value from an array - a number, object, string, even another array."

**Exercises:** [Part 2](./session-materials/exercises.md#part-2-reduce) (exercises 5-8)

### Break

### 4. Callbacks - Synchronous

- Key insight: the function you pass to map IS a callback
- "Let's build our own forEach to see how callbacks work under the hood"
- Live code: implement `myForEach(array, callback)`
- Live code: implement `myMap(array, callback)`

**Key point:** "Building these yourself demystifies how array methods work. They're just functions calling your callback."

**Exercises:** [Part 3](./session-materials/exercises.md#part-3-building-higher-order-functions) (exercises 9-11)

### 5. setTimeout & Delayed Callbacks

- Now the twist: what if the callback runs *later*?
- Show code with surprising output order - let students predict first
- Explain: JavaScript continues running, callback runs when timer fires
- Live code: `runAfterDelay(delay, callback)` utility
- Live code: simulated database lookup with delay

**Key point:** "The callback doesn't block. JavaScript keeps running. This is how backends serve many users at once."

**Exercises:** [Part 4](./session-materials/exercises.md#part-4-settimeout--delayed-callbacks) (exercises 12-15)

### Break

### 6. File System Callbacks

- Real backend example: reading files
- Introduce error-first pattern: `(error, data)`
- Live code: read a JSON file, parse it, use the data
- Emphasize: always check error first

**Key point:** "Node uses error-first callbacks everywhere. Always handle errors before using data."

**Exercises:** [Part 5](./session-materials/exercises.md#part-5-file-system) (exercises 16-17)

### 7. Wrap-up

- Recap: functions as values, reduce, callbacks, delayed callbacks
- Preview Week 3: "Callback nesting gets ugly. Promises solve this."
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

### The callback revelation

Many trainees have used map/filter without realizing they're passing callbacks. Make this explicit: "You've been using callbacks all along!"

### Show the surprising output order

For setTimeout, always ask trainees to predict the console.log order *before* running. The surprise helps the concept stick.

### Use the tea data

Continue using the tea shop context. Show how reduce solves problems they encountered in Week 1 (like grouping teas by origin).

### Connect to backend reality

Regularly remind them: "This is why servers don't freeze when handling multiple requests. They start operations and handle results via callbacks."

---

## Materials

- [Slides](./slides/index.html) - Reveal.js presentation
- [Exercises](./session-materials/exercises.md) - In-class exercises
- [Assignment](./assignment.md) - Take-home work
- [Tea Data](../data/teas.js) - Shared dataset
