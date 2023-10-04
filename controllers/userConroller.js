const asyncHandler = require('express-async-handler');

const User = require('../models/user');

// Display log in form on GET
exports.loginGet = asyncHandler(async (req, res, next) => {
  res.render('loginForm');
});

// Handle log in on POST
// exports.loginPost = asyncHandler(async (req, res, next) => {
// });

// Display sign up form on GET
exports.signupGet = asyncHandler(async (req, res, next) => {
  res.render('signupForm');
});

// Handle sign up on POST
exports.signupPost = asyncHandler(async (req, res, next) => {
  try {
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      password: req.body.password,
      membershipStatus: 'Member',
    });
    const result = await user.save();
    res.redirect('/catalog/login');
  } catch (err) {
    next(err);
  }
});

// Handle user log out
exports.logoutGet = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
};
