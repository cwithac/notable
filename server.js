const express     = require('express');
const app         = express();
const mongoose    = require('mongoose');
const bodyParser  = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('public'));

const notesController = require('./controllers/notes.js');
app.use('/notes', notesController);

app.listen(3000, () => {
  console.log('notable app is listening');
});

mongoose.connect('mongodb://localhost:27017/note');
mongoose.connection.once('open', () => {
  console.log('notable app is connected to mongo');
})
