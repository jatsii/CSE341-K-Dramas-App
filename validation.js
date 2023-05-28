const validator = require('./validate');

const addActor = (req, res, next) => {
    const validationActor = {
        actorName: 'require|string',
        characterName: 'require|string',
        birthdate: 'require|string',
        nationality: 'require|string'
    };
    validator(req.body, validationActor, {}, (err, status) => {
        if(!status) {
            res.status(412).send({
                success: false,
                message: 'Actor Validation failed',
                data: err
        });
    } else {
        next();
    }
    });
};

const addDrama = (req, res, next) => {
    const validationDrama = {
        title: 'require|string',
        content: 'require|string',
        chapters: 'require|string',
        date: 'require|string',
        genre: 'require|string',
        producer: 'require|string',
        writer: 'require|string'
    };
    validator(req.body, validationDrama, {}, (err, status) => {
        if(!status) {
            res.status(412).send({
                success: false,
                message: 'Drama Validation failed',
                data: err
        });
    } else {
        next();
    }
    });
};

module.exports ={
    addActor,
    addDrama
};
/*
const {body, validationResult } = require('express-validator');
 
const actorsValidation = () => {
    return [
        body('actorName')    .trim().not().isEmpty().withMessage('The actor name is required'),
        body('characterName').trim().not().isEmpty().withMessage('The character name is required'),
        body('birthdate')    .trim().not().isEmpty().withMessage('The birthdate is required'),
        body('nationality')  .trim().not().isEmpty().withMessage('The nationaliry is required')
    ]
}
 
const dramasValidation = () => {
    return [
        body('title')   .trim().not().isEmpty().withMessage('The actor name is required'),
        body('content') .trim().not().isEmpty().withMessage('The actor name is required'),
        body('chapters').trim().not().isEmpty().withMessage('The actor name is required'),
        body('date')    .trim().not().isEmpty().withMessage('The actor name is required'),
        body('genre')   .trim().not().isEmpty().withMessage('The actor name is required'),
        body('producer').trim().not().isEmpty().withMessage('The actor name is required'),
        body('writer')  .trim().not().isEmpty().withMessage('The actor name is required')
    ]
}

const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
  
    return res.status(422).json({
      errors: extractedErrors,
    })
  }
  
  module.exports = {
    dramasValidation,
    actorsValidation,
    validate
  }*/