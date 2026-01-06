# Session Plan

The idea behind this session is to teach how AI can be used in the day-to-day development workflows of a developer.

Start by giving a brief overview of a usual workflow, and then dive into specific parts of it and how AI can help there, with specific prompts and exercises to practice.

## AI in the development workflow

### Workflow overview
0. Personal development - Reading, learning, practicing new software development skills
1. Problem definition - Understanding what we're trying to solve
2. Planning - Deciding what to build
3. Design - Deciding how it should work and look
4. Implementation - Building the software
5. Testing - Ensuring it all works correctly
6. Code review - Getting feedback and finalising the code
7. Deployment - Shipping it to users
8. Monitoring - Making sure things keep working as intended

After the overview, go through some specific phases to highlight key ways AI can support them. Of course there are many possiblilities in every phase (and we should encourage trainees to explore them themselves!), but the below are mostly aimed to inspire and give some concrete examples in a few of the phases that trainees can start using today.

### Personal development - Learning

Outside of HYF or work, spending time learning and practicing new development skills is important. This could be learning new programming languages, frameworks, tools or concepts.

Here's some examples:

#### 1. "Explaining by comparison" prompt

Learn quickly by mapping new knowledge to things you already understand.

```
I know how to do X in <this language I already know>:

<paste code snippet here>

Show me how to write the same functionality in <new language> and explain:
1. What concepts are the same
2. What's different and why
3. What would surprise a developer coming from <language I already know>
```

#### 2. The "Code Tutor" prompt

Learn a new language/framework/tool through practice, and getting feedback to improve.

```
I'm learning how to do X in <language/framework/tool>. Here is my current solution:

<paste code snippet here>

Review this as if I were a junior developer:
1. Point out any issues, bugs or bad practices
2. Suggest better practices or patterns
3. Explain what each change means and why it matters
4. Create a mini summary of why I should study next, based on my weaknesses and mistakes
```

#### 3. The "Learning plan" prompt

If you have a big topic ahead of you, get help to create a learning path to help you stay on track and avoid becoming overwhelemed.

```
I want to learn X as a developer who already knows Y and Z. Create a 4 week self-study plan focussed on hands-on coding practice.

For each week, include:
1. Key concepts to learn
2. One small practical project
3. Common mistakes and misunderstandings beginners make
4. How this new thing differs from what I already know
```

#### Exericse 1

Use each of the three prompts above using your own personal learning goals, and evaluate what you like and don't like about the output of the AI. Bonus: Try tweaking a prompt template to shape the output more to your own personal needs.

{% hint style="info" %}
**Top tip**
If AI writes code you can’t explain:

* Slow down
* Ask why
* Rewrite it yourself until you understand

That is the moment where learning happens, so don't miss out by skipping ahead!
{% endhint %}

### Design - Code explanation
While preparing ideas for a particular solution in the Design phase, you'll likely come across the challenge of needing to understand existing code.

TODO add some prompting examples here, as well as good follow up prompts

#### Exercise 2

Use AI to help explain the code in [Exercise 2](). Ask follow up questions until you have a good grasp of what every function and line of code is achieving.

TODO write the exercise code, inspired by [exercise](https://github.com/hosseinzahed/github-copilot-use-cases/blob/main/01-code-explanation.py)

### Implementation - Learning new approaches
While writing code, you may come across a roadblock where you're not entirely sure how to implement something. 

TODO add some prompting examples here

#### Exercise 3

Use AI to give you some suggestions on possible solutions to [Exercise 3]().

TODO write the exercise and supporting code

### Implementation - Code refactoring

After you write a solution, you may wonder if there's a neater or better way to structure the code.

TODO add some prompting examples here

#### Exercise 4

Use AI to help you refactor the code in [Exercise 4]().

TODO write the exercise code, inspired by [exercise](https://github.com/hosseinzahed/github-copilot-use-cases/blob/main/03-code-refactoring.ts)

### Implementation - Bug fixing

Before your solution is finished, you'll need to make sure it's bug free.

TODO add some prompting examples here

#### Exercise 5

Use AI to help you uncover the bug in the [Exercise 5]() code, understand why it's happening, and fix it.

TODO write the exercise code, inspired by [exercise](https://github.com/hosseinzahed/github-copilot-use-cases/blob/main/04-bug-fixing.py)

### Implementation - Documentation generation

AI is not only useful in generating code, but also documentation. 

TODO add some prompting examples here

#### Exercise 6

Use AI to draw a diagram to explain how the code in [Exercise 6]() works. Confirm that it is correct, and fix any mistakes.

TODO write the exercise code, inspired by [exercise](https://github.com/hosseinzahed/github-copilot-use-cases/blob/main/05-document-generation.py)

### Code review - Feedback assistance

When your code is ready, it will be time for getting feedback from other developers. Before you do that, save some time and get some initial feedback from AI on improving your code.

TODO add some prompting examples here

#### Exercise 7

Use AI to get some structured feedback on improving the code in [Exercise 7](), and make the changes.

TODO write the exercise and supporting code

## AI in the workplace

### Ethics, legal and risk considerations

TODO these follow on from the foundation content, but should be give more software dev specific examples, like the risk of pasting protected IP code or customer data into third party AI tools.

### The future of AI in development

We don't know the future for sure, that's what makes it exciting. There are some trends that we are seeing:

#### Trends

1. Less time typing code
2. The gap between junior and mid-level narrows
3. More cross-functional roles
4. Understanding the "why"
5. Super fast industry shifts

#### Tips

1. Stay in the loop of AI developments
    - Follow key organisations in the space (OpenAI, Anthropic, Microsoft/Github, Google/Gemini)
    - Join in conversations with other developers online and offline to see what they're experiencing
    - Follow AI related news

2. Learn and practice with new tools/features
    - Try out new AI features and capabilities as they are released
    - Use AI tools in your real projects to practice

3. Integrate useful parts into your own workflow
    - Whatever you find works well, integrate it into your own daily working practices
