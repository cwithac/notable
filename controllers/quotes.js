const express = require('express');
const router = express.Router();
const Quotes = require('../models/quotes.js');

router.get('/', (req, res) => {
  Quotes.find({}, (err, foundQuotes) => {
    res.json(foundQuotes);
  });
});

router.post('/', (req, res) => {
  Quotes.create(req.body, (err, createdQuote) => {
    res.json(createdQuote);
  });
});

router.delete('/:id', (req, res) => {
  Quotes.findByIdAndRemove(req.params.id, (err, deletedQuote) => {
    res.json(deletedQuote);
  });
});

module.exports = router;
