# Advanced JavaScript

> From visual output to data pipelines: your journey into backend development

Welcome to the Advanced JavaScript module. Over the next 4 weeks, you'll learn the JavaScript patterns that power every backend system: transforming data, handling asynchronous operations, consuming APIs, and modeling your domain with classes.

We'll build on a single example throughout: a **tea shop e-commerce** system. This gives you a concrete, evolving context to see how each concept connects to real backend work.

---

## Welcome to Backend Development

Frontend development is visual. You write code, refresh the browser, and see buttons, colors, and layouts. The feedback loop is immediate and satisfying.

Backend development is different. There's no visual output. Your code runs on a server somewhere, processing requests, querying databases, and returning data. The output isn't pixels on a screen - it's structured data sent over a network.

This can feel abstract at first. But here's the thing: **terminals existed before graphical interfaces**. The command line isn't a step backward - it's where serious computing has always happened. Get comfortable with it.

### What Does a Backend Actually Do?

Think about scrolling Instagram. You don't download all 500 million posts when you open the app. Instead, your app asks: _"Give me the next 10 posts for this user."_

That's a backend call. The backend:

1. Receives the request
2. Checks if you're allowed to see those posts
3. Queries the database for the right 10 posts
4. Formats them in a way the app can use
5. Sends back just that slice of data

Backend output = **consumable slices of data in a structured manner**.

---

## What is Data?

Before we manipulate data, let's understand what it is. Data is just structured information. The same information can be represented in different formats.

Here are 3 teas from our tea shop:

### As a Table

| id  | name        | origin | pricePerGram | organic |
| --- | ----------- | ------ | ------------ | ------- |
| 1   | Sencha      | Japan  | 0.12         | true    |
| 2   | Earl Grey   | India  | 0.08         | false   |
| 3   | Dragon Well | China  | 0.25         | true    |

### As CSV (Comma-Separated Values)

```csv
id,name,origin,pricePerGram,organic
1,Sencha,Japan,0.12,true
2,Earl Grey,India,0.08,false
3,Dragon Well,China,0.25,true
```

### As JSON (JavaScript Object Notation)

<!-- prettier-ignore -->
```jsonl
[
  { "id": 1, "name": "Sencha", "origin": "Japan", "pricePerGram": 0.12, "organic": true },
  { "id": 2, "name": "Earl Grey", "origin": "India", "pricePerGram": 0.08, "organic": false },
  { "id": 3, "name": "Dragon Well", "origin": "China", "pricePerGram": 0.25, "organic": true }
]
```

### As JSONL (JSON Lines - one object per line)

<!-- prettier-ignore -->
```jsonl
{"id":1,"name":"Sencha","origin":"Japan","pricePerGram":0.12,"organic":true}
{"id":2,"name":"Earl Grey","origin":"India","pricePerGram":0.08,"organic":false}
{"id":3,"name":"Dragon Well","origin":"China","pricePerGram":0.25,"organic":true}
```

Same data, different formats. In this course, we'll primarily work with JSON since that's what JavaScript handles natively.

---

## The Three Layers: Data → Logic → Rendering

Every application, from a simple website to a complex enterprise system, follows this pattern:

```plaintext
Data → Logic → Rendering
```

- **Data Layer:** The raw truth. Databases, files, external services. This is where information lives.
- **Logic Layer:** The brain. What to fetch, who's allowed, how to transform. **This is where backends live.**
- **Rendering Layer:** The face. HTML, mobile UI, PDF - whatever users actually see.

### Example: Filtering Teas

You browse a tea shop website and click "Organic only."

1. **Rendering** (frontend): Sends your filter choice to the server
2. **Logic** (backend): Receives the request, queries the database, applies your filter, formats the response
3. **Data** (database): Returns all teas matching the query
4. **Logic** (backend): Transforms the raw data into the shape the frontend expects
5. **Rendering** (frontend): Displays the filtered teas as cards with images and prices

The backend sits in the middle, orchestrating the flow between stored data and user-facing output.

---

## Course Overview

| Week | Topic             | Backend Connection                                    |
| ---- | ----------------- | ----------------------------------------------------- |
| 1    | Array Methods     | Transforming data between "as stored" and "as served" |
| 2    | Callbacks & Async | Why backends can't run top-to-bottom                  |
| 3    | Promises & APIs   | Speaking to databases and external services           |
| 4    | Classes           | Modeling your business domain                         |

Each week builds on the previous. By the end, you'll have the JavaScript fundamentals needed to build real backend systems.

### Week 1: Array Methods - The application layer's daily bread

The database gives you raw rows. You filter out unauthorized items, map to a cleaner shape, reduce to calculate totals. This is the transformation step between "data as stored" and "data as served."

> You search for "green tea" on a tea shop. The database returns 200 matches. But you only want organic ones, sorted by price, showing just name and price - not the 15 other fields stored internally. That's `filter`, then `sort`, then `map`. Three lines of code, happens on every single request.

### Week 2: Callbacks & Async - Why backends can't run top-to-bottom

Databases are slow. File systems are slow. Network calls are slow. Callbacks are how JavaScript says "go do this slow thing, and here's what to do when you're done."

> A café orders 50 teas from your shop. Your backend needs to: check inventory, calculate shipping, charge their card, send confirmation email. If each step took 500ms and you waited frozen, that's 2 seconds. Meanwhile 100 other customers are trying to browse. Callbacks let you say "start charging the card, and while you wait, go handle those other customers."

### Week 3: Promises & API Consumption - Speaking to other services

Real backends rarely work alone. They call databases, payment providers, email services, other APIs. Promises manage these conversations cleanly with proper error handling.

> Customer wants to checkout. Your backend calls Stripe for payment, calls PostNord for shipping rates, calls your inventory service to reserve stock. Three external calls, any could fail. Promises let you say "do all three, wait for all to succeed, and if any fails, here's how to handle it." Try writing that with nested callbacks - you'll see why promises exist.

### Week 4: Classes - Modeling your domain

A tea isn't just a JavaScript object floating around. It has behaviors: validate itself, calculate shipping weight, check stock. Classes model your business domain.

> Every time you handle a tea, you write the same checks: is the price valid? is stock above zero? is steep time reasonable? Scattered across your codebase, you write these 50 times. With a `Tea` class, you write them once. `Tea.create(data)` either gives you a valid tea or throws an error. The logic lives with the data it protects.

---

## The Tea Shop

Throughout this course, we'll work with data from a fictional tea shop. You'll encounter:

- **Teas**: Different varieties with origins, prices, brewing instructions
- **Equipment**: Teapots, cups, infusers
- **Orders**: Customer purchases with items and totals
- **Customers**: People who buy from the shop

This consistent context means you're not learning abstract concepts in isolation - you're solving real problems a real backend would need to solve.

---

## Getting Started

Each week has:

- `README.md` - Overview and learning goals
- `preparation.md` - What to do before class
- `session-plan.md` - What happens during class (for teachers)
- `assignment.md` - Homework
- `session-materials/` - Code examples and exercises

Start with [Week 1: Array Methods](./week1/README.md).
