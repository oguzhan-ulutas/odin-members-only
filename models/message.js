const mongoose = require('mongoose');

const { Schema } = mongoose;

const MessageSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String },
  date: { type: Date, default: Date.now },
});

// Virtual for message url
MessageSchema.virtual('url').get(function () {
  return `/catalog/message/${this._id}`;
});

module.exports = mongoose.model('Message', MessageSchema);
