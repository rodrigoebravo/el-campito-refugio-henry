const mongoose = require("mongoose");
// const mongooseDelete = require("mongoose-delete");

const dogScheme = new mongoose.Schema(
  {
    name:  {
      type: String,
    },
    gender: {
        type:["macho","hembra"],
        default: "definir",
    },
    age: {
        type:["adulto","adulto jóven","viejito","cachorro","especial"],
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

    isDelete: {
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

// dogScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("dogs", dogScheme);