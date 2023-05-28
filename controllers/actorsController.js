const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllActors = async (req, res, next) => {
  const result = await mongodb.getDb().db('K-Dramas').collection('Actors').find();
  result.toArray().then((lists) => {
    /*if (err) {
      res.status(400).json({ message: err });
    }*/
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingleActor = async (req, res, next) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid actor id to find the actor.');
  }
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db("K-Dramas")
    .collection('Actors')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    if (err) {
      res.status(400).json({ message: err });
    }
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
      // #swagger.responses[201] = { description: 'The actor was added successfully' }
        res.status(201).json(result);
    } else {
      // #swagger.responses[500] = { description: 'Faling adding the actor' }
        res.status(500).json(result.error || 'Cannot add the actor.');
    }
};

const updateActor = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid actor id to update the actor.');
  }
  const actorId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const actor = {
    actorName: req.body.actorName,
    characterName: req.body.characterName,
    birthdate: req.body.birthdate,
    nationality: req.body.nationality
  };
  const result = await mongodb.getDb().db("K-Dramas").collection('Actors').replaceOne({ _id: actorId }, actor);
  
  console.log(result);
  
  if (result.modifiedCount > 0) {
    // #swagger.responses[204] = { description: 'The actor was updated successfully' }
    res.status(204).send();
  } else {
    // #swagger.responses[500] = { description: 'Faling updating the actor' }
    res.status(500).json(result.error || 'Cannot update the actor.');
  }
};

const deleteActor = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid actor id to delete the actor.');
  }
  const actorId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db("K-Dramas").collection('Actors').deleteOne({ _id: actorId }, true);
  
  console.log(result);
  if (result.deletedCount > 0) {
    // #swagger.responses[204] = { description: 'The actor was deleted successfully' }
    res.status(204).send();
  } else {
    // #swagger.responses[500] = { description: 'Faling deleting the actor' }
    res.status(500).json(result.error || 'Cannot delete the actor.');
  }
};


module.exports = {getAllActors, getSingleActor, addActor, updateActor, deleteActor };