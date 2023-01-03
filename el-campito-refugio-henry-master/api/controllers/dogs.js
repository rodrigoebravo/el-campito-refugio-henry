const { dogModel } = require("../models");

const getDogs = async (req, res) => {
  try {
    // const { filter, range, sort} = req;
    // console.log({filter, range:range[0], sort});
    const users = await dogModel.find({});
    res.status(201).send(users);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const getDogsId = async (req, res) => {
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


module.exports = {
  getDogs,
  getDogsId
  
};
