const mongoose = require("mongoose");
// const mongooseDelete = require("mongoose-delete");

const dogScheme = new mongoose.Schema(
  {
    name:  {
      type: String,
    },
    gender: {
        type: String,
        enum: ["macho","hembra"],
        default: "definir",
    },
    age: {
        type: String,
        enum: ["adulto","adulto jóven","viejito","cachorro","definir"],
        default: "definir",

    },
    size: {
        type: String,
        enum: ["chico", "mediano","grande"],
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

    isSponsored: {
      type: Boolean,
      default: false,
    },
    
    toAdopt: {
      type: Boolean,
      default: false,
    },
    adopters: [{
      type: mongoose.Types.ObjectId,
      ref: "users",
    }],

    godparents: [{
      type:mongoose.Types.ObjectId,
      ref: "users",
    }],

    isDelete: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

// dogScheme.plugin(mongooseDelete, { overrideMethods: "all" });

// dogScheme.pre('find', function() {
//   this.where({ isDelete: false });
// });

// dogScheme.pre('findOne', function() {
//   this.where({ isDelete: false });
// });


// dogScheme.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("dogs", dogScheme);