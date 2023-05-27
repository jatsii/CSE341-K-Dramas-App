const {body, validationResult } = require('express-validator');
 
const actorsValidation = () => {
    return [
        body('actorName', 'Name is requied').not().isEmpty(),
        body('characterName', 'Character Name is requied').not().isEmpty(),
        body('birthdate', 'Birthdate is requied').not().isEmpty(),
        body('nationality', 'Nationality is requied').not().isEmpty()
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
  }