const { contributionsModel } = require("../models");

const adminContrib = async (req, res) => {
    try {
      const contributions = await contributionsModel.find({});
      res.status(201).send(contributions);
    } catch (e) {
      res.status(404).send({ error: e });
    }
  };
  
  const adminContribId = async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
  
      const contributions = await contributionsModel.findById({ _id: id });
      res.json(contributions);
    } catch (e) {
      res.status(404).send({ error: e });
    }
  };
  
  const adminUpdateContrib = async (req, res) => {
    try {
      // const { body } = req;
      const {
        body: { id, ...data },
      } = req;
  
      // console.log(id);
      // console.log(data);
  
      const contribution = await contributionsModel.findByIdAndUpdate({ _id: id }, data, {
        returnOriginal: false,
      });
  
      res.json({ data: contribution });
    } catch (e) {
      res.status(404).send({ error: e });
    }
  };
  
  const adminCreateContrib = async (req, res) => {
    try {
      const { body } = req;
      const contribution = await contributionsModel.create(body);
      res.status(200).send({data: contribution});
    } catch (error) {
      res.status(404).send({ error });
    }
  };
  
  const adminDeleteContrib = async (req, res) => {
    try {
      // const { body } = req;
      const id = req.params.id;
  
      console.log(id);
  
      const contributionDelete = await contributionsModel.findByIdAndUpdate({_id: id}, {isDelete: true}, {
        returnOriginal: false,
      });
      res.status(201).send(contributionDelete);
    } catch (e) {
      res.status(404).send(e);
    }
  };


  module.exports = {
    adminCreateContrib,
    adminDeleteContrib,
    adminContrib,
    adminUpdateContrib,
    adminContribId,
  };