const { dogModel } = require("../models");

const adminDogs = async (req, res) => {
  try {
    const range = JSON.parse(req.query.range);
    const filtro = JSON.parse(req.query.filter);
    const ordenar = JSON.parse(req.query.sort);
    let orden = ordenar[1].toLowerCase() === "asc" ? 1 : -1;

    let find = {
      ...filtro,
      name: new RegExp(filtro.name, "i"),
      isDelete: false,
    };
    let rango = [Number(range[0]), Number(range[1] - range[0])];

    const todos = await dogModel.find(find).sort([["name", 1]]);

    const dogs = await dogModel
      .find(find)
      .skip(rango[0])
      .limit(rango[1] + 1)
      .sort([["name", orden]]);
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

    res.set("Content-Range", todos.length);
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

// const adminDeleteDog = async (req, res) => {
//   try {
//     // const { body } = req;
//     const { id } = req.params;

//     const dogDelete = await dogModel.findByIdAndUpdate(
//       { _id: id },
//       { isDelete: true },
//       {
//         returnOriginal: false,
//       }
//     );

//     res.status(201).send(dogDelete);
//   } catch (e) {
//     res.status(404).send({ error: e });
//   }
// };

const adminDeleteDog = async (req, res) => {
  try {
    const id = req.params.id;
    const {
      query: { filter },
    } = req;

    if (!filter) {
      let dogDelete = await dogModel.findByIdAndUpdate(
        { _id: id },
        { isDelete: true },
        {
          returnOriginal: false,
        }
      );

      res.status(201).send(dogDelete);
    } else {
      let { id } = JSON.parse(filter);
      let listDeleteDogs = [];

      for (let dog of id) {
        let dogsDeletes = await dogModel.findByIdAndUpdate(
          { _id: dog },
          { isDelete: true },
          {
            returnOriginal: false,
          }
        );
        listDeleteUsers.push(dogsDeletes);
      }

      res.status(200).send(listDeleteDogs);
    }
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
