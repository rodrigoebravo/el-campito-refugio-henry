const { usersModel } = require("../models");

/**
 * get all user
 * @param {*} req
 * @param {*} res
 */

const roles = ["public", "superAdmin", "admin", "equipo1", "equipo2", "equipo3", "visitante", "donante", "padrino", "sponsor", "adoptante", "voluntario"];



/**
 * get all users,
 * @param {*} req
 * @param {*} res
 */

const getUsers = async (req, res) => {
  try {
    const _start = Number(req.query._start) || 0;
    const _end = Number(req.query._end) || 10;
    const limite = _end - _start;
    let todos = await usersModel.find({});
    let users = await usersModel
      .find({ isDelete: true })
      .skip(_start)
      .limit(limite);

    res.set("Access-Control-Expose-Headers", "X-Total-Count");
    res.set("X-Total-Count", todos.length);

    let i = _start;
    const filter = users.map((e) => {
      i++;
      return { id: i, data: e };
    });

    res.status(200).send(filter);
  } catch (error) {
    res.status(404).send({ error });
  }
};
/**
 * get a user by _id
 *
 * @param {*} req
 * @param {*} res
 */
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await usersModel
      .find({})
      .skip(id - 1)
      .limit(1);

    res.status(200).json({ id: id, data: user[0] });
  } catch (error) {
    res.status(404).send({ error });
  }
};

/**
 * create a user
 * @param {*} req
 * @param {*} res
 */
const createUser = async (req, res) => {
  try {
    const { body } = req;

    const user = await usersModel.create(body);
    res.json(user);
  } catch (error) {
    res.status(404).send({ error });
  }
};

/**
 * updtate user
 * @param {*} req
 * @param {*} res
 */
const updateUser = async (req, res) => {
  try {
    const { data } = req.body;
    const { id } = req.params;

    const userUpdate = await usersModel.findByIdAndUpdate(data._id, data, {
      returnOriginal: false,
    });
    res.status(200).json({ id: id, data: userUpdate });
  } catch (error) {
    res.status(404).send({ error });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  let users = await usersModel.find({});

  const userUpdate = await usersModel.findByIdAndUpdate(
    users[id - 1]._id,
    { isDelete: !users[id - 1].isDelete },
    {
      returnOriginal: false,
    }
  );

  res.status(200).json({ id: id, data: userUpdate });
};

const adminUsers = async (req, res) => {
  try {
    const _start = Number(req.query._start) || 0;
    const _end = Number(req.query._end) || 10;
    const limite = _end - _start;
    let todos = await usersModel.find({});
    let users = await usersModel
      .find({ isDelete: true })
      .skip(_start)
      .limit(limite);

    res.set("Access-Control-Expose-Headers", "X-Total-Count");
    res.set("X-Total-Count", todos.length);

    let i = _start;
    const filter = users.map((e) => {
      i++;
      return { id: i, data: e };
    });

    res.status(200).send(filter);
  } catch (error) {
    res.status(404).send({ error });
  }
};

const adminUsersId = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await usersModel
      .find({})
      .skip(id - 1)
      .limit(1);

    res.status(200).json({ id: id, data: user[0] });
  } catch (error) {
    res.status(404).send({ error });
  }
};

const adminUpdate = async (req, res) => {
  try {
    const { data } = req.body;
    const { id } = req.params;

    const userUpdate = await usersModel.findByIdAndUpdate(data._id, data, {
      returnOriginal: false,
    });
    res.status(200).json({ id: id, data: userUpdate });
  } catch (error) {
    res.status(404).send({ error });
  }
};


const adminCreate = async (req, res) => {
  try {
    const { body } = req;
    const user = await usersModel.create(body);
    res.json(user);
  } catch (error) {
    res.status(404).send({ error });
  }
};


const adminDelete = async (req, res) => {
  const { id } = req.params;
  let users = await usersModel.find({});

  const userUpdate = await usersModel.findByIdAndUpdate(
    users[id - 1]._id,
    { isDelete: !users[id - 1].isDelete },
    {
      returnOriginal: false,
    }
  );

  res.status(200).json({ id: id, data: userUpdate });
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
  deleteUser
}; 

