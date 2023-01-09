const { contributionsModel, usersModel, dogModel } = require("../models/index");

const adminCreateContrib = async (data) => {
    try {
  
      
  
      const  { email, dogName, type, name, ...dataContibution } = data;   
  
      // console.log(email); console.log(dogName);  console.log(dataContibution);
  
      let newCertificate = {},  certificateSee = {}, userDb = {}, myDog = {}, rol = [], myGodParent = [] ;
  
      if ( dogName ) {
        myDog = await dogModel.findOne({name: dogName}); 
      };  console.log(myDog); 
   
      if ( email ) {
        userDb = await usersModel.findOne({ email: email }) || undefined; console.log("linea 164",userDb);
        console.log(email); 
        if ( userDb === undefined ) {
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
  
          return {data:{
            name: "",
            idUser: null,
            phone: "",
            email: "",
            dog: "",
            idDog: null,
            ...certificateSee._doc
          }};
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
  
        return {data:{
          name: user.name,
          idUser: user._id,
          phone: user.phone || "",
          email: user.email || "",
          dog: "",
          idDog: null,
          ...dataCertificate
        }} 
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
        
        return {data:{
          name: user.name,
          idUser: user._id,
          phone: user.phone || "",
          email: user.email || "",
          dog: dog.name,
          idDog: dog._id,
          ...dataCertificate
        }} 
      };     
  
    
      } catch (error) { res.status(404).send({ error }) }
  };

  module.exports = {
    adminCreateContrib
  };