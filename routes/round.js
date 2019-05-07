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
  const { game0, game1, game2, game3, game4, game5, game6, game7, game8, game9 } = req.body;

  if (game0 === undefined || game1 === undefined || game2 === undefined || game3 === undefined || game4 === undefined ||
      game5 === undefined || game6 === undefined || game7 === undefined || game8 === undefined || game9 === undefined) {
    res.render('round/round-next', { errorMessage: 'You have to make a prediction in all games' });
  } else {
    Games.find({ round: roundNumber }).sort({ date: 1 })
      .then((game) => {

      })
      .catch((err) => console.log(err));
  }
});

module.exports = router;
