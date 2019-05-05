let express = require('express');
let router = express.Router();

// GET '/group/:id'
router.get('/:id', (req, res, next) => {
  // Renders the group page from id.
  // next to 404 if services:id is not valid or doesnt'exist.
});

module.exports = router;
