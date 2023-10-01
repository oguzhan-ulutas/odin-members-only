const express = require('express');

const User = require('../models/user');
const Message = require('../models/message');

const router = express.Router();

// Display home page according the user status: new, member, club member, admin.
exports.index = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Site Home Page');
});

// Display log in form on GET
exports.loginGet = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Login GET');
});

// Handle log in on POST
exports.loginPost = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Login Post');
});

// Display sign up form on GET
exports.singupGet = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Sign up GET');
});

// Handle sign up on POST
exports.signupPost = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Sign up Post');
});
