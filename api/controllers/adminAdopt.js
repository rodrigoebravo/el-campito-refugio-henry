const { adoptionsModel } = require("../models");

const adminAdoptions = async (req, res) => {
    try {
      const adoptions = await adoptionsModel.find({}).populate("user dog", {
        name: 1,
        _id: 1
      });
      
      const adoptionsMapping = adoptions.map(adoption => {

        let { user, dog, ...data } = adoption.toObject();
        return {
          user: user.name,
          dog: dog.name,
          idUSer: user._id,
          idDog: dog._id,
          ...data
        }
      }); 

      res.status(201).send(adoptionsMapping);

    } catch (e) {
      res.status(404).send({ error: e });
    }
  };
  
  const adminAdoptionsId = async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
  
      const adoption = await adoptionsModel.findById({ _id: id }).populate("user dog", {
        name: 1,
        _id: 1
      });

      const { user, dog, ...data } = adoption.toObject(); 

      res.json({
        user: user.name,
        dog: dog.name,
        idUSer: user._id,
        idDog: dog._id,
        ...data
      });

    } catch (e) {
      res.status(404).send({ error: e });
    }
  };
  
  const adminUpdateAdoption = async (req, res) => {
    try {
      const {
        params: { id },
        body,
      } = req;
  
      const adop = await adoptionsModel.findByIdAndUpdate({ _id: id }, body, {
        returnOriginal: false,
      });
  
      res.json({ data: adop });
      
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