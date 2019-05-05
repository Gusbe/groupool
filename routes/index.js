let express = require('express');
let router = express.Router();

const groups = require('./groups.js');
const group = require('./group.js');
const round = require('./round.js');

// GET '/'
router.get('/', (req, res, next) => {
  // Will show the login form

});

// POST '/'
router.post('/', (req, res, next) => {
  // Check if the user and passport is correct and starts the session.

});

// GET '/signup'
router.get('/signup', (req, res, next) => {
  // Renders the signup page. Redirects to /groups if user is logged.

});

// POST '/signup'
router.post('/signup', (req, res, next) => {
  // Validate unique email and required content. Redirects to /groups if user is logged.

});

// GET '/logout'
router.get('/logout', (req, res, next) => {
  // Close the session. Redirect to login page
});

module.exports = router;
