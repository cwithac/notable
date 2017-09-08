const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  content: String
});

const Notes = mongoose.model('Note', noteSchema);

module.exports = Notes;
