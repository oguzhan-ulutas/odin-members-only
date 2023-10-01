#! /usr/bin/env node

console.log(
  'This script populates some test users and messages to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"',
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const mongoose = require('mongoose');

const User = require('./models/user');
const Message = require('./models/message');

const users = [];
const messages = [
  'A meme of a cat sitting on a keyboard, with the caption When youre trying to work but your cat is demanding attention.',
  "Sending you all the positive vibes in the world! You've got this!",
  'Whichever method you choose, it is important to validate email addresses in your Mongoose schema to ensure that you are storing valid data.',
];

mongoose.set('strictQuery', false);

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log('Debug: About to connect');
  await mongoose.connect(mongoDB);
  console.log('Debug: Should be connected?');
  await createUsers();
  await createMessages();
  console.log('Debug: Closing mongoose');
  mongoose.connection.close();
}

async function userCreate(index, firstName, lastName, userName, password, membershipStatus) {
  const user = new User({
    firstName,
    lastName,
    userName,
    password,
    membershipStatus,
  });
  await user.save();
  users[index] = user;
  console.log(`Added user: ${userName}`);
}

async function messageCreate(user, message, date) {
  const messageInstance = new Message({ user, message, date });

  await messageInstance.save();
  console.log(`Added message: ${message}, from: ${user}`);
}

async function createUsers() {
  console.log('Adding users');
  await Promise.all([
    userCreate(0, 'Jenny', 'Gonzales', 'jenny@gmail.com', '1234', 'Member'),
    userCreate(1, 'John', 'Smith', 'john@yahoo.com', '1234', 'Club Member'),
    userCreate(2, 'Ali', 'Bayrak', 'ali@hotmail.com', '1234', 'Admin'),
  ]);
}

async function createMessages() {
  console.log('Adding messages');
  await Promise.all([
    messageCreate(users[0], messages[0], '1973-06-06'),
    messageCreate(users[1], messages[1], '1971-06-06'),
    messageCreate(users[2], messages[2], '1979-06-06'),
  ]);
}
