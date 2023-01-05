const { contributionsModel, usersModel, dogModel } = require("../models");

/**
 * create a contributions
 * @param {*} req
 * @param {*} res
 */
const contributionPost = async (req, res) => {
  try {
    const {
      body: { email, dogName, type, ...dataContibution },
    } = req;

    let newCertificate = {},  certificateSee = {};


    let myDog = await dogModel.findOne({name: dogName});
    let userDb = await usersModel.findOne({ email });

    if ( !userDb || userDb === {} ) {
      userDb = await usersModel.create({ email });
    };

    if ( !dogName ) {
    
      if ( !email  || !userDb || userDb === {} ) {
        newCertificate = await contributionsModel.create({          
          type:"donación",
          ...dataContibution,
        });   
        certificateSee =  await contributionsModel.findById({_id: newCertificate._id});        


        return res.json(certificateSee);
      };

      if ( type === "sponsoreo" && email) {

        newCertificate = await contributionsModel.create({          
          type:"sponsoreo",
          user: userDb._id,
          ...dataContibution,
      });      

      let myRol = userDb.roles?.find(r=> r === "sponsor");


      if(!myRol) userDb.roles = [...userDb.roles, "sponsor"]; 
      userDb.contribution = [...userDb.contribution, newCertificate._id];
      await userDb.save();
        
      } else {

        newCertificate = await contributionsModel.create({          
          type:"donación",
          user: userDb._id,
          ...dataContibution,
      });      


      let myRol = userDb.roles?.find(r=> r === "donante");


      if(!myRol) userDb.roles = [...userDb.roles, "donante"]; 
      userDb.contribution = [...userDb.contribution, newCertificate._id];
      await userDb.save();
      };
      

      certificateSee =  await contributionsModel.findById({_id: newCertificate._id})
      .populate("user"); 

      const { user,...dataCertificate  } = certificateSee.toObject(); 

      return res.status(201).send({
        name: user.name,
        idUser: user._id,
        ...dataCertificate
      }); 
    };

    if( email && dogName && type === "padrinazgo" ){ 
      newCertificate = await contributionsModel.create({
          user: userDb._id,
          dog: myDog._id,
          type:"padrinazgo",
          ...dataContibution,
      });

      let myRol = userDb.roles?.find(r=> r === "padrino");


      if(!myRol) userDb.roles = [...userDb.roles, "padrino"];
      userDb.contribution = [...userDb.contribution, newCertificate._id];      
      await userDb.save();  

      let myGodParent = myDog.godparents?.find(p=> p === userDb._id);


      if(!myGodParent)  myDog.godparents = [...myDog.godparents, userDb._id];
      await myDog.save();
      
      certificateSee =  await contributionsModel.findById({_id: newCertificate._id})
      .populate("user dog"); 

      const { user, dog, ...dataCertificate  } = certificateSee.toObject();
      
      return res.status(201).send({


        name: user.name,
        idUser: user._id,
        dog: dog.name,
        idDog: dog._id,
        ...dataCertificate
      }); 
    };     

  
    } catch (error) { res.status(404).send({ error }) }
};

module.exports = {
  contributionPost,
};