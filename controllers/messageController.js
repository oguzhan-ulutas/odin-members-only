const asyncHandler = require('express-async-handler');

const Message = require('../models/message');

// Handle new message
exports.addNewMessage = asyncHandler(async (req, res, next) => {
  try {
    const message = new Message({
      user: req.body.userId,
      message: req.body.message,
      date: new Date(),
    });
    const result = await message.save();
    res.redirect('/');
  } catch (err) {
    next(err);
  }
});

// Handle delete a message
exports.deleteMessage = asyncHandler(async (req, res, next) => {
  try {
    await Message.findByIdAndRemove(req.body.messageId);
    res.redirect('/');
  } catch (err) {
    next(err);
  }
});
