let express = require('express');
let router = express.Router();
let ensureLogin = require('connect-ensure-login');

// Models
const User = require('./../models/user.js');
const Games = require('./../models/game.js');
const Bet = require('./../models/bet.js');

// GET '/round/:id'
router.get('/:roundNumber', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  const { roundNumber } = req.params;
  Games.find({ round: roundNumber }).sort({ date: 1 })
    .then((game) => {
      const dateRound = game[0].date;
      if (dateRound <= Date.now()) {
        // Passed round
        res.render('round/round-past');
      } else {
        console.log('user: ' + req.user._id);
        console.log('game[0]._id: ' + game[0]._id);
        Bet.findOne({ $and: [{ user: req.user._id }, { game: game[0]._id }] }).countDocuments()
          .then((counter) => {
            if (counter === 0) {
              res.render('round/round-next', { gameList: game, roundNumber });
            } else {
              res.render('round/round-next-sended', { gameList: game, roundNumber });
            }
          })
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log(err));
});

// POST '/round/:id'
router.post('/:roundNumber', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  const { roundNumber } = req.params;
  const { game0, game1, game2, game3, game4, game5, game6, game7, game8, game9 } = req.body;

  if (game0 === undefined || game1 === undefined || game2 === undefined || game3 === undefined || game4 === undefined ||
      game5 === undefined || game6 === undefined || game7 === undefined || game8 === undefined || game9 === undefined) {
    res.redirect(`/round/${roundNumber}`);
  } else {
    Games.find({ round: roundNumber }).sort({ date: 1 })
      .then((game) => {
        let arrayResults = [game0, game1, game2, game3, game4, game5, game6, game7, game8, game9];

        game.forEach((match, i) => {
          Bet.create({ user: req.user._id, result: arrayResults[i], game: match._id })
            .then(() => {

            })
            .catch((err) => console.log(err));
        });
      })
      .catch((err) => console.log(err));
  }
});

module.exports = router;
