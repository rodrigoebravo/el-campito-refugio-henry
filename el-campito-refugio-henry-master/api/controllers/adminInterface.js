const { interfacesModel } = require("../models");

const adminInterface = async (req, res) => {
  try {
    const interface = await interfacesModel.find({});

    let aux = [];
    if (interface[0].slider && interface[0].slider.length > 0 ){
        interface[0].slider.forEach((i, index)=>{
        aux.push({ src: i || "", index: index })
      });
    };
        
    let newObj = {
      _id: interface[0]._id || "",
      imgVoluntarios: { src: interface[0].imgVoluntarios || "", index:99 },
      voluntarioText: interface[0].voluntarioText || "",
      escolarText: interface[0].escolarText || "",
      visitasText: interface[0].visitasText || "",
      colaboraText: interface[0].colaboraText || "",
      imgNosotros: { src: interface[0].imgVoluntarios || "", index:98 },
      homeText: interface[0].homeText || "",
      slider: aux || []
    };

    res.json([newObj]);
  } catch (error) {
    res.status(404).send({ error });
  }
};


const adminInterfaceId = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const interface = await interfacesModel.findById({ _id: id });

    let aux = [];
      if (interface.slider && interface.slider.length > 0 ){
        interface.slider.forEach((i, index)=>{
        aux.push({ src: i || "", index: index })
      });
    };
        
    let newObj = {
      _id: interface._id || "",
      imgVoluntarios: { src: interface.imgVoluntarios || "", index:99 },
      voluntarioText: interface.voluntarioText || "",
      escolarText: interface.escolarText || "",
      visitasText: interface.visitasText || "",
      colaboraText: interface.colaboraText || "",
      imgNosotros: { src: interface.imgVoluntarios || "", index:98 },
      homeText: interface.homeText || "",
      slider: aux || []
    };

    res.json(newObj);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminCreateInterface = async (req, res) => {
  try {
    const { body } = req;
    
    const interfaces = await interfacesModel.create(body);
    res.status(200).send({ data: interfaces });
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminUpdateInterface = async (req, res) => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const interface = await interfacesModel.findByIdAndUpdate(
      { _id: id },
      body,
      {
        returnOriginal: false,
      }
    );

    res.json({ data: interface });
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminDeleteInterface = async (req, res) => {
  try {
    const id = req.params.id;

    let borrado = await interfacesModel.findByIdAndUpdate(
      { _id: id },
      { isDelete: true },
      {
        returnOriginal: false,
      }
    );

    res.status(201).send(borrado);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};


module.exports = {
    adminInterface,
    adminInterfaceId,
    adminUpdateInterface,
    adminCreateInterface,
    adminDeleteInterface
};
