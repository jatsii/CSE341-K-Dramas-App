const express = require('express');
const router = express.Router();

const actorsController = require('../controllers/actorsController');
const validation = require('../validation');
//const {actorsValidation} = require('../validation');

router.get('/', actorsController.getAllActors, (req, res) =>{
    // #swagger.tags = ['Actors']
    // #swagger.description = 'Endpoint to get all actors.'
    
});

router.get('/:id', actorsController.getSingleActor, (req, res) =>{
    // #swagger.tags = ['Actors']
    // #swagger.description = 'Endpoint to get a single actor.'
     // #swagger.parameters['id'] = { description: 'Actor ID.' }

});

router.post('/',validation.addActor, actorsController.addActor,   (req, res) =>{
    // #swagger.tags = ['Actors']
    // #swagger.description = 'Endpoint to add a new actor.'
    /*let errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors.array());
        return res.json({errors: errors.array()});
    }*/
});

router.put('/:id', validation.addActor, actorsController.updateActor, (req, res) =>{
    // #swagger.tags = ['Actors']
    // #swagger.description = 'Endpoint to update an actor.'
     // #swagger.parameters['id'] = { description: 'Actor ID.' }
    /* let errors = validationResult(req);
     if(!errors.isEmpty()){
         console.log(errors.array());
         return res.json({errors: errors.array()});
     }*/
});

router.delete('/:id', actorsController.deleteActor, (req, res) =>{
    // #swagger.tags = ['Actors']
    // #swagger.description = 'Endpoint to delete an actor.'
     // #swagger.parameters['id'] = { description: 'Actor ID.' }
});
module.exports = router;