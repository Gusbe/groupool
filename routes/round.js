let express = require('express');
let router = express.Router();

// GET '/round/:id'
router.get('/:id', (req, res, next) => {
  // if the round has results then render the round results page.
  // if there isn't results and the user doesn't have a bet then render the bet page.
  // if there isn't results and the user has a bet then render the see bet page.
});

// POST '/round/:id'
router.post('/:id', (req, res, next) => {
  // validate that all the matchs have a bet and save the settings of the bet.
});

module.exports = router;
