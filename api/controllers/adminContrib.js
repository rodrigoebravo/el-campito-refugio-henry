const { contributionsModel, usersModel, dogModel } = require("../models");

const adminContrib = async (req, res) => {
    try {
      const contributions = await contributionsModel.find({}).populate("user dog", {
        name: 1, 
        _id: 1,
        email:1,
        phone: 1
      }); 

      const mappingContributions = contributions.map(c => {
        let { user , dog, ...data } = c.toObject(); 

        if(!user.name){
          return {
            name: "anónimo",
            idUser: user._id,
            nameDog: dog.name,
            idDog: dog._id,
            ...data
          }
        }

        return {
          name: user.name,
          email: user.email,
          phone: user.phone,
          nameDog: dog.name,
          idUser: user._id,
          idDog: dog._id,
          ...data
        }
      }); 

      res.status(201).send(mappingContributions);

    } catch (e) {
      res.status(404).send({ error: e });
    }
  };
  
  const adminContribId = async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
  
      const contributions = await contributionsModel.findById({ _id: id }).populate("user dog", {
        name: 1,
        _id: 1
      });

      const { user, dog, ...data } = contributions.toObject(); 

      res.json({
        user: user.name || null,
        dog: dog.name || null,
        idUSer: user._id || null,
        idDog: dog._id || null,
        ...data
      });
    } catch (e) {
      res.status(404).send({ error: e });
    }
  };
  
  const adminUpdateContrib = async (req, res) => {
    try {
      const {
        params: { id },
        body: { name, birthday, email, phone,  ...dataCont },
      } = req;
  
      await contributionsModel.findByIdAndUpdate({ _id: id }, dataCont, {
        returnOriginal: false,
      });

      const u = usersModel.findById({ email });

      await usersModel.findByIdAndUpdate({ _id: u._id },
        { name, birthday, email, phone }
      );
  
      const contri = await contributionsModel.findById({ _id: id }).populate("user dog", {
        name: 1,
        _id: 1
      });

      const { user, dog, ...data } = contri.toObject(); 

      res.json({
        user: user.name,
        dog: dog.name,
        idUser: user._id,
        idDog: dog._id,
        ...data
      });

    } catch (e) {
      res.status(404).send({ error: e });
    }
  };
  
  const adminCreateContrib = async (req, res) => {
    try {
      const {
        body: { name, email, phone, idDog, type, ...dataContibution },
      } = req;
  
      // console.log(name, email, phone, idDog, type, dataContibution); 
  
      if(name == undefined && email == undefined && type == undefined){ 
  
         const newCertificate = await contributionsModel.create({
          // user: user._id,
          dog: idDog,
          type:"donación",
          ...dataContibution,
        });
  
        const certificate = await contributionsModel.findById({_id: newCertificate._id}).populate("dog", {
          name: 1,
        }); 
  
  
        const { dog, ...dataCertificate } = certificate.toObject(); //salida 
  
        res.status(201).send({
          user: "Anónimo",
          dog: dataDog.name,
          idDog,
          ...dataCertificate
        }); 
  
        // res.json(certificate); 
  
      }else {
  
        let userDb = await usersModel.findOne({ email });
    
        if (!userDb) {
          userDb = await usersModel.create({
            name,
            email,
            phone,
          });
        }
    
        await usersModel.findByIdAndUpdate(
          { _id: userDb._id },
          {
            name,
            email,
            phone
          },
        );
    
        const newCertificate = await contributionsModel.create({
          user: userDb._id,
          dog: idDog,
          type,
          ...dataContibution,
        });
  
        if(name && email){
          
          userDb.contribution = [...userDb.contribution, newCertificate._id];
          await userDb.save();
        }
    
        if (type === "padrinazgo") {
          const dog = await dogModel.findById({ _id: idDog });
    
          dog.godparents = [...dog.godparents, userDb._id];
          await dog.save();
        }
  
        const certificate = await contributionsModel.findById({_id: newCertificate._id}).populate("user dog"); 
  
        const { user, dog, ...dataCertificate  } = certificate.toObject(); 
  
        res.status(201).send({
          user: user.name,
          idUser: user._id,
          dog: dog.name,
          idDog,
          ...dataCertificate
        }); 
  
        // res.json(certificate)
      }
      
    } catch (error) {
      res.status(404).send({ error });
    }
  };
  
  const adminDeleteContrib = async (req, res) => {
    try {
      // const { body } = req;
      const id = req.params.id;
  
      console.log(id);
  
      const contributionDelete = await contributionsModel.findByIdAndUpdate({_id: id}, {isDelete: true}, {
        returnOriginal: false,
      });
      res.status(201).send(contributionDelete);
    } catch (e) {
      res.status(404).send(e);
    }
  };


  module.exports = {
    adminCreateContrib,
    adminDeleteContrib,
    adminContrib,
    adminUpdateContrib,
    adminContribId,
  };