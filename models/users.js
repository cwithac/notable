const mongoose = require('mongoose');
const Notes = require('./notes.js');

const userSchema = mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  display: String
});

const Users = mongoose.model('User', userSchema);

module.exports = Users;
