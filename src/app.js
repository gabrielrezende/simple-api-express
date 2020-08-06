require('dotenv').config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});
const express = require("express");
const semUso = undefined;

class AppController {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
  }

  teste() {
    for (let i = 0; i < 100; i++) {
      console.log(i);
      for (let j = 0; j < 10; j++) {
        console.log(j);
      }
    }
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new AppController().express;
