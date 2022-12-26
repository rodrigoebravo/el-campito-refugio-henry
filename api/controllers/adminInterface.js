const { interfacesModel } = require("../models");

const adminInterface = async (req, res) => {
  try {
    const interface = await interfacesModel.find({});
    res.status(201).send(interface);
  } catch (error) {
    res.status(404).send({ error });
  }
};

const adminInterfaceId = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const interface = await interfacesModel.findById({ _id: id });
    res.json(interface);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminCreateInterface = async (req, res) => {
  try {
    const { body } = req;
    
    const interfaces = await interfacesModel.create(body);
    res.status(200).send({ data: interfaces });
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminUpdateInterface = async (req, res) => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const interface = await interfacesModel.findByIdAndUpdate(
      { _id: id },
      body,
      {
        returnOriginal: false,
      }
    );

    res.json({ data: interface });
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminDeleteInterface = async (req, res) => {
  try {
    const id = req.params.id;

    let borrado = await interfacesModel.findByIdAndUpdate(
      { _id: id },
      { isDelete: true },
      {
        returnOriginal: false,
      }
    );

    res.status(201).send(borrado);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};


module.exports = {
    adminInterface,
    adminInterfaceId,
    adminUpdateInterface,
    adminCreateInterface,
    adminDeleteInterface
};
