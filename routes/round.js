let express = require('express');
let router = express.Router();

// Models
const User = require('./../models/user.js');
const Group = require('./../models/group.js');
const Games = require('./../models/game.js');

// GET '/round/:id'
router.get('/:roundNumber', (req, res, next) => {
  const { roundNumber } = req.params;
  Games.find({ round: roundNumber }).sort({ date: 1 })
    .then((game) => {
      const dateRound = game[0].date;
      if (dateRound <= Date.now()) {
        // Passed round
        res.render('round/round-past');
      } else {
        res.render('round/round-next');
      }
    })
    .catch((err) => console.log(err));
});

// POST '/round/:id'
router.post('/:id', (req, res, next) => {
  // validate that all the matchs have a bet and save the settings of the bet.
});

module.exports = router;
