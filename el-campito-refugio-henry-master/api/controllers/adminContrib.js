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
      body: { name, email, phone, idDog, type, ...dataContibution },
    } = req;

    let userDb = await usersModel.findOne({ email });
  
    if (!userDb) {
      userDb = await usersModel.create({
        name,
        email,
        phone,
      });
    }

    // await usersModel.findByIdAndUpdate(
    //   { _id: userDb._id },
    //   {
    //     name,
    //     email,
    //     phone
    //   },
    // );

    const newCertificate = await contributionsModel.create({
      user: userDb._id,
      dog: idDog,
      type,
      ...dataContibution,
    });

    if(name && email){
      userDb.contribution = [...userDb.contribution, newCertificate._id];
      await userDb.save();
    }

    if (type === "padrinazgo") {
      const dog = await dogModel.findById({ _id: idDog });

      dog.godparents = [...dog.godparents, userDb._id];
      await dog.save();
    }

    const certificate = await contributionsModel.findById({_id: newCertificate._id}).populate("user"); 

    const { user, ...dataCertificate  } = certificate.toObject(); 

    res.status(201).send({data: {
      name: user.name,
      ...dataCertificate
    }}); 
    

    
  } catch (error) {
    res.status(404).send({ error });
  }
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