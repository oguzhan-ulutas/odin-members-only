const asyncHandler = require('express-async-handler');
const User = require('../models/user');

// Display log in form on GET
exports.loginGet = asyncHandler(async (req, res, next) => {
  res.render('loginForm');
});

// Handle log in on POST
exports.loginPost = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Login Post');
});

// Display sign up form on GET
exports.singupGet = asyncHandler(async (req, res, next) => {
  res.render('signupForm');
});

// Handle sign up on POST
exports.signupPost = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Sign up Post');
});
