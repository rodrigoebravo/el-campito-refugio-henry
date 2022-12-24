const { volunteersModel, usersModel } = require("../models");

const adminVolunteer = async (req, res) => {
  try {
    const volunteers = await volunteersModel.find({}).populate("user", {
      contribution: 0,
      adoptions: 0,
      isDelete: 0,
      volunteer: 0,
      pass: 0,
    });

    const volunteersMapping = volunteers.map((v) => {
      const {
        user: { _id, ...basicData },
        ...dataVolunteer
      } = v.toObject();
      
      return {
        idUser: _id,
        ...basicData,
        ...dataVolunteer,
      };
    });

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

    const volunteer = await volunteersModel
      .findById({ _id: id })
      .populate("user", {
        contribution: 0,
        adoptions: 0,
        isDelete: 0,
        volunteer: 0,
        pass: 0,
      });

    const {
      user: { _id, ...basicData },
      ...dataVolunteer
    } = volunteer.toObject();

    res.status(200).send({
      idUser: _id,
      ...basicData,
      ...dataVolunteer,
    });
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminUpdateVolunteer = async (req, res) => {
  try {
    const {
      params: { id },
      body: { name, age, birthday, email, phone, pass, image, ...dataVolunteer },
    } = req;

    const volunteerUpdate = await volunteersModel.findByIdAndUpdate({ _id: id },
      dataVolunteer,
      {
        returnOriginal: false,
      }
    ); 

    await usersModel.findByIdAndUpdate({ _id: volunteerUpdate.user._id },
      { name, birthday, email, phone }
    );

    const volunteer = await volunteersModel.findById({ _id: id }).populate("user", {
      contribution: 0,
      adoptions: 0,
      isDelete: 0,
      volunteer: 0,
      pass: 0,
    });

    const {
      user: { _id, ...basicData },
      ...dataVolun
    } = volunteer.toObject();

    res.status(200).send({data: { idUser: _id, ...basicData, ...dataVolun }});
    
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
    ).populate("user",{  contribution: 0,
      adoptions: 0,
      isDelete: 0,
      volunteer: 0,
      pass: 0,});

      const {
        user: { _id, ...basicData },
        ...dataVolun
      } = volunteerDelete.toObject();

    res.status(201).send({ idUser: _id, ...basicData, ...dataVolun });
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
