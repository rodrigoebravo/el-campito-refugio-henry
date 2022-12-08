const { usersModel } = require("../models");

/**
 * get all user
 * @param {*} req
 * @param {*} res
 */

const roles = ["public", "superAdmin", "admin", "equipo1", "equipo2", "equipo3", "visitante", "donante", "padrino", "sponsor", "adoptante", "voluntario"];


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

    const {id , value} = req.query; 
    const body  = req.body; 

    if(id && value){
      const user = await usersModel.findByIdAndUpdate(id, {isDelete: value}, {
        returnOriginal: false, 
      }); 
      res.json(user);

    } else if(body){

      const { _id, ...data } = req.body; 

      const user = await usersModel.findByIdAndUpdate(_id, data, {
        returnOriginal: false, 
      }); 
      res.json(user); 
    }

  } catch (error) {
    res.status(404).send({ error });
  }
};






module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
}; 

