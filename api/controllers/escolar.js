const { escolarModel } = require("../models");

const getEscolar = async (req, res) => {
  try {
    const escolar = await escolarModel.find({isDelete: false});

    res.status(201).send(escolar);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const getEscolarId = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const escolar = await escolarModel.findById({ _id: id });
    res.json(escolar);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};


module.exports = {
  getEscolar,
  getEscolarId,
};
