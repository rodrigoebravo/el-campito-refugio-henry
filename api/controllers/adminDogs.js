const { dogModel } = require("../models");

const adminDogs = async (req, res) => {
  try {
    const filtro = JSON.parse(req.query.filter);
    let dogs = [];
    const ordenar = JSON.parse(req.query.sort);
    let orden = ordenar[1].toLowerCase() || "asc";
    if (filtro) {
      if (filtro.name) {
        const { name } = filtro;

        dogs = await dogModel
          .find({ name: new RegExp(name, "i") })
          .sort({ name: orden });
      } else {
        dogs = await dogModel.find(filtro).sort({ name: orden });
      }
    } else {
      dogs = await dogModel.find({}).sort({ name: orden });
    }
    let newDogs = [];
    dogs.forEach((obj) => {
      let aux = [];
      if (obj.images && obj.images.length > 0) {
        obj.images.forEach((i, index) => {
          aux.push({ src: i || "", index: index });
        });
      }

      let newObj = {
        _id: obj._id || "",
        name: obj.name || "",
        gender: obj.gender || "",
        age: obj.age || "",
        size: obj.size || "",
        race: obj.race || "",
        video: obj.video || "",
        images: aux,
        features: obj.features || "",
        references: obj.references || [],
        isSponsored: obj.isSponsored || false,
        toAdopt: obj.toAdopt || false,
        adopters: obj.adopters || [],
        godparents: obj.godparents || [],
      };
      newDogs.push(newObj);
    });

    res.status(201).send(newDogs);
  } catch (error) {
    res.status(400).send({ error: "Error en la solicitud" });
  }
};

const adminDogsId = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const dog = await dogModel.findById({ _id: id });
    let { images: imgs, ...data } = dog.toObject();

    res.json({
      ...data,
      images: imgs.map((img, index) => {
        return {
          src: img || "",
          index,
        };
      }),
    });
  } catch (e) {
    res.status(404).send({ error: e });
  }
};
const adminUpdateDog = async (req, res) => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const dog = await dogModel.findByIdAndUpdate({ _id: id }, body, {
      returnOriginal: false,
    });

    res.json({ data: dog });
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminCreateDog = async (req, res) => {
  try {
    const { body } = req;

    const dog = await dogModel.create(body);

    res.status(200).send({ data: dog });
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminDeleteDog = async (req, res) => {
  try {
    // const { body } = req;
    const { id } = req.params;

    const dogDelete = await dogModel.findByIdAndUpdate(
      { _id: id },
      { isDelete: true },
      {
        returnOriginal: false,
      }
    );

    res.status(201).send(dogDelete);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

module.exports = {
  adminDogs,
  adminDogsId,
  adminCreateDog,
  adminUpdateDog,
  adminDeleteDog,
};
