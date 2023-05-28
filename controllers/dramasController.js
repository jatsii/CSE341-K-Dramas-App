const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllDramas = async (req, res, next) => {
  const result = await mongodb.getDb().db('K-Dramas').collection('Dramas').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingleDrama = async (req, res, next) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid drama id to delete the drama.');
  }
  const dramaId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db("K-Dramas")
    .collection('Dramas')
    .find({ _id: dramaId });
  result.toArray().then((lists) => {
    
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};
const addDrama = async (req, res) => {
  const create = {
      title: req.body.title,
      content: req.body.content,
      chapters: req.body.chapters,
      date: req.body.date,
      genre: req.body.genre,
      producer: req.body.producer,
      writer: req.body.writer
    };

  const result = await mongodb.getDb().db("K-Dramas").collection('Dramas').insertOne(create);
  if (result.acknowledged) {
    // #swagger.responses[201] = { description: 'The k-Drama was added successfully' }
      res.status(201).json(result);
  } else {
    // #swagger.responses[500] = { description: 'Faling adding the K-Drama' }
      res.status(500).json(result.error || 'Cannot add the K-Drama.');
  }
};

const updateDrama = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid drama id to delete the drama.');
  }
  const dramaId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const drama = {
    title: req.body.title,
    content: req.body.content,
    chapters: req.body.chapters,
    date: req.body.date,
    genre: req.body.genre,
    producer: req.body.producer,
    writer: req.body.writer
  };
  const result = await mongodb.getDb().db("K-Dramas").collection('Dramas').replaceOne({ _id: dramaId }, drama);
  
  console.log(result);
  
  if (result.modifiedCount > 0) {
    // #swagger.responses[204] = { description: 'The drama was updated successfully' }
    res.status(204).send();
  } else {
    // #swagger.responses[500] = { description: 'Faling updating the drama' }
    res.status(500).json(result.error || 'Cannot update the drama.');
  }
};

const deleteDrama = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid drama id to delete the drama.');
  }
  const dramaId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db("K-Dramas").collection('Dramas').deleteOne({ _id: dramaId }, true);
  
  console.log(result);
  if (result.deletedCount > 0) {
    // #swagger.responses[204] = { description: 'The drama was deleted successfully' }
    res.status(204).send();
  } else {
    // #swagger.responses[500] = { description: 'Faling deleting the drama' }
    res.status(500).json(result.error || 'Cannot delete the contact.');
  }
};


module.exports = {getAllDramas, getSingleDrama, addDrama, updateDrama, deleteDrama};