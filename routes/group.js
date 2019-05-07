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
router.get('/join', ensureLogin.ensureLoggedIn(), (req, res) => {
  res.render('group/group-join');
});

// POST '/group/join'
router.post('/join', ensureLogin.ensureLoggedIn(), (req, res) => {
  const { groupName, pin } = req.body;

  if (groupName === '' || pin === '') {
    res.render('group/group-join', { errorMessage: 'Write the group name and the pin' });
  } else {
    Group.findOneAndUpdate({ $and: [ { name: groupName }, { pin: pin }, { users: { $ne: req.user._id } } ] }, { $push: { users: req.user._id } })
      .then((group) => {
        res.redirect(`/group/${group._id}`);
      })
      .catch((err) => console.log(err));
  }
});

// GET '/group/:id'
router.get('/:id', ensureLogin.ensureLoggedIn(), (req, res) => {
  Group.findOne({ $and: [ { _id: req.params.id }, { users: req.user._id } ] })
    .then((group) => {
      // WILL PRINT THE GLOBAL RANKING AND THE BUTTONS TO BET OR GO TO PASSED ROUND
    })
    .catch((err) => console.log(err));
});

// GET '/group'
router.get('/', ensureLogin.ensureLoggedIn(), (req, res) => {
  Group.find({ users: req.user._id })
    .then((groups) => {
      // Groups is an array of objects "group" (name, _id)
    })
    .catch((err) => console.log(err));
});

module.exports = router;
