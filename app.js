const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const newMsgRouter = require("./routes/newMessageRouter");
const app = express();

const assetsPath = path.join(__dirname, "public");

app.use(express.static(assetsPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/new", newMsgRouter);
app.use("/", indexRouter);

const PORT = 3000;

app.listen(PORT);
