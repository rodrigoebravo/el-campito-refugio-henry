const { contributionsModel, usersModel, dogModel } = require("../models");

/**
 * create a contributions
 * @param {*} req
 * @param {*} res
 */
const contributionPost = async (req, res) => {
  try {
    const {
      body: { name, email, phone, idDog, type, ...dataContibution },
    } = req;

    // console.log(name, email, phone, idDog, type, dataContibution); 

    if(name == undefined && email == undefined && type == undefined){ 

       const newCertificate = await contributionsModel.create({
        // user: user._id,
        dog: idDog,
        type:"donación",
        ...dataContibution,
      });

      const certificate = await contributionsModel.findById({_id: newCertificate._id}).populate("dog", {
        name: 1,
      }); 


      const { dog, ...dataCertificate } = certificate.toObject(); //salida 

      res.status(201).send({
        user: "Anónimo",
        dog: dataDog.name,
        idDog,
        ...dataCertificate
      }); 

      // res.json(certificate); 

    }else {

      let userDb = await usersModel.findOne({ email });
  
      if (!userDb) {
        userDb = await usersModel.create({
          name,
          email,
          phone,
        });
      }     
  
      const newCertificate = await contributionsModel.create({
        user: userDb._id,
        dog: idDog,
        type,
        ...dataContibution,
      });
        
      await usersModel.findByIdAndUpdate({ _id: userDb._id },
        { name, email, phone },
      );

      if(name && email){  
        if (type === "padrinazgo")  userDb.roles = [...userDb.roles, "padrino"]; 
        if (type === "donación")  userDb.roles = [...userDb.roles, "donante"]; 

        userDb.contribution = [...userDb.contribution, newCertificate._id];
        await userDb.save();
      }
  
      if (type === "padrinazgo") {
        const dog = await dogModel.findById({ _id: idDog });  
        dog.godparents = [...dog.godparents, userDb._id];
        await dog.save();
      }

      const certificate = await contributionsModel.findById({_id: newCertificate._id}).populate("user dog"); 

      const { user, dog, ...dataCertificate  } = certificate.toObject(); 

      res.status(201).send({
        user: user.name,
        idUser: user._id,
        dog: dog.name,
        idDog,
        ...dataCertificate
      }); 

      // res.json(certificate)
    }
    
  } catch (error) {
    res.status(404).send({ error });
  }
};

module.exports = {
  contributionPost,
};