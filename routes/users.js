const express = require("express");
const router = express.Router();

// create user
router.post("/", (req, res) => {
  console.log("user created successfully");
  res.send("user created successfully");
});

// user profile
router.get("/:userId", (req, res) => {
  console.log("Fetching details for user");
  res.send("Fetching details for user");
});

// update user profile
router.put("/:userId", (req, res) => {
  console.log("Updating user");
  res.send("User Updated");
});

//  get followers of specific user
router.get("/:userId/followers", (req, res) => {
  console.log("Getting all the followers");
  res.send("Getting all the followers");
});

module.exports = router;
