const express = require('express');
const router = express.Router();

const dramasController = require('../controllers/dramasController');

//const validation = require('../validation');
//const {dramasValidation, validate} = require('../validation');
//const { validationResult } = require('express-validator');
const { authSchemaDrama } = require('../helpers/validation_schema')

router.get('/', dramasController.getAllDramas, (req, res) =>{
    // #swagger.tags = ['Dramas']
    // #swagger.description = 'Endpoint to get all dramas.'
});

router.get('/:id', dramasController.getSingleDrama, (req, res) =>{
    // #swagger.tags = ['Dramas']
    // #swagger.description = 'Endpoint to get a single drama.'
     // #swagger.parameters['id'] = { description: 'Drama ID.' }

});
router.post('/', dramasController.addDrama, async(req, res, next) =>{
    // #swagger.tags = ['Dramas']
    // #swagger.description = 'Endpoint to add a new drama.'
    /*let errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors.array());
        return res.json({errors: errors.array()});
    }*/
    const result = await authSchemaDrama.validateAsync(req.body)
    console.log(result)
});

router.put('/:id', dramasController.updateDrama, (req, res) =>{
    // #swagger.tags = ['Dramas']
    // #swagger.description = 'Endpoint to update a Drama.'
     // #swagger.parameters['id'] = { description: 'Drama ID.' }
     /*let errors = validationResult(req);
     if(!errors.isEmpty()){
         console.log(errors.array());
         return res.json({errors: errors.array()});
     }*/
});

router.delete('/:id', dramasController.deleteDrama, (req, res) =>{
    // #swagger.tags = ['Dramas']
    // #swagger.description = 'Endpoint to delete a Drama.'
     // #swagger.parameters['id'] = { description: 'Drama ID.' }
});

module.exports = router;