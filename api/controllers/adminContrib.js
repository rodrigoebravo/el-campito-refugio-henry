const { contributionsModel, usersModel, dogModel } = require("../models");

const adminContrib = async (req, res) => {
    try {
      const contributions = await contributionsModel.find({})
      // .populate("user dog", { name: 1, _id: 1 });

      // const contribMapping = contributions.map( c => {

      //   let { user, dog, ...data } = c.toObject();
      //   return {
      //     user: user.name || null,
      //     dog: dog.name || null,
      //     idUSer: user._id || null,
      //     idDog: dog._id || null,
      //     ...data
      //   }
      // }); 

      // res.status(201).send(contribMapping);
      res.status(201).send(contributions);

    } catch (e) {
      res.status(404).send({ error: e });
    }
  };
  
  const adminContribId = async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
  
      const contributions = await contributionsModel.findById({ _id: id }).populate("user dog", {
        name: 1,
        _id: 1
      });

      const { user, dog, ...data } = contributions.toObject(); 

      res.json({
        user: user.name || null,
        dog: dog.name || null,
        idUSer: user._id || null,
        idDog: dog._id || null,
        ...data
      });
    } catch (e) {
      res.status(404).send({ error: e });
    }
  };
  
  const adminUpdateContrib = async (req, res) => {
    try {
      const {
        params: { id },
        body: { name, birthday, email, phone,  ...dataCont },
      } = req;
  
      await contributionsModel.findByIdAndUpdate({ _id: id }, dataCont, {
        returnOriginal: false,
      });

      const u = usersModel.findById({ email });

      await usersModel.findByIdAndUpdate({ _id: u._id },
        { name, birthday, email, phone }
      );
  
      const contri = await contributionsModel.findById({ _id: id }).populate("user dog", {
        name: 1,
        _id: 1
      });

      const { user, dog, ...data } = contri.toObject(); 

      res.json({
        user: user.name,
        dog: dog.name,
        idUser: user._id,
        idDog: dog._id,
        ...data
      });

    } catch (e) {
      res.status(404).send({ error: e });
    }
  };
  
  const adminCreateContrib = async (req, res) => {
    try {
      const { body } = req;
      const contribution = await contributionsModel.create(body);
      res.status(200).send({data: contribution});
    } catch (error) {
      res.status(404).send({ error });
    }
  };
  
  const adminDeleteContrib = async (req, res) => {
    try {
      // const { body } = req;
      const id = req.params.id;
  
      console.log(id);
  
      const contributionDelete = await contributionsModel.findByIdAndUpdate({_id: id}, {isDelete: true}, {
        returnOriginal: false,
      });
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