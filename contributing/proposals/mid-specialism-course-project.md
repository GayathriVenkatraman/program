# Mid Specialism Course Project Proposal

## Context

In the old bootcamp, we had an individual project in the second half that practiced the "whole process" of creating a full stack app and deploying it. It was called "meal sharing".

The project was split over multiple modules. This makes it a little hard to get a quick overview. [See the table](#old-meal-sharing-content) at the bottom of this proposal if you wish to read more about the old project.

The new Program does not currently include this meal sharing project. We are now planning on including a similar project, and this proposal outlines some intentions/assumptions.

## The idea

We'd like to include a similar "big" individual project like the meal sharing in the specialism courses. I'm calling it the "mid specialism course" project for now (catching name, right?!).

Some starting points:
1. It should be the same "theme" across all specialisms, but the implementation requirements differ.
2. Each specialism has it's own scope based specifically on the course's content. See examples below.
3. It should be organised  similarly as the mealsharing project, in that it should:
    1. Be built alongside assignments in existing modules (React, Node, Databases etc.)
    2. Be an individual project
4. The content should be separate, and not combined inside other modules content. This makes it easier to maintain and reason about.
5. The innitial tasks should be clear, but the design and bigger scope should be open, so trainees can practice coming up with their own solutions, and have some scope to "make it their own".
6. Run with a reduced scope/time (compared to meal sharing) at 3 weeks (up for discussion).


## Main learning goal ideas

1. Practice running a full end to end project (e.g. planning with trello, through to deployment)
2. Feel ready to run a similar process for the final project
3. Practice (potentially) more complex deployment processes
4. Put the specialism knowledge and skills into "real life" practice during the course
5. Transforming requirements into functional code
6. Overcoming technical difficulties, finding solutions indepednently, and reaching out for help appropriately
7. Planning and time management to deliver on time

## How it could look

The main concept is to keep a consistent theme across specialisms, but course-specific deliverables. This gives us flexibility if we change or create new specialisms, since they are not dependent on the same implementation details..

By keeping the projects entirely specialism bounded (e.g. backend only build the backend, rather then a full stack app), we can keep maintainence of boiler plate/starting codebases to a minimal.

### Theme

We should choose something other than "meal sharing" so trainees have something more unique to work (everyone knows everyone who graduates HYF has built a meal sharing app - it's a little tired now). It should be one well described theme.

### Frontend

Build _only_ the frontend part of the app. Backend data could be provided either with a very simple API, or a mock via hardcoded JSON data, or something similar. But we do not want anyone to get stuck with API work, they should be focussing on the frontend skills.

#### Example deliverables (frontend)

1. Trello board with organised/completed tasks
2. A standalone frontend codebase
3. A deployed web app accessible via a public url

### Backend

Build _only_ backend related parts of the app. There would be no end to end app being delivered/deployed. They would focus on building a suitable database and API endpoints, along with documentation.

#### Example deliverables (backend)
1. Trello board with organised/completed tasks
2. A standalone backend codebase
3. A database schema/working database
4. Deployed API documentation
5. Deployed API and database
6. Postman collection to test/demo all endpoints and example usage flows

## Next steps

1. Get feedback on this proposal (until end of year)
2. Work with a couple of mentors to brainstorm themes and build out a couple of potential project tasks that fit well in the current specialisms
3. Build and test any boilerplate/starting code for the projects
4. Integrate into the existing specialisms, either alongside existing assignments, or replacing them (or reducing them, so it doesn't become too much work)

## References

### Thanks

This proposal was based off the ideas that Bjørn outlied in [this original](https://github.com/HackYourFuture-CPH/program/pull/139) proposal, so mega thanks to him for starting the conversation. Since he's on a little break from this project, I am taking it over and putting some more words around it :-)

### Old meal sharing content

The old meal sharing project spanned 6 weeks and was a project involving both frontend and backend development.

| Area | Module | Topic | Description |
| ---| ---| ---| --- |
| Backend |[Databases week 3](https://github.com/HackYourFuture-CPH/databases/blob/main/lesson3/README.md#homework) | DB schema & queries | Create the database schema and queries needed for the meal sharing app. Entities include **Meals**, **Reservations**, and **Reviews** |
| Backend |[Node.js week 1](https://github.com/HackYourFuture-CPH/node.js/blob/main/week1/homework/readme.md#meal-sharing-endpoints) | Simple GET endpoints | Use the project template to connect to the database. Create a few GET endpoints without any arguments which returns **Meals**. Also validate requests and return correct error codes. |
| Backend |[Node.js week 2](https://github.com/HackYourFuture-CPH/node.js/blob/main/week2/homework/readme.md#meal-sharing-endpoints) | CRUD endpoints with body | Extend the API to contain standard CRUD endpoints for **Meals** and **Reservations**.  |
| Backend |[Node.js week 3](https://github.com/HackYourFuture-CPH/node.js/blob/main/week3/homework/readme.md#meal-sharing-endpoints) | Advanced endpoints with query parameters | Extend the API to contain standard CRUD endpoints for **Reviews**. Extend **Meal** endpoint to allow for filtering and sorting |
| Frontend |[React 1 week 3](https://github.com/HackYourFuture-CPH/React/blob/main/react1/week3/homework.md#meal-sharing) | Simple overview of meals | Create a simple page with a list of all meals. Fetch the data from the backend. |
| Frontend |[React 2 week 1](https://github.com/HackYourFuture-CPH/React/blob/main/react2/week1/homework.md#meal-sharing) | Card based overview of meals | Design the overview page to use a responsive grid of cards. Start using multiple components. |
| Frontend |[React 2 week 2](https://github.com/HackYourFuture-CPH/React/blob/main/react1/week3/homework.md#meal-sharing) | Add sub pages | Add routing and add a landing page, a meal overview page, and a meal detail page. The meal details page should contain forms to reserve a meal or review it. |
| Frontend |[Meal sharing session](https://github.com/HackYourFuture-CPH/React/blob/main/react2/Meal-sharing/homework.md#meal-sharing-session) | Add searching, filtering, and sorting | Add searching, filtering, and sorting functionality to the meal overview page, a meal overview page. Show available spots for a meal. Add additional polishing. |
