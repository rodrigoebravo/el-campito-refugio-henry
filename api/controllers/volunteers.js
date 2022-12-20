const { volunteersModel } = require("../models");


const CreateVolunteer = async (req, res) => {
    try {
      const { body } = req;
      const volunteer = await volunteersModel.create(body);
      res.status(200).send({ data: volunteer });
    } catch (e) {
      res.status(404).send({ error: e });
    }
  };

  module.exports = {
    CreateVolunteer,
  };