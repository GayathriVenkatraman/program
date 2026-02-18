# Session Plan (Week 1: Array Methods)

> This guide is for mentors. It outlines how to run the session, what to emphasize, and why we introduce certain terminology.

---

## Session Goals

By the end of this session, trainees should:

1. Understand when to use `forEach`, `map`, and `filter`
2. Be able to chain array methods together
3. Write arrow functions with implicit and explicit returns
4. Connect array methods to the Data → Logic → Rendering model

---

## Glossary Goals

| Term                          | Why we introduce it                                                                                          |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Declarative vs Imperative** | Frames the shift from for-loops to array methods. Helps them understand _why_ this style is preferred.       |
| **Higher-order function**     | They'll encounter this term in docs, tutorials, and interviews. Demystifies "functions that take functions." |
| **Side effect**               | Critical for understanding `forEach` vs other methods. Foundation for async concepts in Week 2.              |
| **Predicate**                 | Precise term for filter functions. Common in documentation and libraries.                                    |
| **Pipeline**                  | Mental model for chaining. Useful metaphor they'll use throughout their career.                              |

---

## Session Outline

### 1. Introduction

- Connect to the course theme: Data → Logic → Rendering
- Array methods live in the **Logic layer** - transforming data between storage and display
- Show the tea shop context they'll work with

**Use:** [Slides](./session-materials/slides/index.html) (first few sections)

### 2. forEach

- Start with `function()` syntax, NOT arrow functions
- Emphasize: **no return value** - it's for side effects
- Live code example: logging tea names

**Key point:** "If you need to _do_ something for each item but don't need a result back, use `forEach`."

**Exercises:** [Part 1](./session-materials/exercises.md#part-1-foreach) (exercises 1-3)

### 3. map

- Still using `function()` syntax
- Emphasize: **same count in, same count out**
- Contrast with `forEach`: map _returns_ a new array, forEach doesn't
- Live code: extract tea names, calculate prices

**Key point:** "If you need to _transform_ each item into something else, use `map`."

**Exercises:** [Part 2](./session-materials/exercises.md#part-2-map) (exercises 4-6)

### 4. filter

- Introduce the term **predicate** - a function returning true/false
- Emphasize: **items stay the same shape, count changes**
- Live code: organic teas, Japanese teas

**Key point:** "If you need to _select_ some items based on a condition, use `filter`."

**Exercises:** [Part 3](./session-materials/exercises.md#part-3-filter) (exercises 7-10)

### 5. Combining methods

- Introduce **pipeline** metaphor
- Show chaining: filter → map
- Discuss order: usually filter first (reduce data), then map (transform)

**Exercises:** [Part 4](./session-materials/exercises.md#part-4-combining-methods) (exercises 11-13)

### 6. Arrow functions

- NOW introduce arrow syntax
- Show the progression: `function()` → arrow → implicit return
- Practice converting earlier exercises

**Key point:** "Arrow functions are shorter syntax for the same thing. They're popular because they reduce noise in array methods."

**Exercises:** [Part 5](./session-materials/exercises.md#part-5-arrow-functions) (exercises 14-16)

### 7. Wrap-up

- Recap the three methods and when to use each
- Show the "questions to ask" slide
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

### Use the tea data consistently

All examples should use the tea shop data. This builds familiarity and shows how the same dataset can be queried different ways.

### Connect to backend context

Regularly remind them: "This is what happens on every API request. Data comes in one shape, goes out another."

---

## Materials

- [Slides](./session-materials/slides/index.html) - Reveal.js presentation
- [Exercises](./session-materials/exercises.md) - In-class exercises
- [Assignment](./assignment.md) - Take-home work
- [Tea Data](../data/teas.js) - Shared dataset
