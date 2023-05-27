const express = require('express');
const router = express.Router();

const dramasController = require('../controllers/dramasController');

const createError = require('http-errors');
const bodyParser = require('body-parser');
const cors = require('cors');
const { dramasValidation, validate } = require('../validation');

router.use(express.json());
 
router.use(bodyParser.json());
 
router.use(bodyParser.urlencoded({
    extended: true
}));
 
router.use(cors());

router.get('/', dramasController.getAllDramas, (req, res) =>{
    // #swagger.tags = ['Dramas']
    // #swagger.description = 'Endpoint to get all dramas.'
});

router.get('/:id', dramasController.getSingleDrama, (req, res) =>{
    // #swagger.tags = ['Dramas']
    // #swagger.description = 'Endpoint to get a single drama.'
     // #swagger.parameters['id'] = { description: 'Drama ID.' }

});
router.post('/', dramasController.addDrama, dramasValidation(), validate, (req, res) =>{
    // #swagger.tags = ['Dramas']
    // #swagger.description = 'Endpoint to add a new drama.'
});

router.put('/:id', dramasController.updateDrama, (req, res) =>{
    // #swagger.tags = ['Dramas']
    // #swagger.description = 'Endpoint to update a Drama.'
     // #swagger.parameters['id'] = { description: 'Drama ID.' }
});

router.delete('/:id', dramasController.deleteDrama, (req, res) =>{
    // #swagger.tags = ['Dramas']
    // #swagger.description = 'Endpoint to delete a Drama.'
     // #swagger.parameters['id'] = { description: 'Drama ID.' }
});

module.exports = router;