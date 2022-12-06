const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const VisitScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    institution: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    amount: {
        type: Number,
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

VisitScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("visits", VisitScheme);