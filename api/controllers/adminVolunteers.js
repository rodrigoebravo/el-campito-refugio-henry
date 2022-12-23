const { volunteersModel} = require("../models");

const adminVolunteer = async (req, res) => {
  try {

    const volunteers = await volunteersModel.find({}).populate("user", {
      contribution: 0,
      adoptions: 0,
      isDelete: 0,
      volunteer: 0,
      pass: 0
    });
   
    const volunteersMapping = volunteers.map(v => {
      const {user:{_id, ...basicData }, ...dataVolunteer} = v.toObject();
      return {
        idUser: _id,
        ...basicData,
        ...dataVolunteer
      }
    })

    res.status(201).send(volunteersMapping);

  } catch (error) {
    res.status(404).send({ error });
  }
};

const adminVolunteerId = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const volunteer = await volunteersModel.findById({ _id: id }).populate("user", {
      contribution: 0,
      adoptions: 0,
      isDelete: 0,
      volunteer: 0,
      pass: 0
    });

    const {user:{_id, ...basicData }, ...dataVolunteer} = volunteer.toObject(); 

    res.status(200).send({
      idUser: _id,
      ...basicData,
      ...dataVolunteer
    }); 

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
