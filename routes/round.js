let express = require('express');
let router = express.Router();
let ensureLogin = require('connect-ensure-login');

// Models
const User = require('./../models/user.js');
const Games = require('./../models/game.js');
const Bet = require('./../models/bet.js');

// GET '/round/:id'
router.get('/:roundNumber/:groupId', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  const { roundNumber, groupId } = req.params;
  Games.find({ round: roundNumber }).sort({ date: 1 })
    .then((game) => {
      const dateRound = game[0].date;
      if (dateRound <= Date.now()) {
        // Passed round
        console.log('I AM IN PAST ROUND');

        // User information
        let users = [
          {
            username: 'Axel',
            score: 9
          },
          {
            username: 'Damian',
            score: 8
          },
          {
            username: 'Uros',
            score: 6
          },
          {
            username: 'Gus',
            score: 5
          },
          {
            username: 'Gabriel',
            score: 3
          },
          {
            username: 'Jack',
            score: 1
          }
        ];

        res.render('round/round-past', { gameList: game, userList: users });

        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* // We are getting ALL the users, not the users that belongs to one concrete group
        User.find()
          .then((users) => {
            users.forEach((element, i) => {
              Bet.find({ $and: [{ user: element._id }, { round: roundNumber }] })
                .then((bets) => {
                  if (!bets.length) {
                    console.log('We dont have bets');
                  } else {
                    let score = 0;
                    bets.forEach((singleBet) => {
                      console.log('XXXXXXXXXX' + singleBet.round);
                      // Take in game the result
                      Games.findById(singleBet.game)
                        .then((singleGame) => {
                          // console.log('singleGame: ' + singleGame);
                        })
                        .catch((err) => console.log(err));
                      // console.log('singleBet.result: ' + singleBet.result);
                    });
                    // singleBet.result = users[i].result;
                  }
                })
                .catch((err) => console.log(err));

              element._id = bets[i].result;
            });

            res.render('round/round-past', { gameList: game, userList: users });
          })
          .catch((err) => console.log(err)); */
      } else {
        Bet.findOne({ $and: [{ user: req.user._id }, { game: game[0]._id }] }).countDocuments()
          .then((counter) => {
            if (counter === 0) {
              res.render('round/round-next', { gameList: game, roundNumber, groupId });
            } else {
              Bet.find({ $and: [{ user: req.user._id }, { round: roundNumber }] })
                .then((bets) => {
                  game.forEach((element, i) => {
                    element.result = bets[i].result;
                  });
                  res.render('round/round-next-sended', { gameList: game, roundNumber, groupId });
                })
                .catch();
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
          Bet.create({ user: req.user._id, result: arrayResults[i], game: match._id, round: roundNumber })
            .then(() => {
              res.redirect(`/round/${roundNumber}`);
            })
            .catch((err) => console.log(err));
        });
      })
      .catch((err) => console.log(err));
  }
});

module.exports = router;
