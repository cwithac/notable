const express     = require('express');
const app         = express();
const mongoose    = require('mongoose');
const bodyParser  = require('body-parser');
const port        = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

const notesController = require('./controllers/notes.js');
app.use('/notes', notesController);

app.listen(port, () => {
  console.log('notable app is listening on ' + port);
});

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/note';
mongoose.connect(mongoUri);

mongoose.connection.once('open', () => {
  console.log('notable app is connected to mongo');
})
