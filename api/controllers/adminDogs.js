const { dogModel } = require("../models");

const adminDogs = async (req, res) => {
  try {
    // const { filter, range, sort} = req;
    // console.log({filter, range:range[0], sort});
    const users = await dogModel.find({});
    res.status(201).send(users);
  } catch (e) {
    res.status(404).send({ error: e });
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

    const dog = await dogModel.create(body);

    res.status(200).send({ data: dog });
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminDeleteDog = async (req, res) => {
  try {
    // const { body } = req;
    const id = req.params.id;

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
