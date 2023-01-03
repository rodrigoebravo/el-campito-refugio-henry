const { volunteersModel, usersModel } = require("../models");
const json = require("./voluntarios.json");

const pushDBvolunteers =  () => {
  try {

    json.forEach(async(element) => {

        let email = element.email;
        console.log(email);
        const data = {
            location: element.location,
            area: element.area,
            profession: element.profession, 
            interest: element.interest,
            modality: element.modality, 
            availability: element.availability,
            days: element.days,
            clarification: element.clarification,
            description: element.description,
            purpose: element.purpose,
            vehicle: element.vehicle,
            carpooling: element.carpooling,    
            question: element.question
        };

        //buscar usuario
        const userDb = await usersModel.findOne({ email });

        if (!userDb) {

            const { name, birthday, email, phone, pass, image } = element;
            

            const newUser = await usersModel.create({
                name,
                birthday,
                email,
                phone,
                pass,
                image,
            });            

            const volunteer = await volunteersModel.create({
                user: newUser._id,
                ...data,
            });

            newUser.volunteer = volunteer._id; // id data volunteer
            await newUser.save();

            const newVolunteer = await volunteersModel.findById({ _id: volunteer._id }).populate("user", {
                volunteer: 0,
                contribution: 0,
                adoptions: 0,
                isDelete: 0,
                pass: 0

                });


                const {user:{_id:idUser, ...basicData }, ...dataVolunteer} = newVolunteer.toObject(); 

                return {
                idUser,
                ...basicData,
                ...dataVolunteer
                }; 

        } else {

        const newVolunteer = await volunteersModel.create({
            user: userDb._id,
            ...data,
        });

        userDb.volunteer = newVolunteer._id; // id data volunteer
        await userDb.save();

        const volunteerDb = await volunteersModel.findById({ _id: newVolunteer._id }).populate("user", {
            volunteer: 0,
            contribution: 0,
            adoptions: 0,
            isDelete: 0,
            pass: 0

            });

        
            const {user:{_id:idUser, ...basicData }, ...dataVolunteer} = volunteerDb.toObject(); 

            return {
            idUser,
            ...basicData,
            ...dataVolunteer
            }; 
        }
            
    });
    
  } catch (e) {
    console.log({ error: e });
  }
};



module.exports = {
  pushDBvolunteers,
};
