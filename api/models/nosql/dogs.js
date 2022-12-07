const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const dogScheme = new mongoose.Schema(
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

dogScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("dogs", dogScheme);