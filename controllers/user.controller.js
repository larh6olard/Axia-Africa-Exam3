const User = require('../models/user.model');

exports.getProfile = async (req, res) => {
  const user = await req.user.populate('profile posts');
  res.json(user);
};

exports.getAllUsers = async (req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
};

exports.updateProfile = async (req, res) => {
  const { username, email } = req.body;
  const user = await User.findByIdAndUpdate(
    req.user._id,
    { username, email },
    { new: true }
  ).populate('profile posts');
  
  res.json(user);
};