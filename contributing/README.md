# Contributing

Everyone is welcome to fork/clone the repo and contribute to improving the program.

If you would like to take a more active role in contributing to this program as a volunteer of HYF Denmark, drop an introduction in #mentorroom and a staff member will help onboard you. If you're not already a mentor, sign up your interest at [hackyourfuture.dk/volunteer](https://hackyourfuture.dk/volunteer).

## How to contribute

### 1. Sharing feedback

After taking part in a Sunday session, we strongly encourage mentors to evaluate how it went using the feedback form bookmarked in #mentorroom on Slack.

### 2. Suggestions and improvements

If you come across issues or ideas for improvements along the way, please create a pull request (or a [GitHub issue](https://github.com/HackYourFuture-CPH/program/issues), if you're not sure how to implement it) and share in #mentorroom for visibility and feedback.

You are welcome to browse the list of [open issues](https://github.com/HackYourFuture-CPH/program/issues) as well, and pick any up that you think you can contribute to. All help is appreciated!

### 3. Questions, bigger ideas and more

If you're unsure about something in the program, have an idea for a bigger improvement, new module or something else, start a conversation in #mentorroom as a first step for getting answers and feedback from other mentors and staff members.

## How permissions work

Permissions are managed through GitHub teams, their roles on this repo, and branch rules.

- _HYF Staff_ members have the admin role (to do things like changing repo settings, inviting new contributors).
- Members of the _Curriculum Crew_ team on GitHub have the write role (to do things like cloning, pushing branches, approving PRs - any volunteer is welcome here!).
- One approval by anyone in _Curriculum Crew_ or _HYF Staff_ are required on a PR before merging is allowed.
- Merging to Main can be performed by any _HYF Staff_ member.

## Setting up and using your local environment

This project is a collection of structured README files. To maintain consistency and quality, we use a linter and suggest some recommended editor extensions.

### 1. Install dependencies

First, make sure you have [Node.js](https://nodejs.org/) installed.

Then, install the project dependencies using:

```bash
npm ci
```

This ensures a clean and reproducible setup based on the `package-lock.json`.

### 2. Set up your editor (optional but recommended)

If you are using [Visual Studio Code](https://code.visualstudio.com/), we have a list of recommended extensions in `.vscode/extensions.json`. When you open the project in VSCode, it will automatically suggest installing them to improve your development experience.

These extensions help with linting and maintaining the project’s standards.

### 3. Make your changes

Edit or create README files as needed. Follow the existing formatting and writing style.

### 4. Run the linter

Before committing your changes, make sure everything passes the linter.

To check for linting issues:

```bash
./lint
```

To automatically fix some issues:

```bash
./lint --fix
```

> [!TIP]
> On **Windows** you cannot run bash scripts natively. In this case, open the folder in your Git Bash shell and run the commands from in there.
