const express = require('express');
const router = express.Router();

const actorsController = require('../controllers/actorsController');

router.get('/', actorsController.getAllActors);

router.get('/:id', actorsController.getSingleActor);

router.post('/', actorsController.addActor);

module.exports = router;