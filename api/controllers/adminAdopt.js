const { adoptionsModel } = require("../models");

const adminAdoptions = async (req, res) => {
    try {
      const adoptions = await adoptionsModel.find({});
      res.status(201).send(adoptions);
    } catch (e) {
      res.status(404).send({ error: e });
    }
  };
  
  const adminAdoptionsId = async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
  
      const adoptions = await adoptionsModel.findById({ _id: id });
      res.json(adoptions);
    } catch (e) {
      res.status(404).send({ error: e });
    }
  };
  
  const adminUpdateAdoption = async (req, res) => {
    try {
      // const { body } = req;
      const {
        body: { id, ...data },
      } = req;
  
      // console.log(id);
      // console.log(data);
  
      const user = await adoptionsModel.findByIdAndUpdate({ _id: id }, data, {
        returnOriginal: false,
      });
  
      res.json({ data: user });
    } catch (e) {
      res.status(404).send({ error: e });
    }
  };
  
   
  const adminDeleteAdoption = async (req, res) => {
    try {
      // const { body } = req;
      const id = req.params.id;
  
      console.log(id);
  
      const userDelete = await adoptionsModel.findByIdAndUpdate({_id: id}, {isDelete: true}, {
        returnOriginal: false,
      });
      // await modelAdoption.deleteOne({ _id: id });
      res.status(201).send(userDelete);
    } catch (e) {
      res.status(404).send(e);
    }
  };


  module.exports = {
    adminDeleteAdoption,
    adminAdoptions,
    adminUpdateAdoption,
    adminAdoptionsId,
  };