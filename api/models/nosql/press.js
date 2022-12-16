const mongoose = require("mongoose");
// const mongooseDelete = require("mongoose-delete"); // ----> borrado suave sin romper DB

const pressScheme = new mongoose.Schema(
  {
    media: {
        name: String,
    },
    link: {
      type: String,
    },    
    date: { 
        type: Date, 
        default: Date.now 
    },
    description: {
        type: String,
    },
    dogs: [String],
    
        
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

// pressScheme.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("press", pressScheme);