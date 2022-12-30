const { adoptionsModel, usersModel, dogModel } = require("../models");

const adminAdoptions = async (req, res) => {
    try {
      const adoptions = await adoptionsModel.find({isDelete: false}).populate("user dog");
      
      const adoptionsMapping = adoptions
      .filter((a)=> a.user && a.dog )
      .map(adop=> { 

        const { user, dog, ...data } = adop.toObject(); 

        return {
          user: user._id,
          nameUser: user.name,
          email: user.email,
          phone: user.phone,
          birthday: user.birthday,
          dog: dog._id,
          nameDog: dog.name,
          ...data
        };
      }); 

      res.status(201).send(adoptionsMapping);

      // res.status(201).send(adoptions);

    } catch (e) {
      res.status(404).send({ error: e });
    }
  };
  
  const adminAdoptionsId = async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
  
      const adoption = await adoptionsModel.findById({ _id: id }).populate("user dog");      
     
      const { user, dog, ...data } = adoption.toObject(); 

      res.json({
        user: user._id,
        nameUser: user.name,
        email: user.email,
        phone: user.phone,
        birthday: user.birthday,
        dog: dog._id,
        nameDog: dog.name,
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
        body: { birthday, email, phone,  ...dataAdop },
      } = req;
  
      await adoptionsModel.findByIdAndUpdate({ _id: id }, dataAdop, {
        returnOriginal: false,
      });       

      const users1 = await usersModel.findOne({ email })
      
      let roles = users1.roles;

      if ( dataAdop.isPending === false ) roles.concat('adoptante');

      await usersModel.findByIdAndUpdate({ _id: user._id },
        { birthday, phone, email, roles }
      );   
  
      const adoption = await adoptionsModel.findById({ _id: id }).populate("user dog", {
        name: 1,
        _id: 1
      });

      const { user, dog, ...data } = adoption.toObject();    
     

       
      
      res.json({
        user: user._id,
        nameUser: user.name,
        email,
        phone,
        birthday,
        dog: dog._id,
        nameDog: dog.name,
        ...data
      });
      
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