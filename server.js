const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('public'));

const quotesController = require('./controllers/quotes.js');
app.use('/quotes', quotesController);

app.listen(3000, () => {
  console.log('quotable app is listening');
});

mongoose.connect('mongodb://localhost:27017/quote');
mongoose.connection.once('open', () => {
  console.log('quotable app is connected to mongo');
})
