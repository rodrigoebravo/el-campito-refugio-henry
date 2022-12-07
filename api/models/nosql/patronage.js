
const mongoose = require("mongoose");
// const mongooseDelete = require("mongoose-delete"); // ----> borrado suave sin romper DB

const patronageScheme = new mongoose.Schema(
  {
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
    
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

// patronageScheme.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("patronages", patronageScheme);