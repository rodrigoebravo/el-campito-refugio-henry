const { contributionsModel, usersModel, dogModel } = require("../models");

const adminContrib = async (req, res) => {
  try {
    const contributions = await contributionsModel
      .find({ isDelete: false })
      .populate("user dog", {
        _id: 1,
        name: 1,
      });

     
    const contributionMapping = contributions.map((c) => {

      let {user , dog, type, total, ...data} = c.toObject(); 
    
      if(user == undefined && dog == undefined || dog == undefined ){
        return {
          name: "Anonimo",
          type,
          total,
          ...data
        }
      }

      return {
        name: user.name,
        nameDog: dog.name,
        type,
        total,
        ...data
      }

    });

    res.status(201).send(contributionMapping);

  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminContribId = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    console.log(id)
    
    const contributions = await contributionsModel
      .findById({ _id: id })
      .populate("user dog", {
        name: 1,
        _id: 1,
        phone: 1,
        email: 1,
      });

    const { user, dog, ...data } = contributions.toObject();

    res.json({
      name: user.name || null,
      phone: user.phone || null,
      email: user.email || null,
      dog: dog.name || null,
      idUSer: user._id || null,
      idDog: dog._id || null,
      ...data,
    });
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

//-------------------------------------------------------------
const adminUpdateContrib = async (req, res) => {
  try {
    const {
      params: { id },
      body: { name, birthday, email, phone, ...dataCont },
    } = req;

    console.log(req.body)

    await contributionsModel.findByIdAndUpdate({ _id: id }, dataCont, {
      returnOriginal: false,
    });

    const u = usersModel.findById({ email });

    await usersModel.findByIdAndUpdate(
      { _id: u._id },
      { name, birthday, email, phone }
    );

    const contri = await contributionsModel
      .findById({ _id: id })
      .populate("user dog", {
        name: 1,
        _id: 1,
      });

    const { user, dog, ...data } = contri.toObject();

    res.json({data: {
      user: user.name,
      dog: dog.name,
      idUser: user._id,
      idDog: dog._id,
      ...data,
    }});
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

//---------------------------------------------------------------

const adminCreateContrib = async (req, res) => {
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

const adminDeleteContrib = async (req, res) => {
  try {
    // const { body } = req;
    const id = req.params.id;

    console.log(id);

    const contributionDelete = await contributionsModel.findByIdAndUpdate(
      { _id: id },
      { isDelete: true },
      {
        returnOriginal: false,
      }
    );
    res.status(201).send(contributionDelete);
  } catch (e) {
    res.status(404).send(e);
  }
};

module.exports = {
  adminCreateContrib,
  adminDeleteContrib,
  adminContrib,
  adminUpdateContrib,
  adminContribId,
};