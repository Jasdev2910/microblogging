const express = require("express");
const router = express.Router();
const {
  getUserPosts,
  getAllPosts,
  createPost,
} = require("../controllers/postsController");

// get all posts
router.get("/", getUserPosts);

// create a new post
router.post("/", createPost);

// get post of specific user
router.get("/:userId", getAllPosts);

module.exports = router;
