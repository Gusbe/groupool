let express = require('express');
let router = express.Router();
let zxcvbn = require('zxcvbn');
let bcrypt = require('bcrypt');
let passport = require('passport');
let ensureLogin = require('connect-ensure-login');

// Routes
const groupRouter = require('./group.js');
const roundRouter = require('./round.js');
router.use('/group', groupRouter);
router.use('/round', roundRouter);

// Models
const User = require('./../models/user.js');

// GET '/login'
router.get('/login', (req, res, next) => {
  if (req.user) {
    res.redirect('/group');
  } else {
    res.render('login');
  }
});

// POST '/login'
router.post('/login', passport.authenticate('local', {
  successRedirect: '/group',
  failureRedirect: '/login',
  passReqToCallback: true
}));

// GET '/signup'
router.get('/signup', (req, res, next) => {
  if (req.user) {
    res.redirect('/group');
  } else {
    res.render('signup');
  }
});

// POST '/signup'
router.post('/signup', (req, res, next) => {
  if (req.user) {
    res.redirect('/group');
  } else {
    const { username, password } = req.body;

    if (username === '' || password === '') {
      res.render('signup', { errorMessage: 'Write your username and password' });
    } else {
      User.findOne({ username: username })
        .then((user) => {
          if (!user) {
            // if (zxcvbn(password).score < 3) {
            if (false) { // Change to make the score validation works
              res.render('signup', { errorMessage: 'The password is too weak' });
            } else {
              const salt = bcrypt.genSaltSync(10);
              const hashedPassword = bcrypt.hashSync(password, salt);

              User.create({ username: username, password: hashedPassword })
                .then(() => res.redirect('/'))
                .catch((err) => console.log(err));
            }
          } else {
            res.render('signup', { errorMessage: 'The username is already taken' });
          }
        });
    }
  }
});

// GET '/logout'
router.get('/logout', (req, res, next) => {
  // Close the session. Redirect to login page
});

// GET '/'
router.get('/', (req, res, next) => {
  res.redirect('/login');
});

module.exports = router;
