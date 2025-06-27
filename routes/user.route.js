const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { authMiddleware, authorizeRoles } = require('../middleware/auth.middleware');

// Private route: any logged-in user can get their own profile
router.get('/profile', authMiddleware, userController.getProfile);

// Admin-only route: list all users
router.get('/all-users', authMiddleware, authorizeRoles('admin'), userController.getAllUsers);

module.exports = router;
