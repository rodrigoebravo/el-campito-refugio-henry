const { pressModel } = require("../models");

const getPress = async (req, res) => {
  try {
    const press = await pressModel.find({});

    res.status(201).send(press);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const getPressId = async (req, res) => {
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


module.exports = {
  getPress,
  getPressId,
};
