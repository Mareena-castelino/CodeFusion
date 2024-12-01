const express = require('express');
const router = express.Router(); // Use express.Router() to create a new router

// Define your routes
router.get('/', (req, res) => {
  res.send('User list');
});

router.post('/', (req, res) => {
  res.send('Create a user');
});

// Export the router object
module.exports = router;
