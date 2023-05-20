const express = require('express');
const router = express.Router();

const actorsController = require('../controllers/actorsController');

router.get('/', actorsController.getAllActors, (req, res) =>{
    // #swagger.tags = ['Actors']
    // #swagger.description = 'Endpoint to get all actors.'
    
});

router.get('/:id', actorsController.getSingleActor, (req, res) =>{
    // #swagger.tags = ['Actors']
    // #swagger.description = 'Endpoint to get a single actor.'
     // #swagger.parameters['id'] = { description: 'Actor ID.' }

});

router.post('/', actorsController.addActor, (req, res) =>{
    // #swagger.tags = ['Actors']
    // #swagger.description = 'Endpoint to add a new actor.'
});

module.exports = router;