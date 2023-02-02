
const { escolarModel } = require("../models/index"); 
const element = require("./escolar.json"); 

const pushEscolar = async () =>{

    try {

        const escolar = await escolarModel.create(element);

    
        console.log(escolar)
        console.log("Estado de DB: escolar cargados")

        return escolar;
        
    } catch (error) {
        console.log(error);
    }

    
   
};

module.exports = pushEscolar;