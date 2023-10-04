const express = require('express');

const homeController = require('../controllers/homeController');
const userConroller = require('../controllers/userConroller');
const messageController = require('../controllers/messageConroller');

const router = express.Router();

// Get catalog home page
router.get('/', homeController.index);

// Login get page
router.get('/login', userConroller.loginGet);

// Post req. for login page
// router.post('/login', userConroller.loginPost);

// Signup get page
router.get('/signup', userConroller.signupGet);

// Post req. for login page
router.post('/signup', userConroller.signupPost);

module.exports = router;
