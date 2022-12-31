const { interfacesModel } = require("../models");


const getInterfaces = async (req, res) => {
  try {
    const interfaces = await interfacesModel.find({});
    res.status(201).send(interfaces);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const getInterfacesId = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const interfaces = await interfacesModel.findById({ _id: id });
    res.json(interfaces);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};



module.exports = {
  getInterfaces, 
  getInterfacesId,
};