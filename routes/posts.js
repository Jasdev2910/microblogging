const express = require("express");
const router = express.Router();

// get all posts
router.get("/", (req, res) => {
  console.log("Fetching all posts");
  res.send("Fetching all posts");
});

// create a new post
router.post("/", (req, res) => {
  console.log("Creating a post");
  res.send("Creating a post");
});

// get post of specific user
router.get("/:userId", (req, res) => {
  console.log("getting all post of a specific user");
  res.send("getting all post of a specific user");
});

module.exports = router;
