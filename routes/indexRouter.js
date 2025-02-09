const { Router } = require("express");
const { createMessage } = require("../controllers/indexController");
const messages = require("../db");
const indexRouter = Router();

indexRouter.get("", (req, res) => {
  res.render("index", { title: "Mini MessegeBoard", messages: messages });
});

indexRouter.post("/new", createMessage);

module.exports = indexRouter;
