# Session Plan

The idea behind this session is to teach how AI can be used in the day-to-day development workflows of a developer.

Start by giving a brief overview of a usual workflow, and then dive into specific parts of it and how AI can help there, with specific prompts and exercises to practice. The suggestion is that mentors talk through specific use cases, and demo the prompts in the session. The exercises are designed for the trainees to practice themselves on their own machines.

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

```prompt
I know how to do X in <this language I already know>:

<paste code snippet here>

Show me how to write the same functionality in <new language> and explain:
1. What concepts are the same
2. What's different and why
3. What would surprise a developer coming from <language I already know>
```

#### 2. The "Code Tutor" prompt

Learn a new language/framework/tool through practice, and getting feedback to improve.

```prompt
I'm learning how to do X in <language/framework/tool>. Here is my current solution:

<paste code snippet here>

Review this as if I were a junior developer:
1. Point out any issues, bugs or bad practices
2. Suggest better practices or patterns
3. Explain what each change means and why it matters
4. Create a mini summary of what I should study next, based on my weaknesses and mistakes
```

#### 3. The "Learning plan" prompt

If you have a big topic ahead of you, get help to create a learning path to help you stay on track and avoid becoming overwhelemed.

```prompt
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

- Slow down
- Ask why
- Rewrite it yourself until you understand

That is the moment where learning happens, so don't miss out by skipping ahead!
{% endhint %}

### Design - Code explanation

While preparing ideas for a particular solution in the Design phase, you'll likely come across the challenge of needing to understand existing code.

#### 1. "Code explanation" prompt

When you encounter unfamiliar code, start by asking for a high-level explanation.

```prompt
Explain what this code does at a high level:

<paste code here>

Focus on:
1. The overall purpose
2. The main components and how they interact
3. Any important patterns or techniques being used
```

#### 2. "Dig deeper" follow-up prompt

Once you understand the big picture, ask targeted follow-up questions to clarify specifics.

```prompt
In the code above, I don't understand <specific part>. Can you explain:
1. What this specific section is doing step by step
2. Why it's written this way instead of <alternative approach>
3. What would happen if this part was removed or changed
```

#### Exercise 2

Use AI to help explain the code in [Exercise 2](session-materials/exercise2.js). Ask follow up questions until you have a good grasp of what every function and line of code is achieving.

### Implementation - Learning new approaches

While writing code, you may come across a roadblock where you're not entirely sure how to implement something.

#### 1. "Explore approaches" prompt

When you're stuck on how to implement something, ask for multiple options to consider.

```prompt
I need to implement <describe what you're trying to achieve>.

<optional: paste relevant code snippet for context>

What are 2-3 different approaches I could take? For each approach:
1. Briefly explain how it works
2. List the pros and cons
3. When would this approach be the best choice
4. Highlight any common mistakes to avoid
```

#### Exercise 3

Use AI to give you some suggestions on possible solutions to [Exercise 3](session-materials/exercise3.js).

### Implementation - Code refactoring

After you write a solution, you may wonder if there's a neater or better way to structure the code.

#### 1. "Refactor my code" prompt

Refactoring can mean different things depending on what you want to improve. Some common goals include:
- Improved readability
- Better naming
- Extracting reusable functions
- Reducing duplication
- Simplifying complex logic
- Following a specific pattern or convention

```prompt
Refactor this code to <specific goal>:

<paste code here>

For each change you suggest:
1. Explain what you changed
2. Explain why it's an improvement
```

#### Exercise 4

Use AI to help you refactor the code to be more readable in [Exercise 4](session-materials/exercise4.js).

### Implementation - Bug fixing

Before your solution is finished, you'll need to make sure it's bug free.

#### 1. "Find and fix the bug" prompt

When your code isn't working as expected, ask AI to help identify, explain, and fix the issue.

```prompt
This code is producing unexpected results:

<paste code here>

Expected output: <what you expected>
Actual output: <what you got>

1. What is the bug?
2. Why is this happening?
3. What options do I have for fixing it?
```

#### Exercise 5

Use AI to help you uncover the bug in the [Exercise 5](session-materials/exercise5.js) code, understand why it's happening, and fix it.

### Implementation - Documentation generation

AI is not only useful in generating code, but also documentation. There are many types of documentation AI can help you generate, for example:
- Function and code comments
- README files
- API documentation
- Architecture diagrams
- User guides

#### 1. "Add a code comment" prompt

```prompt
Generate a clear, concise comment to this function explaining what it does, its parameters, and what it returns:

<paste code here>
```

#### 2. "Generate a diagram" prompt

```prompt
Create an ASCII diagram that visualises how this code works:

