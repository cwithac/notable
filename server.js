const express     = require('express');
const app         = express();
const mongoose    = require('mongoose');
const bodyParser  = require('body-parser');
const session     = require('express-session');
const env         = require('dotenv').config()
const port        = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
app.use(session({
          secret: process.env.SECRET,
          resave: false,
          saveUninitialized: false
}));

const notesController = require('./controllers/notes.js');
app.use('/notes', notesController);

const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);

app.listen(port, () => {
  console.log('notable app is listening on ' + port);
});

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/note';
mongoose.connect(mongoUri);

mongoose.connection.once('open', () => {
  console.log('notable app is connected to mongo');
})
