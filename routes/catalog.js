const express = require('express');

const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');
const messageController = require('../controllers/messageController');
const message = require('../models/message');

const router = express.Router();

// Get catalog home page
router.get('/', homeController.index);

// USER ROUTES
// Login get page
router.get('/login', userController.loginGet);

// Post req. for login page
// router.post('/login', userConroller.loginPost);

// Signup get page
router.get('/signup', userController.signupGet);

// Post req. for login page
router.post('/signup', userController.signupPost);

// User log out
router.get('/user/:id/logout', userController.logoutGet);

// Become a club member get
router.get('/user/:id/club-member', userController.clubMemberGet);

// Become a club member post
router.post('/user/:id/club-member', userController.clubMemberPost);

// Become an admin get
router.get('/user/:id/admin', userController.adminGet);

// Become an admin post
router.post('/user/:id/admin', userController.adminPost);

// MESSAGE ROUTES
// Add new message
router.post('/message', messageController.addNewMessage);

// Handle delete a message
router.post('/message/:id', messageController.deleteMessage);

module.exports = router;
