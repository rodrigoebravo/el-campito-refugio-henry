const mongoose = require("mongoose");
// const mongooseDelete = require("mongoose-delete"); // ----> borrado suave sin romper DB

const visitScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    institution: {
      type: String,
      default: "no institution",
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
    dateVisit: { 
      type: Date, 
      default: Date.now 
    },
    timeVisit: { 
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

// visitScheme.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("visits", visitScheme);