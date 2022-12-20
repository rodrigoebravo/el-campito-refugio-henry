const { pressModel } = require("../models");

const adminPress = async (req, res) => {
  try {
    const press = await pressModel.find({});

    res.status(201).send(press);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminPressId = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const press = await pressModel.findById({ _id: id });
    res.json(press);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminUpdatePress = async (req, res) => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const press = await pressModel.findByIdAndUpdate({ _id: id }, body, {
      returnOriginal: false,
    });

    res.json({ data: press });
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminCreatePress = async (req, res) => {
  try {
    const { body } = req;
    const press = await pressModel.create(body);
    res.status(200).send({ data: press });
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminDeletePress = async (req, res) => {
  try {
    const id = req.params.id;

    const pressDelete = await pressModel.findByIdAndUpdate(
      { _id: id },
      { isDelete: true },
      {
        returnOriginal: false,
      }
    );

    res.status(201).send(pressDelete);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

module.exports = {
  adminPress,
  adminPressId,
  adminCreatePress,
  adminUpdatePress,
  adminDeletePress,
};
