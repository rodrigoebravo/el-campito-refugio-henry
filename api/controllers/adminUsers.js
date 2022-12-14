const { usersModel } = require("../models");

const adminUsers = async (req, res) => {
    try {
      const users = await usersModel.find({});
      res.status(201).send(users);
    } catch (e) {
      res.status(404).send({ error: e });
    }
  };
  
  const adminUsersId = async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
  
      const users = await usersModel.findOne({ _id: id });
      res.json(users);
    } catch (e) {
      res.status(404).send({ error: e });
    }
  };
  
  const adminUpdateUser = async (req, res) => {
    try {
      // const { body } = req;
      const {
        body: { id, ...data },
      } = req;
  
      // console.log(id);
      // console.log(data);
  
      const user = await usersModel.findByIdAndUpdate({ _id: id }, data, {
        returnOriginal: false,
      });
  
      res.json({ data: user });
    } catch (e) {
      res.status(404).send({ error: e });
    }
  };
  
  const adminCreateUser = async (req, res) => {
    try {
      const { body } = req;
      const user = await usersModel.create(body);
      res.status(200).send({data: user});
    } catch (error) {
      res.status(404).send({ error });
    }
  };
  
  const adminDeleteUser = async (req, res) => {
    try {
      // const { body } = req;
      const id = req.params.id;
  
      console.log(id);
  
      const userDelete = await usersModel.findByIdAndUpdate({_id: id}, {isDeleted: true}, {
        returnOriginal: false,
      });
      // await modelUser.deleteOne({ _id: id });
      res.status(201).send(userDelete);
    } catch (e) {
      res.status(404).send(e);
    }
  };


  module.exports = {
    adminCreateUser,
    adminDeleteUser,
    adminUsers,
    adminUpdateUser,
    adminUsersId,
  };