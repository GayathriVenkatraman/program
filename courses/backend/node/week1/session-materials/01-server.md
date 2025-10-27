# Server

Create a new directory inside "node" in your `hyf-assignment` repo:

```shell
mkdir nodejs-week1
code nodejs-week1 # to open the folder in VS Code
```


---

Initialize and install:

```shell
npm init -y
npm pkg set type="module"
npm install express
echo node_modules/ >> .gitignore
```

Create a file named `app.js` and use the following as a starting point for this exercise:

```js
import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello Class!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
```

---

```shell
npm pkg set scripts.dev="node --watch app.js"
npm run dev
```

Go to <http://localhost:3000> in your browser to verify that the server started.
