const { dogModel } = require("../models");

/**
 * get all dogs, 
 * @param {*} req
 * @param {*} res
 */

const getDogs = async (req, res) => {
  try {
    const { name, race } = req.query; 

    if(name) {

        const dog = await dogModel.find({name});
        res.json(dog);

    }else if(race){

        const dog = await dogModel.find({race});
        res.json(dog);
    
    } else {

        const allDogs = await dogModel.find({});
        res.json(allDogs);
    }

  } catch (error) {
    res.status(404).send({ error });
  }
};
/**
 * get a dog by _id
 *
 * @param {*} req
 * @param {*} res
 */
const getDogById = async (req, res) => {
  try {
    const { id } = req.params;
    const dog = await dogModel.findById({ _id: id });

    res.json(dog);
  } catch (error) {
    res.status(404).send({ error });
  }
};

/**
 * create a dog
 * @param {*} req
 * @param {*} res
 */
const createDog = async (req, res) => {
  try {
    const { body } = req;

    const dog = await dogModel.create(body);
    res.json(dog);
  } catch (error) {
    res.status(404).send({ error });
  }
};


/**
 * updtate dog
 * @param {*} req
 * @param {*} res
 */
const updateDog = async (req, res) => {
  try {
    const {query:{id, isDelete}, body } = req; 
  

    if(id && isDelete){
      const dog = await dogModel.findByIdAndUpdate(id, { isDelete }, {
        returnOriginal: false, 
      }); 
      res.send(dog);

    } else if(body){

      const { _id, ...data } = body; 

      const dog = await dogModel.findByIdAndUpdate(_id, data, {
        returnOriginal: false, 
      }); 
      res.json(dog); 
    }

  } catch (error) {
    res.status(404).send({ error });
  }
};





module.exports = {
  getDogs,
  getDogById,
  createDog,
  updateDog,
  
};
