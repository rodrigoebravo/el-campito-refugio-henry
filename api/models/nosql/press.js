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


pressScheme.pre('find', function() {
  this.where({ isDelete: false });
});

pressScheme.pre('findOne', function() {
  this.where({ isDelete: false });
});


// pressScheme.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("press", pressScheme);