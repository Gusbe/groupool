let express = require('express');
let router = express.Router();
let ensureLogin = require('connect-ensure-login');

// GET '/group'
router.get('/', (req, res, next) => {
  // Renders the groups page
});

// GET '/group/create'
router.get('/create', ensureLogin.ensureLoggedIn(), (req, res) => {
  res.render('groups/group-create');
});

// POST '/group/create'
router.post('/create', (req, res, next) => {
  // Validates that the field is correct. Renders the group information page.
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

module.exports = router;
