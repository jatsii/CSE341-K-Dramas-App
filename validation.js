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

/*const {body, validationResult } = require('express-validator');
 
const actorsValidation = () => {
    return [
        body('actorName').not().isEmpty(),
        body('characterName').not().isEmpty(),
        body('birthdate').not().isEmpty(),
        body('nationality').not().isEmpty(),
    ]
}
 
const dramasValidation = () => {
    return [
        body('title', 'Title is requied').not().isEmpty(),
        body('content', 'Content is requied').not().isEmpty(),
        body('chapters', 'Chapters are requied').not().isEmpty(),
        body('date', 'Date is requied').not().isEmpty(),
        body('genre', 'Genre is requied').not().isEmpty(),
        body('producer', 'Producer is requied').not().isEmpty(),
        body('writer', 'Writer is requied').not().isEmpty()
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
    validate,
  }*/