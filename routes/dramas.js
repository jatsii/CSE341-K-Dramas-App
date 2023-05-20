const express = require('express');
const router = express.Router();

const dramasController = require('../controllers/dramasController');

router.get('/', dramasController.getAllDramas);

router.get('/:id', dramasController.getSingleDrama);

module.exports = router;