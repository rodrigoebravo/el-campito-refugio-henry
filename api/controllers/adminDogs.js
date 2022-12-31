const { dogModel } = require("../models");


const adminDogs = async (req, res) => {
  try {




    
    const dogs = await dogModel.find({});

     // console.log(dogs);
     let newDogs = [];
     dogs.forEach((obj)=>{

      let aux = [];
      if (obj.images && obj.images.length > 0 ){
        obj.images.forEach((i, index)=>{
        aux.push({ src: i || "", index: index })
      });
      };
 
      let newObj = {
        _id: obj._id || "", name: obj.name || "", gender: obj.gender || "",
        age: obj.age || "", size: obj.size || "", race: obj.race || "", 
        video: obj.video || "", images: aux, features: obj.features || "",
        references: obj.references || [], isSponsored: obj.isSponsored || false, 
        toAdopt: obj.toAdopt || false, adopters: obj.adopters || [],
        godparents: obj.godparents || [],  
      };
       newDogs.push(newObj);
     })
     console.log(newDogs);
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

    let aux = [];
    if (dog.images && dog.images.length > 0 ){
    dog.images.forEach((i, index)=>{
      aux.push({ src: i || "", index: index })
    });
    };
    let newObj = {
      _id: dog._id || "", name: dog.name || "", gender: dog.gender || "",
      age: dog.age || "", size: dog.size || "", race: dog.race || "", 
      video: dog.video || "", images: aux || [], features: dog.features || "",
      references: dog.references || [], isSponsored: dog.isSponsored || false, 
      toAdopt: dog.toAdopt || false, adopters: dog.adopters || [],
      godparents: dog.godparents || [],  
    };

    res.json(newObj);

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

    console.log(req.body)

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


    console.log(body);

    // body.images = body.images.split(' '); // .replace('[','').replace(']','')


    const dog = await dogModel.create(body);

    res.status(200).send({data: dog});
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminDeleteDog = async (req, res) => {
  try {
    // const { body } = req;
    const { id }= req.params;

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
