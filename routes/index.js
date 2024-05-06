const express = require("express");
const postsRouter = require("./posts");
const usersRouter = require("./users");
const mainRouter = express.Router();

mainRouter.use("/posts", postsRouter);
mainRouter.use("/users", usersRouter);

module.exports = mainRouter;
