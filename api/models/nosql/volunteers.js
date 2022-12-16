const mongoose = require("mongoose"); 


const volunteerScheme = mongoose.Schema({

    name: {
        type: String, 
    },
    birthday: { 
        type: Date, 
        default: Date.now 
    },
    email: {
        type: String,
        unique: true,
    }, 
    telephone: {
        type: String,
        required: true,
    },
    location: {
        type: String, 
    },
    area: {
        type: String, 
    },
    profession: {
        type: String, 
    }, 
    interest: {
        type: String, 
    },
    modality: {
        type: String,
        enum: ["presencial", "virtual", "hibrido"],
        default: "definir", 
    },
    availability: {
        type: Number, 
    },
    days: [ String ],

    clarification: {
        type: String, 
    },
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
        type: String,
        enum: ["si", "no","tal vez"],
        default: "definir", 
    },    
    question: {
        type: String, 
    },
    isPending: {
        type: Boolean,
        default: false,
    },


},{
    timestamps: false, 
    versionKey: false, 
}); 



module.exports = mongoose.model("volunteers", volunteerScheme); 