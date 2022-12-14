const { dogModel } = require("../models");

/**
 * get all dogs,
 * @param {*} req
 * @param {*} res
 */

const getDogs = async (req, res) => {
  try {
    const { name, race } = req.query;

    if (name) {
      const dog = await dogModel.find({ name });
      res.json(dog);
    } else if (race) {
      const dog = await dogModel.find({ race });
      res.json(dog);
    } else {
      const allDogs = await dogModel.find({});
      res.json(allDogs);
    }
  } catch (error) {
    res.status(404).send({ error });
  }
};

/**
 * get a dog by _id
 *
 * @param {*} req
 * @param {*} res
 */
const getDogById = async (req, res) => {
  try {
    const { id } = req.params;
    const dog = await dogModel.findById({ _id: id });

    res.json(dog);
  } catch (error) {
    res.status(404).send({ error });
  }
};

/**
 * create a dog
 * @param {*} req
 * @param {*} res
 */
const createDog = async (req, res) => {
  try {
    const { body } = req;

    const dog = await dogModel.create(body);
    res.json(dog);
  } catch (error) {
    res.status(404).send({ error });
  }
};

/**
 * updtate dog
 * @param {*} req
 * @param {*} res
 */
const updateDog = async (req, res) => {
  try {
    const {
      query: { id, isDelete },
      body,
    } = req;

    if (id && isDelete) {
      const dog = await dogModel.findByIdAndUpdate(
        id,
        { isDelete },
        {
          returnOriginal: false,
        }
      );
      res.send(dog);
    } else if (body) {
      const { _id, ...data } = body;

      const dog = await dogModel.findByIdAndUpdate(_id, data, {
        returnOriginal: false,
      });
      res.json(dog);
    }
  } catch (error) {
    res.status(404).send({ error });
  }
};

const adminDogs = async (req, res) => {
  try {
    const users = await dogModel.find({});
    res.status(201).send(users);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminDogsID = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const users = await dogModel.findOne({ _id: id });
    res.json(users);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminUpdate = async (req, res) => {
  try {
    // const { body } = req;
    const {
      body: { id, ...data },
    } = req;

    // console.log(id);
    // console.log(data);

    const user = await dogModel.findByIdAndUpdate({ _id: id }, data, {
      returnOriginal: false,
    });

    res.json({ data: user });
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminDelete = async (req, res) => {
  try {
    // const { body } = req;
    const id = req.params.id;

    console.log(id);

    const userDelete = await dogModel.findById(id);
    await modelUser.deleteOne({ _id: id });
    res.json(userDelete);
  } catch (e) {
    res.status(404).send(e);
  }
};

module.exports = {
  getDogs,
  getDogById,
  createDog,
  updateDog,
  adminDogs,
  adminDogsID,
  adminUpdate,
  adminDelete,
};
