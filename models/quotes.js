const mongoose = require('mongoose');

const quoteSchema = mongoose.Schema({
  quote: String,
  author: String,
  book: String,
  character: String
});

const Quotes = mongoose.model('Quote', quoteSchema);

module.exports = Quotes;
