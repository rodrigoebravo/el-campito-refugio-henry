const mongoose = require("mongoose");
// const mongooseDelete = require("mongoose-delete"); // ----> borrado suave sin romper DB

const interfacesScheme = new mongoose.Schema(
  {
    slider: [ String ],
    
    homeText: {
      type: String,
    },
    imgNosotros: {
      type: String,
    },  
    colaboraText: {
      type: String,
    },
    visitasText: {
      type: String,
    },
    escolarText: {
      type: String,
    },   
    voluntarioText: {
        type: String,
    },
    imgVoluntarios: {
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


// interfacesScheme.pre('find', function() {
//   this.where({ isDelete: false });
// });

// interfacesScheme.pre('findOne', function() {
//   this.where({ isDelete: false });
// });


// interfacesScheme.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("interfaces", interfacesScheme);