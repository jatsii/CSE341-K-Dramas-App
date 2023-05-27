const express = require('express');
const router = express.Router();

const actorsController = require('../controllers/actorsController');

const createError = require('http-errors');
const bodyParser = require('body-parser');
const cors = require('cors');
const { actorsValidation, validate } = require('../validation');

router.use(express.json());
 
router.use(bodyParser.json());
 
router.use(bodyParser.urlencoded({
    extended: true
}));
 
router.use(cors());

router.get('/', actorsController.getAllActors, (req, res) =>{
    // #swagger.tags = ['Actors']
    // #swagger.description = 'Endpoint to get all actors.'
    
});

router.get('/:id', actorsController.getSingleActor, (req, res) =>{
    // #swagger.tags = ['Actors']
    // #swagger.description = 'Endpoint to get a single actor.'
     // #swagger.parameters['id'] = { description: 'Actor ID.' }

});

router.post('/', actorsController.addActor, actorsValidation(), validate, (req, res) =>{
    // #swagger.tags = ['Actors']
    // #swagger.description = 'Endpoint to add a new actor.'
});

router.put('/:id', actorsController.updateActor, (req, res) =>{
    // #swagger.tags = ['Actors']
    // #swagger.description = 'Endpoint to update an actor.'
     // #swagger.parameters['id'] = { description: 'Actor ID.' }
});

router.delete('/:id', actorsController.deleteActor, (req, res) =>{
    // #swagger.tags = ['Actors']
    // #swagger.description = 'Endpoint to delete an actor.'
     // #swagger.parameters['id'] = { description: 'Actor ID.' }
});
module.exports = router;