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
    const _start = Number(req.query._start) || 0;
    const _end = Number(req.query._end) || 10;
    const limite = _end - _start;
    let todos = await dogModel.find({});
    let dogs = await dogModel
      .find({ isDelete: true })
      .skip(_start)
      .limit(limite);

    res.set("Access-Control-Expose-Headers", "X-Total-Count");
    res.set("X-Total-Count", todos.length);

    let i = _start;
    const filter = dogs.map((e) => {
      i++;
      return { id: i, data: e };
    });

    res.status(200).send(filter);
  } catch (error) {
    res.status(404).send({ error });
  }
};

const adminDogsID = async (req, res) => {
  try {
    const { id } = req.params;

    const dog = await dogModel
      .find({})
      .skip(id - 1)
      .limit(1);

    res.status(200).json({ id: id, data: dog[0] });
  } catch (error) {
    res.status(404).send({ error });
  }
};

const adminUpdate = async (req, res) => {
  try {
    const { data } = req.body;
    const { id } = req.params;

    const dogUpdate = await dogModel.findByIdAndUpdate(data._id, data, {
      returnOriginal: false,
    });
    res.status(200).json({ id: id, data: dogUpdate });
  } catch (error) {
    res.status(404).send({ error });
  }
};

const adminDelete = async (req, res) => {
  const { id } = req.params;
  let dogs = await dogModel.find({});

  const dogUpdate = await dogModel.findByIdAndUpdate(
    dogs[id - 1]._id,
    { isDelete: !dogs[id - 1].isDelete },
    {
      returnOriginal: false,
    }
  );

  res.status(200).json({ id: id, data: dogUpdate });
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
