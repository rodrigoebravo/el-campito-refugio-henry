const { usersModel } = require("../models"); 

/**
 * obtener usuarios
 * @param {*} req
 * @param {*} res
 */

const getUsers = async (req, res) => {
    const { name } = req.query; 

    try {

        if(name){
            const user = await usersModel.find({ name }); 
            res.json(user); 
        }else {
            const allUsers = await usersModel.find({}); 
            res.json(allUsers); 
        }

    }catch(error){
        res.status(404).send({ error }); 
    };
   
};


/**
 * crear un nuevo usuario
 * @param {*} req
 * @param {*} res
 */
const createUser = async (req, res) => {
    const { body } = req; 
    try {
        const newUser = await usersModel.create(body); 
        res.json(newUser); 

    }catch(error){
        res.status(404).send({ error }); 
    }; 

}; 


module.exports = {
    getUsers,
    createUser, 

}