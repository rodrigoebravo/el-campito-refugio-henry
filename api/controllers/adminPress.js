const linkPreviewGenerator = require("link-preview-generator");
const { pressModel } = require("../models");

const adminPress = async (req, res) => {
  try {
    const range = JSON.parse(req.query.range);
    const filtro = JSON.parse(req.query.filter);
    const ordenar = JSON.parse(req.query.sort);
    let orden = ordenar[1].toLowerCase() === "asc" ? 1 : -1;
    let rango = [Number(range[0]), Number(range[1] - range[0])];

    let find = {
      ...filtro,
      media: new RegExp(filtro.media, "i"),
      type: new RegExp(filtro.type, "i"),
      title: new RegExp(filtro.title, "i"),
    };

    const todos = await pressModel.find(find);
    const press = await pressModel
      .find(find)
      .skip(rango[0])
      .limit(rango[1] + 1)
      .sort([["date", orden]]);

    let newPress = [];
    press.forEach((obj, index) => {
      let newObj = {
        _id: obj._id,
        media: obj.media || "",
        type: obj.type || "",
        link: obj.link || "",
        date: obj.date?.toJSON().slice(0, 10) || "",
        title: obj.title || "",
        description: obj.description || "",
        img: { src: obj.img || "", index: index },
        favicon: obj.favicon || "",
        isDelete: obj.isDelete,
      };
      newPress.push(newObj);
    });

    res.set("Content-Range", todos.length);
    res.status(201).send(newPress);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminPressId = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const press = await pressModel.findById({ _id: id });

    let newPress = {
      _id: press._id,
      media: press.media,
      link: press.link || "",
      date: press.date?.toJSON().slice(0, 10) || "",
      title: press.title || "",
      description: press.description || "",
      img: { src: press.img, index: 0 } || { src: "", index: 0 },
      favicon: press.favicon || "",
      isDelete: press.isDelete,
    };
    // console.log(newPress);
    res.json(newPress);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminUpdatePress = async (req, res) => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const press = await pressModel.findByIdAndUpdate({ _id: id }, body, {
      returnOriginal: false,
    });

    res.json({ data: press });
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminCreatePress = async (req, res) => {
  try {
    const { date, media, link, type } = req.body;

    let previewData = {};

    if (link) {
      previewData = await linkPreviewGenerator(link);
    }

    // console.log({
    //   date,
    //   media,
    //   link,
    //   ...previewData
    // })

    // console.log(typeof previewData);

    const press = await pressModel.create({
      date,
      media,
      link,
      type,
      ...previewData,
    });

    res.status(200).send({ data: press });
  } catch (e) {
    res.send({ error: e });
  }
};

const adminDeletePress = async (req, res) => {
  try {
    const id = req.params.id;

    const pressDelete = await pressModel.findByIdAndUpdate(
      { _id: id },
      { isDelete: true },
      {
        returnOriginal: false,
      }
    );

    res.status(201).send(pressDelete);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

// const adminDeletePress = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const {
//       query: { filter },
//     } = req;

//     if (!filter) {
//       let pressDelete = await pressModel.findByIdAndUpdate(
//         { _id: id },
//         { isDelete: true },
//         {
//           returnOriginal: false,
//         }
//       );

//       res.status(201).send(pressDelete);
//     } else {
//       let { id } = JSON.parse(filter);
//       let listDeletePress = [];

//       for (let press of id) {
//         let presssDelete = await pressModel.findByIdAndUpdate(
//           { _id: press },
//           { isDelete: true },
//           {
//             returnOriginal: false,
//           }
//         );
//         listDeletePress.push(presssDelete);
//       }

//       res.status(200).send(listDeletePress);
//     }
//   } catch (e) {
//     res.status(404).send({ error: e });
//   }
// };

module.exports = {
  adminPress,
  adminPressId,
  adminCreatePress,
  adminUpdatePress,
  adminDeletePress,
};
