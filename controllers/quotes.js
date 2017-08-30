const express = require('express');
const router = express.Router();
const Quotes = require('../models/quotes.js');

router.get('/', (req, res) => {
  res.send('index');
});

router.post('/', (req, res) => {
  Quotes.create(req.body, (err, createdQuote) => {
    res.json(createdQuote);
  });
});

module.exports = router;
