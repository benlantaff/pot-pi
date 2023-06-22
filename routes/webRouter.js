const express = require('express');
const router = express.Router();
const webController = require('../controllers/webController');

// Index
router.route('/').get(webController.renderHomePage);

module.exports = router;
