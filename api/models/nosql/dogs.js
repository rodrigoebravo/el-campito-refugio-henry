const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const DogScheme = new mongoose.Schema(
  {
    name:  String,
    gender: {
        type:["macho", "hembra"],
        default: "definir",
    },
    age: {
        type:["adulto", "viejito","cachorro"],
        default: "definir",
    },
    size: {
        type:["chico", "mediano","grande"],
        default: "definir", 
    },
    race: {
        type: String,
    },
    video: {
        type: String,
    },
    images: [ String ],

    features: {
        type: String,
    },
    references: [ String ],
    
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

DogScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("dogs", DogScheme);