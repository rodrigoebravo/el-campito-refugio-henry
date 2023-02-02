const linkPreviewGenerator = require("link-preview-generator");
const { escolarModel } = require("../models");

const adminEscolar = async (req, res) => {
  try {
    const range = JSON.parse(req.query.range);
    const filtro = JSON.parse(req.query.filter);
    const ordenar = JSON.parse(req.query.sort);
    let orden = ordenar[1].toLowerCase() === "asc" ? 1 : -1;
    let rango = [Number(range[0]), Number(range[1] - range[0])];

    let find = {
      ...filtro,
      category: new RegExp(filtro.category, "i"),
      title: new RegExp(filtro.title, "i"),
      isDelete: false,
    };

    // const todos = await escolarModel.find(find);
    const escolar = await escolarModel
      .find(find)
      .skip(rango[0])
      .limit(rango[1] + 1)
      .sort([["date", orden]]);

    let newEscolar = [];
    escolar.forEach((obj, index) => {
      let newObj = {
        _id: obj._id,
        category: obj.category || "",
        link: obj.link || "",
        date: obj.date?.toJSON().slice(0, 10) || "",
        title: obj.title || "",
        description: obj.description || "",
        img: { src: obj.img || "", index: index },
        favicon: obj.favicon || "",
        isDelete: obj.isDelete,
      };
      newEscolar.push(newObj);
    });

    // res.set("Content-Range", todos.length);
    // console.log(newEscolar); 
    res.status(201).send(newEscolar);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminEscolarId = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const escolar = await escolarModel.findById({ _id: id });

    let newEscolar = {
      _id: escolar._id,
      category: escolar.category,
      link: escolar.link || "",
      date: escolar.date?.toJSON().slice(0, 10) || "",
      title: escolar.title || "",
      description: escolar.description || "",
      img: { src: escolar.img, index: 0 } || { src: "", index: 0 },
      favicon: escolar.favicon || "",
      isDelete: escolar.isDelete,
    };
    // console.log(newEscolar);
    res.json(newEscolar);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminUpdateEscolar = async (req, res) => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const escolar = await escolarModel.findByIdAndUpdate({ _id: id }, body, {
      returnOriginal: false,
    });

    res.json({ data: escolar });
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminCreateEscolar = async (req, res) => {
  try {
    const { date, category, link, type } = req.body;

    let previewData = {};

    if (link) {
      previewData = await linkPreviewGenerator(link);
    }

    // console.log({
    //   date,
    //   category,
    //   link,
    //   ...previewData
    // })

    // console.log(typeof previewData);

    const escolar = await escolarModel.create({
      date,
      category,
      link,
      type,
      ...previewData,
    });

    res.status(200).send({ data: escolar });
  } catch (e) {
    res.send({ error: e });
  }
};

const adminDeleteEscolar = async (req, res) => {
  try {
    const id = req.params.id;

    const escolarDelete = await escolarModel.findByIdAndUpdate(
      { _id: id },
      { isDelete: true },
      {
        returnOriginal: false,
      }
    );

    res.status(201).send(escolarDelete);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

// const adminDeleteEscolar = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const {
//       query: { filter },
//     } = req;

//     if (!filter) {
//       let escolarDelete = await escolarModel.findByIdAndUpdate(
//         { _id: id },
//         { isDelete: true },
//         {
//           returnOriginal: false,
//         }
//       );

//       res.status(201).send(escolarDelete);
//     } else {
//       let { id } = JSON.parse(filter);
//       let listDeleteEscolar = [];

//       for (let escolar of id) {
//         let escolarsDelete = await escolarModel.findByIdAndUpdate(
//           { _id: escolar },
//           { isDelete: true },
//           {
//             returnOriginal: false,
//           }
//         );
//         listDeleteEscolar.push(escolarsDelete);
//       }

//       res.status(200).send(listDeleteEscolar);
//     }
       
//   } catch (e) {
//     res.status(404).send({ error: e });
//   }
// };

module.exports = {
  adminEscolar,
  adminEscolarId,
  adminCreateEscolar,
  adminUpdateEscolar,
  adminDeleteEscolar,
};
