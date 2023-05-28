const express = require('express');
const router = express.Router();

const actorsController = require('../controllers/actorsController');

const schema = require('../helpers/validation_schema');
const middlaware = require('../middleware/validation_middleware');
var bodyParser = require("body-parser"); 
const cors = require('cors'); 

router.use(cors()); 
router.use(bodyParser.json()); 

router.get('/', actorsController.getAllActors, (req, res) =>{
    // #swagger.tags = ['Actors']
    // #swagger.description = 'Endpoint to get all actors.'
    
});

router.get('/:id', actorsController.getSingleActor, (req, res) =>{
    // #swagger.tags = ['Actors']
    // #swagger.description = 'Endpoint to get a single actor.'
     // #swagger.parameters['id'] = { description: 'Actor ID.' }

});

router.post('/', middlaware(schema.authSchemaActor), actorsController.addActor,  (req, res) =>{
    // #swagger.tags = ['Actors']
    // #swagger.description = 'Endpoint to add a new actor.'
  
    res.json(req.body); 
});

router.put('/:id',middlaware(schema.authSchemaActor), actorsController.updateActor, (req, res) =>{
    // #swagger.tags = ['Actors']
    // #swagger.description = 'Endpoint to update an actor.'
     // #swagger.parameters['id'] = { description: 'Actor ID.' }
    
     res.json(req.body); 
});

router.delete('/:id', actorsController.deleteActor, (req, res) =>{
    // #swagger.tags = ['Actors']
    // #swagger.description = 'Endpoint to delete an actor.'
     // #swagger.parameters['id'] = { description: 'Actor ID.' }
});
module.exports = router;