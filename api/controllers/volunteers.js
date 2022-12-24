const { volunteersModel, usersModel } = require("../models");

const CreateVolunteer = async (req, res) => {
  try {
    const {
      body: { name, age, birthday, email, phone, pass, image, ...data }
    } = req;

    //buscar usuario
    const userDb = await usersModel.findOne({ email });


    if (!userDb) {

      let newUser = await usersModel.create({
        name,
        age,
        birthday,
        email,
        phone,
        pass,
        image,
      });
     

      let newVolunteer = await volunteersModel.create({
        user: newUser._id,
        ...data
      })

      newUser.volunteer = newVolunteer._id; 
      await newUser.save(); 

      let volunteerCreated = await volunteersModel.findById({_id: newVolunteer._id}).populate("user"); 

      res.status(201).send(volunteerCreated); 

    }else{

      let newVolunteer = await volunteersModel.create({
        user: userDb._id,
        ...data
      })

      userDb.volunteer = newVolunteer._id; 
      await userDb.save(); 

      let volunteerCreated = await volunteersModel.findById({_id: newVolunteer._id}).populate("user"); 
      res.status(201).send(volunteerCreated); 
    }
  } catch (e) {
    res.status(404).send({ error: e });
  }
};



module.exports = {
  CreateVolunteer,
};
