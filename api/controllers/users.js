const { usersModel } = require("../models");

const getUsers = async (req, res) => {
  try {
    const users = await usersModel.find({});
    res.status(201).send(users);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const getUsersId = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const users = await usersModel.findById({ _id: id });
    res.json(users);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};



module.exports = {
  getUsers, 
  getUsersId,
};
