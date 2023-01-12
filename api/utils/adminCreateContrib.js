const { contributionsModel, usersModel, dogModel } = require("../models/index");

const adminCreateContrib = async (data) => {
    try {
  
      
  
      const  { email, nameDog, type, name, ...dataContibution } = data;   
  
      // console.log(email); console.log(nameDog);  console.log(dataContibution);
  
      let newCertificate = {},  certificateSee = {}, userDb = {}, myDog = {}, rol = [], myGodParent = [] ;
  
      if ( nameDog ) {
        myDog = await dogModel.findOne({name: nameDog}); 
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
      };   console.log("linea 28",userDb);
      
  
      if ( !nameDog ) {
      
        if ( !email ) {
          newCertificate = await contributionsModel.create({          
            type,
            ...dataContibution,
          });   
          certificateSee =  await contributionsModel.findById({_id: newCertificate._id});        
          console.log(certificateSee);
  
          console.log({data:{
            name: "",
            idUser: null,
            phone: "",
            email: "",
            dog: "",
            idDog: null,
            ...certificateSee._doc
          }});
        };
  
        if ( type === "sponsoreo" && email ) {
  
          newCertificate = await contributionsModel.create({          
            type,
            user: userDb._id,
            ...dataContibution,
          });      
  
          rol = userDb.roles?.find(r=> r === "sponsor") ||  undefined;
          userDb.roles = userDb.roles || [];          
          if( !rol || rol !== "sponsor" ) userDb.roles = [...userDb.roles, "sponsor"];
          userDb.contribution = [...userDb.contribution, newCertificate._id];      
          // await userDb.save(); 
          await usersModel.findByIdAndUpdate({ _id: userDb._id }, 
            { contribution: userDb.contribution, roles: userDb.roles }, {
            returnOriginal: false,
          });
        };
        console.log("linea 69", userDb._id);

        if ( type === "donación" && email ) {
  
          newCertificate = await contributionsModel.create({          
            type,
            user: userDb._id,
            ...dataContibution,
        });      console.log("linea 77" );
  
        
        rol = userDb.roles?.find(r=> r === "donante") ||  undefined;
        userDb.roles = userDb.roles || [];
        if( !rol || rol !== "donante" ) userDb.roles = [...userDb.roles, "donante"];
        userDb.contribution = [...userDb.contribution, newCertificate._id];              
        // await userDb.save(); 
        await usersModel.findByIdAndUpdate({ _id: userDb._id }, 
          { contribution: userDb.contribution, roles: userDb.roles }, {
          returnOriginal: false,
        });
        
        };  console.log("linea 87", userDb.roles);
        
  
        certificateSee =  await contributionsModel.findById({_id: newCertificate._id})
        .populate("user"); 
  
        const { user,...dataCertificate  } = certificateSee.toObject(); 

        console.log("linea 95:", dataCertificate);
  
        console.log({data:{
          name: user.name,
          idUser: user._id,
          phone: user.phone || "",
          email: user.email || "",
          nameDog: "",
          idDog: null,
          ...dataCertificate
        }} )
      };
  
      if( email && nameDog && type === "padrinazgo" ) { 
        
        newCertificate = await contributionsModel.create({
            user: userDb._id,
            dog: myDog._id,
            type,
            ...dataContibution,
        }); console.log(newCertificate);
  
        rol = userDb.roles?.find(r=> r === "padrino") ||  undefined;
        userDb.roles = userDb.roles || [];
        if( !rol || rol !== "padrino" ) userDb.roles = [...userDb.roles, "padrino"];
        userDb.contribution = [...userDb.contribution, newCertificate._id];      
        // await userDb.save();  
        await usersModel.findByIdAndUpdate({ _id: userDb._id }, 
          { contribution: userDb.contribution, roles: userDb.roles }, {
          returnOriginal: false,
        });
  
        
        myGodParent = myDog.godparents?.find(p=> p === userDb._id) || undefined;
        myDog.godparents = myDog.godparents || [];
        if( !myGodParent || myGodParent !== userDb._id ) {
          myDog.godparents = [...myDog.godparents, userDb._id];
        }  
        // await myDog.save();
        await dogModel.findByIdAndUpdate({ _id: myDog._id }, 
          { godparents: myDog.godparents }, {
          returnOriginal: false,
        });
        
        certificateSee =  await contributionsModel.findById({_id: newCertificate._id})
        .populate("user dog"); 
  
        const { user, dog, ...dataCertificate  } = certificateSee.toObject();
  
        console.log(user); console.log(dog);
  
        // res.json("hecho")
        
        console.log({data:{
          name: user.name,
          idUser: user._id,
          phone: user.phone || "",
          email: user.email || "",
          nameDog: dog.name,
          idDog: dog._id,
          ...dataCertificate
        }} )
      };     
  
    
      } catch (error) { res.status(404).send({ error }) }
  };

  module.exports = {
    adminCreateContrib
  };