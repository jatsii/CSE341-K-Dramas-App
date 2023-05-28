const Joi = require('@hapi/joi')

const authSchemaActor = Joi.object({
    actorName: Joi.string().min(4).required(),
    characterName: Joi.string().min(4).required(),
    birthdate: Joi.string().min(4).required(),
    nationality: Joi.string().min(4).required(),
})

const authSchemaDrama = Joi.object({
    title: Joi.string().min(4).required(),
        content: Joi.string().min(4).required(),
        chapters: Joi.string().required(),
        date: Joi.string().min(4).required(),
        genre: Joi.string().min(4).required(),
        producer: Joi.string().min(4).required(),
        writer: Joi.string().min(4).required(),
})


module.exports = {
    authSchemaActor,
    authSchemaDrama,
}