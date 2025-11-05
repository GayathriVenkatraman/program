import express from "express";
const app = express();

app.use((req, _res, next) => {
  console.log(req.headers["accept-language"]);
  const isFromDenmark = req.headers["accept-language"].includes("da");
  console.log(isFromDenmark);
  req.isFromDenmark = isFromDenmark;

  next();
});

app.listen(3000, function () {
  console.log(`> Ready on http://localhost:3000`);
});
