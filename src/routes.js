const routes = require("express").Router();

routes.get("/", (req, res) => {
  return res.status(200).send({ message: "API Ok" });
});

routes.get("/count", (req, res) => {
  const a = 0;
  let b = 0;
  let c = a + b;
  c = a + b + 3; 
  return res.status(200).send({ message: "API Ok", count: c });
});

module.exports = routes;
