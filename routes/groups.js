let express = require('express');
let router = express.Router();

// GET '/groups'
router.get('/', (req, res, next) => {
  // Renders the groups page
});

// GET '/groups/create'
router.get('/create', (req, res, next) => {
  // renders the create group form.
});

// POST '/groups/create'
router.post('/create', (req, res, next) => {
  // Validates that the field is correct. Renders the group information page.
});

// GET '/groups/join'
router.get('/join', (req, res, next) => {
  // renders the join group form.
});

// POST '/groups/join'
router.post('/join', (req, res, next) => {
  // Validates that the field is correct. Redirect to the group page.
});

module.exports = router;
