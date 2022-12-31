const { volunteersModel, usersModel } = require("../models");

const adminVolunteer = async (req, res) => {
  try {
    const filtro = JSON.parse(req.query.filter);
    const checkFiltro = filtro || {};
    const ordenar = JSON.parse(req.query.sort);
    const orden = ordenar[1].toLowerCase() || "asc";
    console.log(orden);

    const volunteers = await volunteersModel
      .find(checkFiltro)
      .sort({ name: orden })
      .populate("user", {
        contribution: 0,
        adoptions: 0,
        isDelete: 0,
        volunteer: 0,
        pass: 0,
      });
    // volunteers = JSON.parse(volunteers)
    // console.log(volunteers);
    const volunteersMapping = volunteers
      .filter((v) => v.user)
      .map((v) => {
        // console.log(v);
        const {
          user: { _id, ...basicData },
          ...dataVolunteer
        } = v.toObject();

        let response = {
          idUser: _id,
          ...basicData,
          ...dataVolunteer,
        };
        return response;
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
      body: { name, birthday, email, phone, ...dataVolunteer },
    } = req;

    await volunteersModel.findByIdAndUpdate({ _id: id }, dataVolunteer, {
      returnOriginal: false,
    });

    const users1 = await usersModel.findOne({ email });

    let roles = users1.roles;

    if (dataVolunteer.isPending === false) roles.concat("voluntario");

    await usersModel.findByIdAndUpdate(
      { _id: users1._id },
      { name, birthday, phone, roles, email }
    );

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
      ...dataVolun
    } = volunteer.toObject();

    res.status(200).send({ data: { idUser: _id, ...basicData, ...dataVolun } });
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminDeleteVolunteer = async (req, res) => {
  try {
    const id = req.params.id;

    const volunteerDelete = await volunteersModel
      .findByIdAndUpdate(
        { _id: id },
        { isDelete: true },
        {
          returnOriginal: false,
        }
      )
      .populate("user", {
        contribution: 0,
        adoptions: 0,
        isDelete: 0,
        volunteer: 0,
        pass: 0,
      });

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
