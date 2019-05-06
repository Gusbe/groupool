let express = require('express');
let router = express.Router();
let zxcvbn = require('zxcvbn');
let bcrypt = require('bcrypt');
let passport = require('passport');
let ensureLogin = require('connect-ensure-login');

// Routes
const groupsRouter = require('./groups.js');
const groupRouter = require('./group.js');
const roundRouter = require('./round.js');
router.use('/groups', groupsRouter);
router.use('/group', groupRouter);
router.use('/round', roundRouter);

// Models
const User = require('./../models/user.js');

// GET '/login'
router.get('/login', (req, res, next) => {
  res.render('login');
});

// POST '/'
router.post('/login', passport.authenticate('local', {
  successRedirect: '/groups',
  failureRedirect: '/login',
  passReqToCallback: true
}));

// GET '/signup'
router.get('/signup', (req, res, next) => {
  if (req.user) {
    res.redirect('/groups');
  } else {
    res.render('signup');
  }
});

// POST '/signup'
router.post('/signup', (req, res, next) => {
  if (req.user) {
    res.redirect('/groups');
  } else {
    const { username, password } = req.body;

    if (username === '' || password === '') {
      res.render('signup', { errorMessage: 'Write your username and password' });
    } else {
      User.findOne({ username: username })
        .then((user) => {
          if (!user) {
            // if (zxcvbn(password).score < 3) {
            if (true) { // Change to make the score validation works
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

// TEST '/secret'
router.get('/secret', ensureLogin.ensureLoggedIn(), (req, res) => {
  console.log('i am in secret');
});

// GET '/'
router.get('/', (req, res, next) => {
  res.redirect('/login');
});

module.exports = router;
