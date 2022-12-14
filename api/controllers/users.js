const { usersModel } = require("../models");

/**
 * get all user
 * @param {*} req
 * @param {*} res
 */

const roles = [
  "public",
  "superAdmin",
  "admin",
  "equipo1",
  "equipo2",
  "equipo3",
  "visitante",
  "donante",
  "padrino",
  "sponsor",
  "adoptante",
  "voluntario",
];

const getUsers = async (req, res) => {
  try {
    const { name } = req.query;

    if (name) {
      const users = await usersModel.find({ name });
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
    const {
      query: { id, isDelete },
      body,
    } = req;
    // const {id , isDelete} = req.query;
    // const body  = req.body;

    if (id && isDelete) {
      const user = await usersModel.findByIdAndUpdate(
        id,
        { isDelete },
        {
          returnOriginal: false,
        }
      );
      res.json(user);
    } else if (body) {
      const { _id, ...data } = body;

      const user = await usersModel.findByIdAndUpdate(_id, data, {
        returnOriginal: false,
      });
      res.json(user);
    }
  } catch (error) {
    res.status(404).send({ error });
  }
};

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

const adminUpdate = async (req, res) => {
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

const adminCreate = async (req, res) => {
  try {
    const { data } = req.body;
    const user = await usersModel.create(data);
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({ error });
  }
};

const adminDelete = async (req, res) => {
  try {
    // const { body } = req;
    const id = req.params.id;

    console.log(id);

    const userDelete = await usersModel.findById(id);
    await modelUser.deleteOne({ _id: id });
    res.json(userDelete);
  } catch (e) {
    res.status(404).send(e);
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  adminCreate,
  adminDelete,
  adminUsers,
  adminUpdate,
  adminUsersId,
};
