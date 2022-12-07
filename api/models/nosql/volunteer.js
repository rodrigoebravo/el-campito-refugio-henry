const mongoose = require("mongoose"); 


const volunteerScheme = mongoose.Schema({

    name: {
        type: String, 
    },
    age: { 
        type: Date, 
        default: Date.now 
    },
    email: {
        type: String,
        unique: true,
    }, 
    phone: {
        type: String,
        required: true,
    },
    name: {
        type: String, 
    },
    area: {
        type: String, 
    },
    profession: {
        type: String, 
    },
    modality: {
      type:["presencial", "virtual", "hibrido"],
      default: "definir", 
    },
    availability: {
        type: Number, 
    },
    days: [ String ],
    description: {
        type: String, 
    },
    purpose: {
        type: String, 
    },
    vehicle: {
        type: String, 
    },
    carpooling: {
        type:["si", "no","tal vez"],
        default: "definir", 
    },
    question: {
        type: String, 
    },
},{
    timestamps: false, 
    versionKey: false, 
}); 



module.exports = mongoose.model("volunteers", volunteerScheme); 