<paste code here>

Show the flow of data and the key steps.
```

#### Exercise 6

Use AI to draw a diagram to explain how the code in [Exercise 6](session-materials/exercise6.js) works. This code should look familiar to you, since it implements the same functionality as you saw in Exercise 2, but this code has been refactored to be easier to read. Confirm that the diagrams are correct and match your understanding of the code - do you spot any mistakes?

### Code review - Feedback assistance

When your code is ready, it will be time for getting feedback from other developers. Before you do that, save some time and get some initial feedback from AI on improving your code.

#### 1. "First pass review" prompt

Get a quick, structured overview of potential improvements before asking colleagues for a full review.

```prompt
Review this code and give me concise feedback organised by category:

<paste code here/path to files>

Categories to cover:
- Readability
- Performance
- Security
- Best practices
- Potential bugs

For each issue, give a brief pointer (one sentence max) rather than a detailed explanation.
```

#### Exercise 7

Getting feedback is useful before you submit your assignments, but to check out how it can look, choose a previous assignment you've submitted and ask AI for feedback on it.

Review the suggestions - which ones are useful, and which ones would you ignore?

### Agent mode

So far we've been using AI in "chat" or "edit" mode - you ask a question or request a change, and AI responds. Agent mode is different: you give AI a goal, and it autonomously plans and executes multiple steps to achieve it, including running commands, creating files, talking with external systems and making decisions along the way.

**Chat/Edit mode**: You control each step, AI assists one task at a time.

**Agent mode**: AI takes control, executing multiple steps autonomously to reach a goal.

GitHub Copilot has an agent mode you can try - instead of asking for a single edit, you can ask it to complete a larger task and it will work through the steps itself.

{% hint style="warning" %}
**Before using agent mode:**
- Agent mode uses significantly more of your AI usage credits than chat mode.
- Remember our [AI usage guidelines](https://program.hackyourfuture.dk/guidelines/ai-usage) - for HYF assignments and projects, you must understand and be able to explain any code you submit. Therefore, Agent mode is something more suitable to practice using outside of your HYF work.
{% endhint %}

#### Exercise 8

Try this small task in both modes to see the difference:

**Task**: Add a `titleCase` function to [Exercise 8](session-materials/exercise8.js) that converts a sentence to title case (e.g., "hello world" → "Hello World").

1. **Chat mode**: Ask Copilot "How would I add a titleCase function to this file?" - notice it explains what to do, but you have to make the changes yourself.

2. **Agent mode**: Ask Copilot "Add a titleCase function to exercise8.js that converts sentences to title case, and add an example in main()" - watch as it reads the file, adds the function, updates the exports, and modifies main() autonomously.

Notice how agent mode takes multiple steps without asking for permission at each stage. This is powerful but means you need to carefully review everything it produces.

## AI in the workplace

### Ethics, legal and risk considerations

Building on what you learned in the foundation module, here are some specific risks to consider as a developer:

**Confidential code and data**
Never paste proprietary code, API keys, or customer data into AI tools - it may be stored or used for training. Example: pasting a database query containing real user emails.

**Intellectual property**
Code you paste into AI tools may belong to your employer. Check your company's policy before sharing any work code with external AI services.

**License compliance**
AI may generate code copied from open source projects with licenses that are incompatible with your project. Always verify you have the right to use generated code.

**Security vulnerabilities**
AI-generated code can contain security flaws like SQL injection or missing input validation. Review all generated code with the same scrutiny as code from any other source.

**Accuracy and hallucinations**
AI can confidently produce incorrect code, non-existent APIs, or outdated syntax. Always test and verify - don't assume it works because it looks right.

**Company policies**
Many employers have specific rules about which AI tools are approved for use with work code. Check before using any AI tool on company projects.

### The future of AI in development

We don't know the future for sure, that's what makes it exciting. There are some trends that we are seeing:

#### Trends

1. Less time typing code
2. The gap between junior and mid-level narrows
3. More cross-functional roles
4. Understanding the "why"
5. Super fast industry shifts

#### Tips and final takeaways

1. Stay in the loop of AI developments
   - Follow key organisations in the space (OpenAI, Anthropic, Microsoft/Github, Google/Gemini)
   - Join in conversations with other developers online and offline to see what they're experiencing
   - Follow AI related news

2. Learn and practice with new tools/features
   - Try out new AI features and capabilities as they are released
   - Use AI tools in your real projects to practice

3. Integrate useful parts into your own workflow
   - Whatever you find works well, integrate it into your own daily working practices
