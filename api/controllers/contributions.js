const { contributionsModel } = require("../models");


/**
 * create a contributions
 * @param {*} req
 * @param {*} res
 */
const contributionPost = async (req, res) => {
  try {
    const { body } = req;

    const contributions = await contributionsModel.create(body);
    res.json(contributions);
  } catch (error) {
    res.status(404).send({ error });
  }
};



module.exports = {
    contributionPost,
  
};