const express = require('express');
const asyncHandler = require('express-async-handler');

const User = require('../models/user');
const Message = require('../models/message');

const router = express.Router();

// Display home page according the user status: new, member, club member, admin.
exports.index = asyncHandler(async (req, res, next) => {
  const messages = await Message.find().populate('user').exec();

  res.render('index', {
    title: 'Odin Members Only Club',
    user: req.user,
    messages,
  });
});
