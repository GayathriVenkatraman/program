# Events Startup Project

This is a standalone project where you will build a web application for an events startup. You will work individually to develop features for a ticketing platform that helps people view and buy tickets for events.

## Project Learning Goals

By the end of this module, you will be able to:

- [ ] Apply your specialism knowledge and skills within a realistic work project
- [ ] Practice running a full end-to-end project (e.g. planning with trello, through to deployment)
- [ ] Transform requirements into functional working solutions
- [ ] Successfully deploy complex services/applications
- [ ] Overcome technical difficulties, find solutions independently, and know when to reach out and ask for help in a constructive manner
- [ ] Plan a complex project and deliver it on time
- [ ] Feel ready to run a similar process for the team final project

## Scenario

Welcome to your new job! We are an events startup, and you're here to help us develop our web app, which helps our users view and buy tickets for events.

### Practical details

- You'll work by yourself (sorry, you're the only developer we've hired!)
- We have an existing app that you'll build on top of - it's basic so there's lots to do.
- We have some strict requirements that you need to implement, but there is space for personalisation too.

Some of the requirements below are already working in the current version of the app, others will need to be implemented by you, and there are some suggestions of tasks where you can come up with additional ideas yourself.

## Product Requirements

These requirements describe the overall functionality of the app.

### 1. Browsing and Searching

- [ ] 1.1 Users can view a list of events
- [ ] 1.2 Users can search and paginate through events
- [ ] 1.3 Users can view individual event details (date, time, venue, description)
- [ ] 1.4 Users can see ticket availability and pricing for an event

### 2. Authentication

- [ ] 2.1 Unauthenticated users can browse events
- [ ] 2.2 Authenticated users can see their account, previous orders etc.
- [ ] 2.3 Unauthorized actions result in clear and actionable error to the user

### 3. Shopping Cart

- [ ] 3.1 Users can add tickets to their shopping cart
- [ ] 3.2 Users can select ticket quantity when adding to cart
- [ ] 3.3 Items can be added, updated, or removed
- [ ] 3.4 Cart is saved across the session (and beyond the session, if authenticated)

### 4. Checkout

- [ ] 4.1 A user must be authenticated to checkout
- [ ] 4.2 During checkout, the cart is finalized into an order, which can then no longer be changed

### 5. History and Review

- [ ] 5.1 Authenticated users can view a list of completed orders
- [ ] 5.2 Authenticated users can view a specific order and its details
- [ ] 5.3 Authenticated users can easily view and show their purchased tickets

### 6. Error Handling and UX

- [ ] 6.1 Loading states are displayed while data is being fetched (Frontend only)
- [ ] 6.2 Meaningful error messages are shared when actions fail
- [ ] 6.3 Form inputs are validated before submission (Frontend only)

### 7. Admin and Reporting (optional idea)

- [ ] 7.1 Admins can view ticket sales statistics per event (e.g. tickets sold, revenue)
- [ ] 7.2 Admins can see an overview of all events and their performance

## Technical Requirements


### API Contract

<!-- TODO: Add or link to API contract specification -->

For frontenders, the API will already be working and complete. For backenders, the API will have placeholders - part of the project is to design APIs, not only implement planned interfaces.

### Implementation Requirements

You should follow the technologies, skills, tools, and stack you've learned throughout the course.

<!-- TODO: These requirements are by no means complete, just a couple of examples from each course curriculum to give a good example of how it should map to what we teach in the course -->

### Frontend-specific Requirements

- [ ] App must use React Router with distinct routes (e.g., event list, event detail, cart, orders)
- [ ] Shared state (e.g., cart, user session) must use React Context

### Backend-specific Requirements

- [ ] Database schema must be documented with an Entity-Relationship Diagram (ERD)
- [ ] Database must use PostgreSQL
- [ ] All database queries must use parameterized queries (no SQL injection vulnerabilities)

## Organisational Requirements

Follow the requirements and practices from the [Intro to Agile](/courses/foundation/intro-to-agile/README.md) module.

<!-- TODO: Consider setting up a Trello template with tags like week 1, week 2, or specific tasks -->

## Deliverables

### Frontend

- [ ] Trello board with organised/completed tasks
- [ ] Initial design sketches
- [ ] A standalone frontend codebase
- [ ] A deployed web app

### Backend

- [ ] Trello board with organised/completed tasks
- [ ] A standalone backend codebase
- [ ] Documented database schema with ERD
- [ ] Deployed API documentation
- [ ] Deployed API
- [ ] Deployed database
- [ ] Postman collection to test/demo all endpoints and example usage flows

---

## Internal Planning Notes

<!-- TODO: These are planning notes to be removed or moved before going live -->

We will create two apps, frontend and backend, from [hyf-project-template](https://github.com/HackYourFuture-CPH/hyf-project-template). Both courses should start with some state of runnable, working app. The starting point is up to us. They should have some code they have to "work out" at the start, just like when you start in a new job.

**Backend:**

- Basic API, runnable
- Initial API docs in place
- Initial database

**Frontend:**

- Basic frontend app, runnable
- Fully working, documented API via json-server, easily editable
