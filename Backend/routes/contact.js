const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const sql = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error('Database insert error:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    res.status(200).json({ message: 'Message received successfully!' });
  });
});

module.exports = router;
