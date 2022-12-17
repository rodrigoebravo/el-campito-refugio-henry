const { adoptionsModel } = require("../models");


/**
 * create a adoptions
 * @param {*} req
 * @param {*} res
 */
const adoptionPost = async (req, res) => {
  try {
    const { body } = req;

    const adoptions = await adoptionsModel.create(body);
    res.json(adoptions);
  } catch (error) {
    res.status(404).send({ error });
  }
};



module.exports = {
    adoptionPost,
  
};