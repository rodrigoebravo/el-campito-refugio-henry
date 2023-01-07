const { contributionsModel, usersModel, dogModel } = require("../models/index");

const adminContrib = async (req, res) => {
  try {
    const contributions = await contributionsModel
      .find({ isDelete: false })
      .populate("user dog", {
        _id: 1,
        name: 1,
      });

     
    const contributionMapping = contributions.map((c) => {

      let {user , dog, type, total, ...data} = c.toObject(); 
    
      if ( user == undefined && dog == undefined ){
        return {
          name: "Anónimo",
          type,
          total,
          ...data
        }
      }

      if ( user == {} && dog == {} ){
        return {
          name: "Anónimo",
          type,
          total,
          ...data
        }
      }

      if ( user && dog == undefined ) {
        return {
          name: user.name,
          type,
          total,
          ...data
        }
      }

      if ( user == undefined && dog  ) {
        return {
          nameDog: dog.name,
          type,
          total,
          ...data
        }
      }

      return {
        name: user.name,
        nameUser: user.name,
        nameDog: dog.name,
        type,
        total,
        ...data
      }

    });

    res.status(201).send(contributionMapping);

  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminContribId = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    console.log(id)
    
    const contributions = await contributionsModel
      .findById({ _id: id })
      .populate("user dog", {
        name: 1,
        _id: 1,
        phone: 1,
        email: 1,
      });

    const { user, dog, ...data } = contributions.toObject();

    res.json({
      name: user.name || undefined,
      phone: user.phone || undefined,
      email: user.email || undefined,
      dog: dog.name || undefined,
      idUSer: user._id || undefined,
      idDog: dog._id || undefined,
      ...data,
    });
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

//-------------------------------------------------------------
const adminUpdateContrib = async (req, res) => {
  try {
    const {
      params: { id },
      body: { name, birthday, email, phone, ...dataCont },
    } = req;

    console.log(req.body)

    await contributionsModel.findByIdAndUpdate({ _id: id }, dataCont, {
      returnOriginal: false,
    });

    const u = usersModel.findById({ email });

    await usersModel.findByIdAndUpdate(
      { _id: u._id },
      { name, birthday, email, phone }
    );

    const contri = await contributionsModel
      .findById({ _id: id })
      .populate("user dog", {
        name: 1,
        _id: 1,
      });

    const { user, dog, ...data } = contri.toObject();

    res.json({data: {
      user: user.name,
      dog: dog.name,
      idUser: user._id,
      idDog: dog._id,
      ...data,
    }});
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

//---------------------------------------------------------------

const adminCreateContrib = async (req, res) => {
  try {

    const data  = req.body;  console.log(data);

    const  { email, dogName, type, name, ...dataContibution } = data;   

    // console.log(email); console.log(dogName);  console.log(dataContibution);

    let newCertificate = {},  certificateSee = {}, myDog = {}, rol = [], myGodParent = [] ;

    if ( dogName ) {
      myDog = await dogModel.findOne({name: dogName}); 
    };  console.log(myDog);

    if ( email ) {
      let userDb = await usersModel.findOne({ email: email }) || undefined; console.log("linea 164",userDb);
      // console.log(userDb.email); console.log(email);
      if ( userDb.email !== "email"  ) {
        if ( name ) {  
          userDb = await usersModel.create({ email, name })  
        } else {
          userDb = await usersModel.create({ email });
        }  
      }; 
    };   console.log("linea 171",userDb);
    

    if ( !dogName ) {
    
      if ( !email ) {
        newCertificate = await contributionsModel.create({          
          type,
          ...dataContibution,
        });   
        certificateSee =  await contributionsModel.findById({_id: newCertificate._id});        
        console.log(certificateSee);
        return res.json(certificateSee);
      };

      if ( type === "sponsoreo" && email ) {

        newCertificate = await contributionsModel.create({          
          type,
          user: userDb._id,
          ...dataContibution,
        });      

        if( userDb.hasOwnProperty("roles")  ){
          rol = userDb.roles.find(r=> r === "sponsor") || "";
        };
        if( !userDb.hasOwnProperty("roles") ) userDb.roles = [];
        if( !rol || rol !== "sponsor" ) userDb.roles = [...userDb.roles, "sponsor"];
        userDb.contribution = [...userDb.contribution, newCertificate._id];      
        await userDb.save(); 
        
      };
      if ( type === "donación" && email ) {

        newCertificate = await contributionsModel.create({          
          type,
          user: userDb._id,
          ...dataContibution,
      });      

      if( userDb.hasOwnProperty("roles")  ){
        rol = userDb.roles.find(r=> r === "donante") || "";
      };
      if( !userDb.hasOwnProperty("roles") ) userDb.roles = [];
      if( !rol || rol !== "donante" ) userDb.roles = [...userDb.roles, "donante"];
      userDb.contribution = [...userDb.contribution, newCertificate._id];      
      await userDb.save(); 
      
      };
      

      certificateSee =  await contributionsModel.findById({_id: newCertificate._id})
      .populate("user"); 

      const { user,...dataCertificate  } = certificateSee.toObject(); 

      return res.status(201).send({
        name: user.name,
        idUser: user._id,
        ...dataCertificate
      }); 
    };

    if( email && dogName && type === "padrinazgo" ){ 
      
      newCertificate = await contributionsModel.create({
          user: userDb._id,
          dog: myDog._id,
          type,
          ...dataContibution,
      }); console.log(newCertificate);


      if( userDb.hasOwnProperty("roles")  ){
        rol = userDb.roles.find(r=> r === "padrino") || "";
      };
      if( !userDb.hasOwnProperty("roles") ) userDb.roles = [];
      if( !rol || rol !== "padrino" ) userDb.roles = [...userDb.roles, "padrino"];
      userDb.contribution = [...userDb.contribution, newCertificate._id];      
      await userDb.save();  

      if ( myDog.hasOwnProperty("myGodParent") ) {
        myGodParent = myDog.godparents.find(p=> p === userDb._id) || undefined;
      };
      if( !myGodParent || myGodParent !== userDb._id ) {
        myDog.godparents = [...myDog.godparents, userDb._id];
      }  
      await myDog.save();
      
      certificateSee =  await contributionsModel.findById({_id: newCertificate._id})
      .populate("user dog"); 

      const { user, dog, ...dataCertificate  } = certificateSee.toObject();

      console.log(user); console.log(dog);

      // res.json("hecho")
      
      return res.status(201).send({data:{
        name: user.name,
        idUser: user._id,
        dog: dog.name,
        idDog: dog._id,
        ...dataCertificate
      }}); 
    };     

  
    } catch (error) { res.status(404).send({ error }) }
};

const adminDeleteContrib = async (req, res) => {
  try {
    // const { body } = req;
    const id = req.params.id;

    console.log(id);

    const contributionDelete = await contributionsModel.findByIdAndUpdate(
      { _id: id },
      { isDelete: true },
      {
        returnOriginal: false,
      }
    );
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