const { dogsModel } = require("../models/index"); 
const info = require("./search.json"); 
// console.log(info);

const pushDatabase = () =>{
    dogsModel.create(info)
    .then(res => console.log("Estado de DB: dogs cargados"))
};

module.exports = pushDatabase;