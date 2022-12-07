
const mongoose = require("mongoose");
// const mongooseDelete = require("mongoose-delete"); // ----> borrado suave sin romper DB

const patronageScheme = new mongoose.Schema(
  { 
    dog: {
        name: String,
        id: Number
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    description: {
        type: String,
    },    
    total: {
        type: Number,
    },
    method: {
        type: String,
    },
    
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

// patronageScheme.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("patronages", patronageScheme);