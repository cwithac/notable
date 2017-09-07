const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  note: String
});

const Notes = mongoose.model('Note', noteSchema);

module.exports = Notes;
