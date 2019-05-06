let express = require('express');
let router = express.Router();
let ensureLogin = require('connect-ensure-login');

// Models
const User = require('./../models/user.js');
const Group = require('./../models/group.js');

// GET '/group/create'
router.get('/create', ensureLogin.ensureLoggedIn(), (req, res) => {
  res.render('group/group-create');
});

// POST '/group/create'
router.post('/create', ensureLogin.ensureLoggedIn(), (req, res) => {
  const groupName = req.body.groupname;

  if (groupName === '') {
    res.render('group/group-create', { errorMessage: 'Write the group name' });
  } else {
    User.findOne({ username: req.user.username })
      .then((user) => {
        if (!user) {
          res.render('group/group-create', { errorMessage: 'Problem with the user generating the group' });
        } else {
          const pin = Math.floor(Math.random() * 99999);
          Group.create({ name: groupName, pin: pin, users: user })
            .then(() => {
              let data = {
                groupName: groupName,
                pin: pin
              };
              res.render('group/group-create', { data });
            })
            .catch((err) => console.log(err));
        }
      });
  }
});

// GET '/group/join'
router.get('/join', (req, res, next) => {
  // renders the join group form.
});

// POST '/group/join'
router.post('/join', (req, res, next) => {
  // Validates that the field is correct. Redirect to the group page.
});

// GET '/group/:id'
router.get('/:id', (req, res, next) => {
  // Renders the group page from id.
  // next to 404 if services:id is not valid or doesnt'exist.
});

// GET '/group'
router.get('/', (req, res, next) => {
  // Renders the groups page
});

module.exports = router;
