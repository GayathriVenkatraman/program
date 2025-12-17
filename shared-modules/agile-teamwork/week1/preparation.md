# Preparation

This module is entirely practical. You will work in a team and go through real development processes: discussing a product, defining an MVP, running sprint planning, daily standups, writing code, doing reviews, and completing a retrospective.
To participate effectively, you must review key concepts from the Foundation module and study several additional topics that we will actively use during the session.

## Part 1. Review key topics from [the Foundation module](../../../courses/foundation/intro-to-agile/week1/preparation.md)

Before the session, make sure you remember the following concepts:

- Agile Manifesto and core Agile values
- Differences between Waterfall and Agile
- Scrum framework: roles, events, artifacts
- What a Sprint is and what an Increment means
- How Product Backlog and Sprint Backlog work

## Part 2. Key concepts to study in more depth

### MVP (Minimum Viable Product)

#### What you need to know

- MVP is the smallest version of a product that delivers real value to the user.
- It is not a “cut-down” product. It is the fastest path to testing a hypothesis.
- MVP does not need full polish, but it must work and allow learning through feedback.

![Making sense of MVP](session-materials/Making-sense-of-MVP.jpg)

> **Simple example**
>
> Imagine building a recipe web app.
>
> A full version might include:
>
> - advanced search
> - shopping lists
> - user profiles
> - photos + video instructions
> - comments
> - recommendations
> - nutrition data
>
> But an MVP could be:
>
> - a list of recipes,
> - step-by-step instructions,
> - one image per recipe.
>
> A user can already cook a dish.
> Value is delivered — the product is validated.

### Sprint & Planning

#### Sprint

A short, fixed period (usually 1–2 weeks) where the team focuses on delivering a specific, working increment of the product.

#### Sprint Goal

A clear answer to:
What valuable outcome do we want to deliver by the end of this sprint?

> Example:
>
> "The user should be able to add tasks to a list."

#### Sprint Planning

Planning consists of three core parts:

1. Define the Sprint Goal.
2. Select the tasks that support that goal.
3. Estimate and confirm what the team can realistically complete.

#### Important

Sprint Planning is collaborative.
Tasks are not assigned top-down — the team decides how to achieve the Sprint Goal.

### Code Review

#### Why it matters

- Improves code quality
- Reduces bugs
- Shares knowledge within the team
- Creates consistent standards

#### What makes a good Pull Request

- Small — easy to read and review
- Atomic — solves one task, not many at once
- Clear — understandable naming and structure

#### Common pitfalls

- Huge PRs that are difficult to review
- Missing or unclear descriptions
- Unrelated changes mixed together
- Ignoring review comments or resolving them without applying the changes

#### Your responsibility

Even as a junior developer, you must be able to:

- open PRs,
- request reviews,
- give constructive comments,
- update code based on feedback.

> **Example**
>
> A developer decides to introduce a new third-party library to improve a component.
> During review, teammates raise concerns:
>
> - the library is incompatible with the existing build setup,
> - it significantly increases bundle size,
> - it will require refactoring shared components.
>
> The developer ignores the comments and merges the PR.
>
> What happens next:
>
> - The project stops building for the entire team.
> - CI pipeline fails on every branch.
> - Developers spend hours reverting and repairing the codebase.
> - The sprint plan collapses.
> - Trust in the process drops.
> - Overall team productivity declines.
>
> Conclusion:
> Code review is not a formality. It protects the team, the product, and the development flow.

## Key idea

This module simulates real teamwork in a real development cycle.
Preparation is needed so we spend the session building, planning, syncing, and reviewing — not learning the theory.
