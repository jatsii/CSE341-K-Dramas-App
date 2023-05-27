const { check } = require('express-validator');
 
exports.actorsValidation = [
    check('actorName', 'Name is requied').not().isEmpty(),
    check('characterName', 'Character Name is requied').not().isEmpty(),
    check('birthdate', 'Birthdate is requied').not().isEmpty(),
    check('nationality', 'Nationality is requied').not().isEmpty()
]
 
exports.dramasValidation = [
    check('title', 'Title is requied').not().isEmpty(),
    check('content', 'Content is requied').not().isEmpty(),
    check('chapters', 'Chapters are requied').not().isEmpty(),
    check('date', 'Date is requied').not().isEmpty(),
    check('genre', 'Genre is requied').not().isEmpty(),
    check('producer', 'Producer is requied').not().isEmpty(),
    check('writer', 'Writer is requied').not().isEmpty()
]