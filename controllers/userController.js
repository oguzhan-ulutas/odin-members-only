const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');

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
    bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
      if (err) {
        return next(err);
      }
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: hashedPassword,
        membershipStatus: 'Member',
      });
      const result = await user.save();
      res.redirect('/catalog/login');
    });
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

// Handle become a club member get
exports.clubMemberGet = asyncHandler(async (req, res, next) => {
  res.render('clubMemberForm', { user: req.user });
});

// Handle become a club member post
exports.clubMemberPost = asyncHandler(async (req, res, next) => {
  if (req.body.firstName === req.user.firstName) {
    const user = await User.findById(req.user._id);
    user.membershipStatus = 'Club Member';
    await user.save();
    res.redirect('/');
  } else {
    res.render('clubMemberForm', {
      user: req.user,
      error: 'Your name is wrong!!! You should learn your name to become a club member',
    });
  }
});

// Handle become an admin get
exports.adminGet = asyncHandler(async (req, res, next) => {
  res.render('adminForm', { user: req.user });
});

// Handle become an admin get
exports.adminPost = asyncHandler(async (req, res, next) => {
  if (req.body.lastName === req.user.lastName) {
    const user = await User.findById(req.user._id);
    user.membershipStatus = 'Admin';
    await user.save();
    res.redirect('/');
  } else {
    res.render('adminForm', {
      user: req.user,
      error: 'Your last name is wrong!!! You should learn your last name to became an admin',
    });
  }
});
