const express = require('express');
const asyncHandler = require('express-async-handler');

const User = require('../models/user');
const Message = require('../models/message');

const router = express.Router();

// Display home page according the user status: new, member, club member, admin.
exports.index = asyncHandler(async (req, res, next) => {
  const [users, messages] = await Promise.all([
    User.find().exec(),
    Message.find().populate('user').exec(),
  ]);
  console.log(users, messages);
  res.render('index', {
    title: 'Odin Members Only Clup',
  });
});
