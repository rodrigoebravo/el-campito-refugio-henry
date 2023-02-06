const { dogModel } = require("../models/index"); 
const info = require("./dogs.json"); 
// console.log(info);

const pushDatabase = () =>{
    dogModel.create(info)
    .then(res => console.log("Estado de DB: dogs cargados"))
};

module.exports = pushDatabase;