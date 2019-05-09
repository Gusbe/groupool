let express = require('express');
let router = express.Router();
let ensureLogin = require('connect-ensure-login');

// Models
const User = require('./../models/user.js');
const Games = require('./../models/game.js');
const Bet = require('./../models/bet.js');

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

// GET '/round/:id'
router.get('/:roundNumber/:groupId', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  const { roundNumber, groupId } = req.params;
  Games.find({ round: roundNumber }).sort({ date: 1 })
    .then((game) => {
      const dateRound = game[0].date;
      let score = 0;
      // if (dateRound <= Date.now()) {
      //   // Passed round
      //   game.forEach((singleGame, i) => {
      //     Bet.find({ $and: [{ user: req.user._id }, { round: roundNumber }, { game: singleGame._id }] })
      //       .then((singleBet) => {
      //         singleGame.resultBet = singleBet[0].result;
      //         if (singleBet[0].result === singleGame.result) {
      //           singleGame.win = 1;
      //           score++;
      //           console.log('score: ' + score);
      //         }
      //       })
      //       .then(() => {
      //         res.render('round/round-past', { gameList: game, userList: users, roundNumber, score });
      //       })
      //       .catch((err) => console.log(err));
      //   });
      //
      if (dateRound >= Date.now()) {
        // Passed round
        let betPromises = game.map((singleGame, i) => {
          return Bet.find({ $and: [{ user: req.user._id }, { round: roundNumber }, { game: singleGame._id }] })
            .then((singleBet) => {
              singleGame.resultBet = singleBet[0].result;
              if (singleBet[0].result === singleGame.result) {
                singleGame.win = 1;
                score++;
              }
            })
            .catch((err) => console.log(err));
        });

        Promise.all(betPromises)
          .then((betPromisesResolved) => console.log('score before render', score))
          .then(() => res.render('round/round-past', { gameList: game, userList: users, roundNumber, score }));
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
router.post('/:roundNumber/:groupId', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  const { roundNumber, groupId } = req.params;
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
              res.redirect(`/round/${roundNumber}/${groupId}`);
            })
            .catch((err) => console.log(err));
        });
      })
      .catch((err) => console.log(err));
  }
});

module.exports = router;
