const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: { type: String, required: true, maxLength: 100 },
  lastName: { type: String, required: true, maxLength: 100 },
  userName: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: { type: String, required: true },
  membershipStatus: {
    type: String,
    required: true,
    enum: ['Member', 'Club Member', 'Admin'],
    default: 'Member',
  },
});

// Virtual for full name.
UserSchema.virtual('fullName').get(function () {
  let fullName = '';
  if (this.firstName && this.lastName) {
    fullName = `${this.lastName}, ${this.firstName}`;
  }

  return fullName;
});

// Virtual for user url
UserSchema.virtual('url').get(function () {
  return `/catalog/user/${this._id}`;
});

module.exports = mongoose.model('User', UserSchema);
