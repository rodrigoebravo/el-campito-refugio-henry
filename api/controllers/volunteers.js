const { volunteersModel, usersModel } = require("../models");

const CreateVolunteer = async (req, res) => {
  try {
    const {
      body: { name, email, phone, birthday, ...data }
    } = req; console.log(data);

    //buscar usuario
    const userDb = await usersModel.findOne({ email });

    if (!userDb) {

      const newUser = await usersModel.create({
        name, birthday, email, phone
      });

      const volunteer = await volunteersModel.create({
        user: newUser._id,
        ...data,
      });

      newUser.volunteer = volunteer._id; // id data volunteer
      await newUser.save();

      const newVolunteer = await volunteersModel.findById({ _id: volunteer._id })
      .populate("user", {
        volunteer: 0,
        contribution: 0,
        adoptions: 0,
        isDelete: 0,
        pass: 0
        });


        const {user:{_id:idUser, ...basicData }, ...dataVolunteer} = newVolunteer.toObject(); 

        res.status(200).send({data:{
          idUser,
          ...basicData,
          ...dataVolunteer
        }}); 

    } else {

      await usersModel.findByIdAndUpdate({ _id: userDb._i }, 
        {name, birthday, phone, isDelete: false}, {
        returnOriginal: false,
      });

      const newVolunteer = await volunteersModel.create({
        user: userDb._id,
        ...data,
      });

      userDb.volunteer = newVolunteer._id; // id data volunteer
      await userDb.save();

      const volunteerDb = await volunteersModel.findById({ _id: newVolunteer._id })
      .populate("user", {
        volunteer: 0,
        contribution: 0,
        adoptions: 0,
        isDelete: 0,
        pass: 0

        });

      
        const {user:{_id:idUser, ...basicData }, ...dataVolunteer} = volunteerDb.toObject(); 

        res.status(200).send({data:{
          idUser,
          ...basicData,
          ...dataVolunteer
        }}); 
    }
  } catch (e) {
    res.status(404).send({ error: e });
  }
};



module.exports = {
  CreateVolunteer,
};

