const { usersModel } = require("../models");

const adminUsers = async (req, res) => {
  try {
    const users = await usersModel.find({});
    // console.log(users);
    let newUsers = [];
    users.forEach((obj, index)=>{

      let newObj = {
        _id: obj._id || "",
        name: obj.name || "",
        email: obj.email || "",
        birthday: obj.birthday?.toISOString().slice(0, 10)  || "",
        phone: obj.phone || "",
        roles: obj.roles || [],
        image: { src: obj.image || "", index:[index] },
        volunteer: obj.volunteer || "",
        contribution: obj.contribution || [],  
        adoptions: obj.adoptions || [],  
      };
      newUsers.push(newObj);
    })
    console.log(newUsers);
    res.status(201).send(newUsers);

  } catch (e) {
    res.status(404).send({ error: e });
  }
}; 


const adminUsersId = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const user = await usersModel.findById({ _id: id }); console.log(user);
    
    let newObj = {
      _id: user._id || "",
      name: user.name || "",
      email: user.email || "",
      birthday: user.birthday?.toISOString().slice(0, 10)  || "",
      phone: user.phone || "",
      roles: user.roles || [],
      image: { src: user.image || "", index:0 },
      volunteer: user.volunteer || "",
      contribution: user.contribution || [],  
      adoptions: user.adoptions || [],  
    };

    res.json(newObj);

  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminUpdateUser = async (req, res) => {
  try {
    const {
      params: { id },
      body,
    } = req;


    const user = await usersModel.findByIdAndUpdate({ _id: id }, body, {
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
    res.status(200).send({ data: user });
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminDeleteUser = async (req, res) => {
  try {
    // const { body } = req;
    const id = req.params.id;


    const userDelete = await usersModel.findByIdAndUpdate(
      { _id: id },
      { isDelete: true },
      {
        returnOriginal: false,
      }
    );

    res.status(201).send(userDelete);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

module.exports = {
  adminCreateUser,
  adminDeleteUser,
  adminUsers,
  adminUpdateUser,
  adminUsersId,
};
