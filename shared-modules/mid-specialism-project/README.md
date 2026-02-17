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

### 1. Browsing and Searching

- [ ] 1.1 Users can view a list of events
- [ ] 1.2 Users can search and paginate through available events

### 2. Authentication

- [ ] 2.1 Unauthenticated users can browse events
- [ ] 2.2 Authenticated users can see their account, previous orders etc.
- [ ] 2.3 Unauthorized actions result in reasonable error

### 3. Shopping Cart

- [ ] 3.1 Users can add tickets to their shopping cart
- [ ] 3.2 Items can be added, updated, or removed
- [ ] 3.3 Cart state remains consistent across the session (and beyond the session, if authenticated)

### 4. Checkout

- [ ] 4.1 A cart can be finalized into an order, which can no longer be changed

<!-- TODO: Decide if fake payment is required -->

### 5. History and Review

- [ ] 5.1 Users can view a list of completed orders
- [ ] 5.2 Users can view a specific order and its details
- [ ] 5.3 Users can easily access purchased tickets

## Technical Requirements

> Frontenders do not need to implement a backend. Backenders do not need to implement a frontend.

### API Contract

<!-- TODO: Add or link to API contract specification -->

For frontenders, the API will already be working and complete. For backenders, the API will have placeholders - part of the project is to design APIs, not just implement a planned version.

### Implementation Requirements

You should follow the technologies, skills, tools, and stack you've learned throughout the course.

<!-- TODO: Specify any particular requirements (e.g., PostgreSQL rather than SQLite) -->

## Organisational Requirements

Follow the requirements and practices from the [Intro to Agile](/courses/foundation/intro-to-agile/README.md) module.

<!-- TODO: Consider setting up a Trello template with tags like week 1, week 2, or specific tasks -->

## Deliverables

### Frontend

- [ ] Trello board with organised/completed tasks
- [ ] A standalone frontend codebase
- [ ] A deployed web app

<!-- TODO: Decide if design docs are required -->

### Backend

- [ ] Trello board with organised/completed tasks
- [ ] A standalone backend codebase
- [ ] Documented database schema
- [ ] Deployed API documentation
- [ ] Deployed API
- [ ] Deployed database
- [ ] Postman collection to test/demo all endpoints and example usage flows

---

## Internal Planning Notes

<!-- TODO: These are planning notes to be removed or moved before publication -->

We will create two apps, frontend and backend, from hyf-project-template:

**Backend:**

- Basic API, runnable
- Initial API docs
- Initial database

**Frontend:**

- Basic frontend app, runnable
- Fully working, documented API via json-server, easily editable
