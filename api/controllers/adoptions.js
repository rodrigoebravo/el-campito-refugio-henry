const { adoptionsModel, usersModel, dogModel } = require("../models");


const adoptionPost = async (req, res) => {

  try {
    const {
     body:{ name, birthday, email, phone, nameDog,  ...dataAdopter }
    } = req;

    console.log("controller línea 13", nameDog)

    let userDb = await usersModel.findOne({ email });
    let dogDb = await dogModel.findOne({ name: nameDog });

    
    console.log("controller línea 19", userDb); 
    console.log("controller línea 20",dogDb);

    if (!userDb || userDb === {}) {

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
    }); console.log("controller línea 44", newCertificate);

    // userDb.adoptions = [...userDb.adoptions, newCertificate._id]; 
    //   await userDb.save(); 
    let aux = [...userDb.adoptions, newCertificate._id];
    await usersModel.findByIdAndUpdate({ _id: userDb._id }, 
        { adoptions: aux }, {
        returnOriginal: false,
      });

    // dogDb.adopters = [...dogDb.adopters, userDb._id]; 
    //   await dogDb.save();
    let aux2 = [...dogDb.adopters, userDb._id] ;
    await usersModel.findByIdAndUpdate({ _id: userDb._id }, 
        { adopters: aux2 }, {
        returnOriginal: false,
      });

    
    const adoptDb = await adoptionsModel.findById({ _id: newCertificate._id })
    .populate("user dog", {
      name: 1,
      _id: 1
    });
    console.log("controller línea 68", adoptDb);
      
        const {
          user:{ _id: user, name: nameUser },
          dog:{_id: dog, name: dogName },
          ...dataAdop} = adoptDb.toObject(); 

        //  res.status(200).send(adoptDb);  


        res.status(200).send({data:{
          nameUser, user, dogName, dog,
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