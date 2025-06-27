// routes/postRoutes.js

const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');
const { authMiddleware, authorizeRoles } = require('../middleware/auth.middleware');

// Private: create a post
router.post('/post', authMiddleware, postController.createPost);

// Admin-only: list all posts
router.get('/all-posts', authMiddleware, authorizeRoles('admin'), postController.getAllPosts);

module.exports = router;
