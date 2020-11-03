const bodyParser = require("body-parser");
const express = require("express");
const controllers = require("./controllers");
const app = express();
const port = 3000;
let counter = 0;

app.use(bodyParser.json());

app.use((req, res, next) => {
  counter += 1;
  console.log(`Request number ${counter}`);
  next();
});

app.get("/", controllers.getCharactersHandler);

app.post("/", controllers.fakeCreateCharacterHandler);

app.get("/health", (req, res) => {
  res.send({ message: "Server is up" });
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
