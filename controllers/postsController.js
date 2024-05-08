const Post = require("../models/Posts");

exports.getUserPosts = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const posts = await Post.find({ authorId: req.params.userId })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    res.send(posts);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getAllPosts = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const posts = await Post.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    res.send(posts);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createPost = async (req, res) => {
  try {
    const { authorId, title, content } = req.body;
    const newPost = new Post({ authorId, title, content });
    await newPost.save();
    res.status(201).send(newPost);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
