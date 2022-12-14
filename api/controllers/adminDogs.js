const { dogModel } = require("../models");


const adminDogs = async (req, res) => {
    try {
      const dogs = await dogModel.find({});
      res.status(201).send(dogs);
    } catch (e) {
      res.status(404).send({ error: e });
    }
  };
  
  const adminDogsId = async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
  
      const dogs = await dogModel.findOne({ _id: id });
      res.json(dogs);
    } catch (e) {
      res.status(404).send({ error: e });
    }
  };

  const adminCreateDog = async (req, res) => {
    try {
      const { body } = req;
      const dog = await dogModel.create(body);
      res.status(200).send({data: dog});
    } catch (error) {
      res.status(404).send({ error });
    }
  };


  const adminUpdateDog = async (req, res) => {
    try {
   
      const {
        body: { id, ...data },
      } = req;

      const dog = await dogModel.findByIdAndUpdate({ _id: id }, data, {
        returnOriginal: false,
      });
  
      res.json({ data: dog });
    } catch (e) {
      res.status(404).send({ error: e });
    }
  };
  
  const adminDeleteDog = async (req, res) => {
    try {
      // const { body } = req;
      const id = req.params.id;
  
      // console.log(id);
  
      const dogDelete = await dogModel.findByIdAndUpdate({_id: id}, {isDeleted: true}, {
        returnOriginal: false,
      });
      // await modeldog.deleteOne({ _id: id });
      res.status(201).send(dogDelete);
    } catch (e) {
      res.status(404).send(e);
    }
  };




  module.exports = { 
    adminDogs,
    adminDogsId,
    adminCreateDog,
    adminUpdateDog,
    adminDeleteDog,
  };
  