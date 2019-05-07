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
        console.log('roundNumber: ' + roundNumber);
        res.render('round/round-next', { gameList: game, roundNumber });
      }
    })
    .catch((err) => console.log(err));
});

// POST '/round/:id'
router.post('/:roundNumber', (req, res, next) => {
  const { roundNumber } = req.params;
  console.log(req.body);
  const { game0, game1, game2, game3, game4, game5, game6, game7, game8, game9 } = req.body;

  Games.find({ round: roundNumber }).sort({ date: 1 })
    .then((game) => {
    })
    .catch((err) => console.log(err));
});

module.exports = router;
