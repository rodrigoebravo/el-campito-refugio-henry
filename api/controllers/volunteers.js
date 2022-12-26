const { volunteersModel, usersModel } = require("../models");

const CreateVolunteer = async (req, res) => {
  try {
    const {
      body: { name, age, birthday, email, phone, pass, image, ...data }
    } = req;

    //buscar usuario
    const userDb = await usersModel.findOne({ email });


    if (!userDb) {

      const newUser = await usersModel.create({
        name,
        age,
        birthday,
        email,
        phone,
        pass,
        image,
      });
     

      const newVolunteer = await volunteersModel.create({
        user: newUser._id,
        ...data
      })

      newUser.volunteer = newVolunteer._id; 
      await newUser.save(); 

      const volunteerCreated = await volunteersModel.findById({_id: newVolunteer._id}).populate("user"); 

      const {
        user: { _id, ...basicData },
        ...dataVolun
      } = volunteerCreated.toObject();

      res.status(201).send(
        { idUser: _id, ...basicData, ...dataVolun }); 

    }else{

      const newVolunteer = await volunteersModel.create({
        user: userDb._id,
        ...data
      })

      userDb.volunteer = newVolunteer._id; 
      await userDb.save(); 

      const volunteerCreated = await volunteersModel.findById({_id: newVolunteer._id}).populate("user",{  contribution: 0,
        adoptions: 0,
        isDelete: 0,
        volunteer: 0,
        pass: 0,
      });
  
        const {
          user: { _id, ...basicData },
          ...dataVolun
        } = volunteerCreated.toObject();

      res.status(201).send(
        { idUser: _id, ...basicData, ...dataVolun }); 
    }
  } catch (e) {
    res.status(404).send({ error: e });
  }
};



module.exports = {
  CreateVolunteer,
};
