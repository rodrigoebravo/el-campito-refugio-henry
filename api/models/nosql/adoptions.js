const mongoose = require("mongoose"); 


const adoptionScheme = mongoose.Schema({

    dog: {
        type: String, 
    },
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
    people: {
        type: Number, 
    },
    accordance: {
      type: String,
      enum: ["si", "no", "tal vez"],
      default: "definir", 
    },
    description: {
        type: String, 
    },
    otherAnimals: {
        type: String,
        enum: ["si", "no"],
        default: "definir", 
      },
    expatiate: {
        type: String, 
    },
    castrated: {
        type: String,
        enum: ["si", "no"],
        default: "definir", 
    },
    reason: {
        type: String, 
    },
    vaccinated: {
        type: String,
        enum: ["si", "no"],
        default: "definir", 
    },
    events: {
        type: String, 
    },
    holidays: {
        type: String, 
    },
    babies: {
        type: String, 
    },
    allergies: {
        type: String, 
    },
    items: { 
        type: String, 
        enum: ["defensa", "compañia", "guardia", "caza", "deporte y aire libre", "otros"], 
        default: "definir"
    },
    home: { 
        type: String, 
        enum: ["departamento", "ph", "casa", "casa en barrio cerrado", "quinta","campo", "otros"], 
        default: "definir"
    },
    freshAir: { 
        type: String, 
        enum: ["balcón", "patio", "terraza", "parque", "otros"], 
        default: "definir"
    },
    status: {
        type: String,
        enum: ["propietario", "alquilo"],
        default: "definir", 
    },
    authorization: {
        type: String,
        enum: ["si", "no", "tal vez"],
        default: "definir", 
    },
    sleep: {
        type: String, 
    },
    loneliness: {
        type: String,
    },
    walk: {
        type: String, 
    },
    moving: {
        type: String,
    },
    adaptation: {
        type: String,
        enum: ["si", "no", "tal vez"],
        default: "definir", 
    },
    sterilization: {
        type: String,
    },
    isPending: {
        type: Boolean,
        default: true,
    },
    
},{
    timestamps: false, 
    versionKey: false, 
}); 



module.exports = mongoose.model("adoptions", adoptionScheme); 