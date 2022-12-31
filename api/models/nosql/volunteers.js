const mongoose = require("mongoose"); 


const volunteerScheme = mongoose.Schema({

    user: {
        type: mongoose.Types.ObjectId,
        ref: "users",
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    location: {
        type: String, 
    },
    area: {
        type: String, 
    },
    profession: {
        type: String, 
    }, 
    interest: {
        type: String, 
    },
    modality: {
        type: String,
        enum: ["presencial", "virtual", "hibrido"],
        default: "definir", 
    },
    availability: {
        type: Number, 
    },
    days: [ String ],

    clarification: {
        type: String, 
    },
    description: {
        type: String, 
    },
    purpose: {
        type: String, 
    },
    vehicle: {
        type: String, 
    },
    carpooling: {
        type: String,
        enum: ["si", "no","tal vez"],
        default: "definir", 
    },    
    question: {
        type: String, 
    },
    isPending: {
        type: Boolean,
        default: true,
    },
    isDelete: {
        type: Boolean, 
        default: false
    }

},{
    timestamps: false, 
    versionKey: false, 
}); 


// volunteerScheme.pre('find', function() {
//     this.where({ isDelete: false });
//   });
  
// volunteerScheme.pre('findOne', function() {
//     this.where({ isDelete: false });
//   });
  

module.exports = mongoose.model("volunteers", volunteerScheme); 