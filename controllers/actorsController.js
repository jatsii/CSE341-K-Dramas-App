const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllActors = async (req, res, next) => {
  const result = await mongodb.getDb().db('K-Dramas').collection('Actors').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingleActor = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db("K-Dramas")
    .collection('Actors')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const addActor = async (req, res) => {
    const create = {
        actorName: req.body.actorName,
        characterName: req.body.characterName,
        birthdate: req.body.birthdate,
        nationality: req.body.nationality
      };

    const result = await mongodb.getDb().db("K-Dramas").collection('Actors').insertOne(create);
    if (result.acknowledged) {
      // #swagger.responses[201] = { description: 'The contact was created successfully' }
        res.status(201).json(result);
    } else {
      // #swagger.responses[500] = { description: 'Faling creating the contact' }
        res.status(500).json(result.error || 'Cannot add the actor.');
    }
};

module.exports = {getAllActors, getSingleActor, addActor };