const asyncHandler = require("express-async-handler");
const messages = require("../db");

const createMessage = asyncHandler(async (req, res) => {
  const { messageText, authorName } = req.body;
  messages.push({
    text: messageText,
    user: authorName,
    added: new Date(),
  });

  res.redirect("/");
});

module.exports = { createMessage };
