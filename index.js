const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to Sum calculator...");
});

app.get("/sum/:a/:b", (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  res.send(`Sum of ${a} and ${b} is ${a + b}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
