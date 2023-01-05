const { adoptionsModel, usersModel, dogModel } = require("../models");

/**
 *
 * @param {*} req
 * @param {*} res
 */
const adoptionPost = async (req, res) => {

  try {
    const {
     body:{ name, birthday, email, phone, dogName, ...dataAdopter }
    } = req;


    console.log(dogName)

    let userDb = await usersModel.findOne({ email });
    let dogDb = await dogModel.findOne({ name: dogName });


    if (!userDb) {

      userDb = await usersModel.create({
        name, birthday, email, phone
      }); 

    } else {

      await usersModel.findByIdAndUpdate({ _id: userDb._id }, 
        {name, birthday, phone, isDelete: false}, {
        returnOriginal: false,
      });
     
    };

    // console.log(userDb._id); console.log(dogDb._id);

    const newCertificate = await adoptionsModel.create({
      user: userDb._id,
      nameUser: userDb.name,
      dog: dogDb._id,
      nameDog: dogDb.name,
      ...dataAdopter
    }); 

    userDb.adoptions = [...userDb.adoptions, newCertificate._id]; 
      await userDb.save(); 

    dogDb.adopters = [...dogDb.adopters, userDb._id]; 
      await dogDb.save();

    
    const adoptDb = await adoptionsModel.findById({ _id: newCertificate._id })
    .populate("user dog", {
      name: 1,
      _id: 1
    });

      
        const {
          user:{ _id: user, name: nameUser },
          dog:{_id: dog, name: nameDog },
          ...dataAdop} = adoptDb.toObject(); 

        //  res.status(200).send(adoptDb);  


        res.status(200).send({data:{
          nameUser, user, nameDog, dog,
          birthday, email, phone,
          ...dataAdop
        }});  

  } catch (error) {
    res.status(404).send({ error });
  }
};

module.exports = {
  adoptionPost,
};