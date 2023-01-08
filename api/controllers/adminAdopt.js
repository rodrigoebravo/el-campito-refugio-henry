const { adoptionsModel, usersModel, dogModel } = require("../models");
const mongoose = require("mongoose"); 

const adminAdoptions = async (req, res) => {
    try {
      const adoptions = await adoptionsModel.find({isDelete: false}).populate("user dog");
      
      const adoptionsMapping = adoptions
      .filter((a)=> a.user && a.dog )
      .map(adop=> { 

        adop.date = adop.date?.toJSON().slice(0, 10);

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
      
      adoption.date = adoption.date?.toJSON().slice(0, 10);
     
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
        body: { birthday, email, phone, nameUser,  ...dataAdop },
      } = req;

      console.log(dataAdop); console.log(email); console.log(id); 
  
      // let aux = JSON.parse(`ObjectId(${id})`); console.log(aux);

      await adoptionsModel.findByIdAndUpdate({ _id: id }, dataAdop, {
        returnOriginal: false,
      });       

      const users1 = await usersModel.findOne({ email }) || undefined; console.log("linea 80",users1);
      
      if ( users1 !== undefined )  {
        let roles = users1.roles;
        if ( dataAdop.isPending === false ) roles.concat('adoptante');
        if ( !birthday )  birthday = users1.birthday; 
        if ( !phone )  phone = users1.phone; 
        if ( !nameUser ) nameUser = users1.name;

        await usersModel.findByIdAndUpdate({ _id: users1._id },
          { name: nameUser, birthday, phone, roles }
      ); 
      }
  
      const adoption = await adoptionsModel.findById({ _id: id }).populate("user dog", {
        name: 1,
        _id: 1
      }); console.log(adoption);

      const { user, dog, ...data } = adoption.toObject();         

      console.log(user); console.log(dog);
      
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