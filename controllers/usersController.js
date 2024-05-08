const User = require("../models/Users");
const Follower = require("../models/Followers");

exports.createUser = async (req, res) => {
  try {
    const { name, email, bio } = req.body;
    let user = new User({ name, email, bio });
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    if (error.code === 11000) {
      // Handle duplicate key error
      return res.status(400).send("Email already exists.");
    }
    res.status(500).send(error.message);
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).send("User not found");
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { name, email, bio } = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { name, email, bio },
      { new: true }
    );
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getUserFollowers = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const followers = await Follower.find({ userId: req.params.userId })
      .populate("followerId")
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    res.send(followers.map((f) => f.followerId));
  } catch (error) {
    res.status(500).send(error.message);
  }
};
