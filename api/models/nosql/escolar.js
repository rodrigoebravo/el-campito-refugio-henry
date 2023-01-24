
const mongoose = require("mongoose");
// const mongooseDelete = require("mongoose-delete"); // ----> borrado suave sin romper DB

const escolarScheme = new mongoose.Schema(
  {    
    category: {
      type: String,
    },
    link: {
      type: String,
    },    
    date: { 
        type: Date, 
        default: Date.now 
    },
    title: {
      type: String,
    },
    description: {
        type: String,
    },
    img: {
      type: String,
    },
    favicon: {
      type: String,
    },    
    isDelete: {
      type: Boolean, 
      default: false
    }
        
  },
  {
    timestamps: false,
    versionKey: false,
  }
);


// escolarScheme.pre('find', function() {
//   this.where({ isDelete: false });
// });

// escolarScheme.pre('findOne', function() {
//   this.where({ isDelete: false });
// });


// escolarScheme.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("escolar", escolarScheme);