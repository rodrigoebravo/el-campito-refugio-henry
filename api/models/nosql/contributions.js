const mongoose = require("mongoose");
// const mongooseDelete = require("mongoose-delete"); // ----> borrado suave sin romper DB

const contributionsScheme = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "users", 
    },

    dog: {
      type: mongoose.Types.ObjectId,
      ref: "dogs",
    },
    type: {
        type: String,
        enum: ["donación", "padrinazgo", "membresía","sponsoreo"],
        default: "definir", 
    },
    detail: {
      type: String,
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    total: {
        type: Number,
    },
    method: {
        type: String,
    },
  
    isPending: {
      type: Boolean,
      default: false,
    },
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

// contributionsScheme.pre("find", function () {
//   this.where({ isDelete: false });
// });

// contributionsScheme.pre("findOne", function () {
//   this.where({ isDelete: false });
// });

// contributionsScheme.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("contributions", contributionsScheme);