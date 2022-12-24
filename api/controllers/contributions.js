const { contributionsModel, usersModel, dogModel} = require("../models");


/**
 * create a contributions
 * @param {*} req
 * @param {*} res
 */
const contributionPost = async (req, res) => {
  try {
    const { body:{name, email, phone, pass, idDog, type, ...dataContibution }} = req;

    const user = await usersModel.findOne({email}); 

    if(!user){

    const newUser = await usersModel.create({
      name,
      email,
      phone,
      pass,
    })

      const contrib = await contributionsModel.create({
        user: newUser._id,
        dog: idDog,
        type,
        ...dataContibution
      }); 

      newUser.contribution = newUser.contribution.concat(contrib._id); 
      await newUser.save(); 

      if(type === "padrinazgo"){
        const dog = await dogModel.findById({_id: idDog}); 

        dog.godparents = [...dog.godparents, newUser._id]; 
        await dog.save(); 
      }

      

    }else{

    }

  } catch (error) {
    res.status(404).send({ error });
  }
};



module.exports = {
    contributionPost,
  
};