const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  content: String,
  user: []
});

const Notes = mongoose.model('Note', noteSchema);

module.exports = Notes;
