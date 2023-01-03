const mongoose = require("mongoose"); 


const adoptionScheme = mongoose.Schema({

    dog: {
        type: mongoose.Types.ObjectId,
        ref: "dogs", 
    },
    nameDog: {
        type: String, 
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref:"users", 
    },
    nameUser: {
        type: String, 
    },
    // birthday: { 
    //     type: Date, 
    //     default: Date.now 
    // },
    // email: {
    //     type: String,
    //     unique: true,
    // }, 
    // telephone: {
    //     type: String,
    //     required: true,
    // },
    date: { 
        type: Date, 
        default: Date.now 
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
    // items: { 
    //     type: String, 
    //     enum: ["defensa", "compañia", "guardia", "caza", "deporte y aire libre", "otros"], 
    //     default: "definir"
    // },
    items: [ String ],
    // home: { 
    //     type: String, 
    //     enum: ["departamento", "ph", "casa", "casa en barrio cerrado", "quinta","campo", "otros"], 
    //     default: "definir"
    // },
    home: [ String ],
    // freshAir: { 
    //     type: String, 
    //     enum: ["balcón", "patio", "terraza", "parque", "otros"], 
    //     default: "definir"
    // },
    freshAir: [ String ],
    
    status: {
        type: String,
        enum: ["propietario", "alquilo"],
        default: "definir", 
    },
    authorization: {
        type: String,
        enum: ["si", "no", "tal vez", "definir"],
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
    isDelete: {
        type: Boolean,
        default: false,
      },
    
},{
    timestamps: false, 
    versionKey: false, 
}); 

// adoptionScheme.pre("find", function () {
//     this.where({ isDelete: false });
//   });
  
// adoptionScheme.pre("findOne", function () {
//     this.where({ isDelete: false });
//   });



module.exports = mongoose.model("adoptions", adoptionScheme); 