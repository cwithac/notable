const mongoose = require('mongoose');
const Notes = require('./notes.js');

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  display: String,
  notesTaken: []
});

const Users = mongoose.model('User', userSchema);

module.exports = Users;
