const Post = require('../models/post.model');

exports.createPost = async (req, res) => {
  const { title, body } = req.body;

  const post = new Post({
    title,
    body,
    user: req.user._id
  });

  await post.save();

  req.user.posts.push(post._id);
  await req.user.save();

  res.status(201).json(post);
};

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find().populate('user', 'username email');
  res.json(posts);
};