const { adoptionsModel, usersModel, dogModel } = require("../models");

/**
 *
 * @param {*} req
 * @param {*} res
 */
const adoptionPost = async (req, res) => {

  try {
    const {
     body:{
      name,
      age,
      email,
      phone,
      pass,
      idDog,
      ...dataAdopter
     }
    } = req;

    // console.log(idDog)
    const userDb = await usersModel.findOne({ email });

    if (!userDb) {

      const newUser = await usersModel.create({
        name,
        age,
        email,
        phone,
        pass,
      });

      const newCertificate = await adoptionsModel.create({
        user: newUser._id,
        dog: idDog,
        ...dataAdopter
      }); 

      newUser.adoptions = [...newUser.adoptions, newCertificate._id]; 
      await newUser.save(); 

      const dogAdoption = await dogModel.findById({_id: idDog}); 

      dogAdoption.adopters = [...dogAdoption.adopters, newUser._id]; 
      await dogAdoption.save();

      res.status(201).send({msg: "You have successfully registered"});

    } else {

      const newCertificate = await adoptionsModel.create({
        user: userDb._id,
        dog: idDog,
        ...dataAdopter
      }); 

      userDb.adoptions = [...userDb.adoptions ,newCertificate._id]; 
      await userDb.save(); 

      const dogAdoption = await dogModel.findById({_id: idDog}); 

      dogAdoption.adopters = [...dogAdoption.adopters, userDb._id]; 
      await dogAdoption.save();

      res.status(201).send({msg: "You have successfully registered"}); 

    }
  } catch (error) {
    res.status(404).send({ error });
  }
};

module.exports = {
  adoptionPost,
};
