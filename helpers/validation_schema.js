const Joi = require('@hapi/joi')

const authSchemaActor = Joi.object({
    actorName: Joi.string().required(),
    characterName: Joi.string().required(),
    birthdate: Joi.string().required(),
    nationality: Joi.string().required(),
})

const authSchemaDrama = Joi.object({
    title: Joi.string().required(),
        content: Joi.string().required(),
        chapters: Joi.string().required(),
        date: Joi.string().required(),
        genre: Joi.string().required(),
        producer: Joi.string().required(),
        writer: Joi.string().required(),
})


module.exports = {
    authSchemaActor,
    authSchemaDrama,
}