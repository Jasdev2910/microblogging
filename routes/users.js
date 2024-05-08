const express = require("express");
const router = express.Router();
const {
  getUser,
  updateUser,
  getUserFollowers,
  createUser,
} = require("../controllers/usersController");
// create user
router.post("/", createUser);

// user profile
router.get("/:userId", getUser);

// update user profile
router.put("/:userId", updateUser);

//  get followers of specific user
router.get("/:userId/followers", getUserFollowers);

module.exports = router;
