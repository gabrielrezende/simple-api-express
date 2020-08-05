const routes = require("express").Router();

routes.get("/", (req, res) => {
  return res.status(200).send({'message':'API Ok'});
});

module.exports = routes;
