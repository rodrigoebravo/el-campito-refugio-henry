const { dogModel } = require("../models");

const adminDogs = async (req, res) => {
  try {

    // const filtro = JSON.parse(req.query.filter);
    // if (filtro) {
    //   if (filtro.name) {
    //     const { name } = filtro;
    //     console.log(filtro);
    //     const dogs = await dogModel.find({ name: new RegExp(name, "i") });
    //     if (dogs.length) {
    //       res.status(200).send(dogs);
    //     } else {
    //       res.status(404).send({ dogs });
    //     }
    //   } else {
    //     const dogs = await dogModel.find(filtro);
    //     res.status(200).send(dogs);
    //   }
    // };
    const dogs = await dogModel.find({});
    res.status(200).send(dogs);
    
  } catch (error) {
    res.status(400).send({ error: "Error en la solicitud" });
  }
};

const adminDogsId = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const dogs = await dogModel.findById({ _id: id });
    res.json(dogs);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminUpdateDog = async (req, res) => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const dog = await dogModel.findByIdAndUpdate({ _id: id }, body, {
      returnOriginal: false,
    });

    res.json({ data: dog });
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminCreateDog = async (req, res) => {
  try {
    const { body } = req;

    console.log(body);

    // body.images = body.images.split(' '); // .replace('[','').replace(']','')

    const dog = await dogModel.create(body);

    res.status(200).send({ data: dog });
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminDeleteDog = async (req, res) => {
  try {
    // const { body } = req;
    const { id }= req.params;

    const dogDelete = await dogModel.findByIdAndUpdate(
      { _id: id },
      { isDelete: true },
      {
        returnOriginal: false,
      }
    );

    res.status(201).send(dogDelete);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

module.exports = {
  adminDogs,
  adminDogsId,
  adminCreateDog,
  adminUpdateDog,
  adminDeleteDog,
};
