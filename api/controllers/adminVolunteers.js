const { volunteersModel, usersModel } = require("../models");

const adminVolunteer = async (req, res) => {
  try {
    const range = JSON.parse(req.query.range);
    const filtro = JSON.parse(req.query.filter);
    const ordenar = JSON.parse(req.query.sort);
    let orden = ordenar[1].toLowerCase() === "asc" ? 1 : -1;
    let rango = [Number(range[0]), Number(range[1] - range[0])];

    let find = {
      ...filtro,
      name: new RegExp(filtro.name, "i"),
    };

    const todos = await volunteersModel.find(find);
    const volunteers = await volunteersModel
      .find(find)
      .skip(rango[0])
      .limit(rango[1] + 1)
      .sort([["name", orden]])
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
          name: basicData.name || "", 
          birthday: basicData.birthday || "", 
          email: basicData.email || "",
          phone: basicData.phone || "",
          ...dataVolunteer,
        };
        return response;
      });
    res.set("Content-Range", todos.length);
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
      name: basicData.name || "", 
      birthday: basicData.birthday || "", 
      email: basicData.email || "",
      phone: basicData.phone || "",
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
    } = req; console.log(id); console.log(email);

    await volunteersModel.findByIdAndUpdate({ _id: id }, dataVolunteer, {
      returnOriginal: false,
    }); console.log('volunteer - change');

    const users1 = await usersModel.findOne({ email }) || undefined; console.log("linea 94",users1);
      
    if ( users1 !== undefined )  {
      let roles = users1.roles;
      if ( dataVolunteer.isPending === false ) roles.concat('voluntario');
      if ( !birthday )  birthday = users1.birthday; 
      if ( !phone )  phone = users1.phone; 
      if ( !name ) name = users1.name;

      await usersModel.findByIdAndUpdate({ _id: users1._id },
        { name, birthday, phone, roles }
    ); 
    }; console.log(users1);

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

    res.status(200).send({ data: {
      idUser: _id,
      name: basicData.name || "", 
      birthday: basicData.birthday || "", 
      email: basicData.email || "",
      phone: basicData.phone || "",
      ...dataVolun,
    } });
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminDeleteVolunteer = async (req, res) => {
  try {
    const id = req.params.id;

    const volunteerDelete = await volunteersModel
      .findByIdAndUpdate({ _id: id }, { returnOriginal: false, }
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
