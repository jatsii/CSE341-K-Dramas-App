const express = require('express');
const router = express.Router();

router.use('/dramas', require('./dramas'))
router.use('/actors', require('./actors'))

module.exports = router;