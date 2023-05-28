const express = require('express');
const router = express.Router();

const dramasController = require('../controllers/dramasController');

const schema = require('../helpers/validation_schema');
const middlaware = require('../middleware/validation_middleware');
var bodyParser = require("body-parser"); 
const cors = require('cors'); 

router.use(cors()); 
router.use(bodyParser.json()); 

router.get('/', dramasController.getAllDramas, (req, res) =>{
    // #swagger.tags = ['Dramas']
    // #swagger.description = 'Endpoint to get all dramas.'
});

router.get('/:id', dramasController.getSingleDrama, (req, res) =>{
    // #swagger.tags = ['Dramas']
    // #swagger.description = 'Endpoint to get a single drama.'
     // #swagger.parameters['id'] = { description: 'Drama ID.' }

});
router.post('/', middlaware(schema.authSchemaDrama), dramasController.addDrama,(req, res) =>{
    // #swagger.tags = ['Dramas']
    // #swagger.description = 'Endpoint to add a new drama.'
 
    res.json(req.body); 
});

router.put('/:id',middlaware(schema.authSchemaDrama), dramasController.updateDrama, (req, res) =>{
    // #swagger.tags = ['Dramas']
    // #swagger.description = 'Endpoint to update a Drama.'
     // #swagger.parameters['id'] = { description: 'Drama ID.' }
     res.json(req.body); 
});

router.delete('/:id', dramasController.deleteDrama, (req, res) =>{
    // #swagger.tags = ['Dramas']
    // #swagger.description = 'Endpoint to delete a Drama.'
     // #swagger.parameters['id'] = { description: 'Drama ID.' }
});

module.exports = router;