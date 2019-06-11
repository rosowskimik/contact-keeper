const express = require('express');
const router = express.Router();

// @route						GET api/contacts
// @desc						Get all user contacts
// @access					Private
router.get('/', (req, res) => {
  res.send('All user contacts');
});

// @route						POST api/contacts
// @desc						Add new contact
// @access					Private
router.post('/', (req, res) => {
  res.send('Create a new contact');
});

// @route						PUT api/contacts:id
// @desc						Update a contact
// @access					Private
router.put('/:id', (req, res) => {
  res.send('Updated contact');
});

// @route						DELETE api/contacts:id
// @desc						Delete a contact
// @access					Private
router.delete('/:id', (req, res) => {
  res.send('Contact deleted');
});

module.exports = router;
