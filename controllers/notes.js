const express     = require('express');
const router      = express.Router();
const Notes       = require('../models/notes.js');

router.get('/', (req, res) => {
  Notes.find({}, (err, foundNotes) => {
    res.json(foundNotes);
  });
});

router.post('/', (req, res) => {
  Notes.create(req.body, (err, createdNote) => {
    res.json(createdNote);
  });
});

router.delete('/:id', (req, res) => {
  Notes.findByIdAndRemove(req.params.id, (err, deletedNote) => {
    res.json(deletedNote);
  });
});

router.put('/:id', (req, res) => {
  Notes.findByIdAndUpdate(req.params.id, req.body, { new:true }, (err, updatedNote) => {
    res.json(updatedNote)
  });
});

module.exports = router;
