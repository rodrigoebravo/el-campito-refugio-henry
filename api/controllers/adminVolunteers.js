const { volunteersModel } = require("../models");

const adminVolunteer = async (req, res) => {
  try {
    const volunteer = await volunteersModel.find({});
    res.status(201).send(volunteer);
  } catch (error) {
    res.status(404).send({ error });
  }
};

const adminVolunteerId = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const volunteer = await volunteersModel.findById({ _id: id });
    res.json(volunteer);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminUpdateVolunteer = async (req, res) => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const volunteer = await volunteersModel.findByIdAndUpdate(
      { _id: id },
      body,
      {
        returnOriginal: false,
      }
    );

    res.json({ data: volunteer });
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminDeleteVolunteer = async (req, res) => {
  try {
    const id = req.params.id;

    const volunteerDelete = await volunteersModel.findByIdAndUpdate(
      { _id: id },
      { isDelete: true },
      {
        returnOriginal: false,
      }
    );

    res.status(201).send(volunteerDelete);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

module.exports = {
  adminVolunteer,
  adminVolunteerId,
  adminUpdateVolunteer,
  adminDeleteVolunteer,
};
