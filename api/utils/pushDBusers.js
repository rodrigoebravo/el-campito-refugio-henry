const { usersModel } = require("../models/index"); 
const info = require("./usersEx.json"); 

const pushDBusers = () =>{
    usersModel.create(info)
    .then(res => console.log("Estado de DB: users cargados"))
};

module.exports = pushDBusers;