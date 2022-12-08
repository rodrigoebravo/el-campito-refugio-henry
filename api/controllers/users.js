const { usersModel } = require("../models");

/**
 * get all user
 * @param {*} req
 * @param {*} res
 */

const getUsers = async (req, res) => {
  try {
    const { name } = req.query; 

    if(name){

        const users = await usersModel.find({name});
        res.json(users);
    
    } else {

        const alluser = await usersModel.find({});
        res.json(alluser);
    }

  } catch (error) {
    res.status(404).send({ error });
  }
};
/**
 * get a users by _id
 *
 * @param {*} req
 * @param {*} res
 */
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await usersModel.findById({ _id: id });

    res.json(user);
  } catch (error) {
    res.status(404).send({ error });
  }
};

/**
 * create a users
 * @param {*} req
 * @param {*} res
 */
const createUser = async (req, res) => {
  try {
    const { body } = req;

    const users = await usersModel.create(body);
    res.json(users);

  } catch (error) {
    res.status(404).send({ error });
  }
};
/**
 * update users
 * @param {*} req
 * @param {*} res
 */
const updateUser = async (req, res) => {
    try { 
      const {_id, ...data} = req.body; 

    //   console.log(data); 

      const user = await usersModel.findByIdAndUpdate(_id, data, {
        returnOriginal: false, 
      }); 
      
      res.json(user); 

    } catch (error) {
      res.status(404).send({ error });
    }
  };

/**
 * delete user
 * @param {*} req
 * @param {*} res
 */
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    // await usersModel.deleteOne({ _id: id });
    res.send({ msg: "delete" });
  } catch (error) {
    res.status(404).send({ error });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
