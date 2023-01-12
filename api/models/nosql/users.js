const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

const usersScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "requerir"
    },

    birthday: {
      type: Date,
      // default: "requerir"
    },
    email: {
      type: String,
      unique: true,
    },
    phone: {
      type: String,
    },
    pass: {
      type: String,
      required: true
    },
    roles: { 
      type: [String], 
      enum: ["public", "superAdmin", "admin", "voluntario", "equipo1", "equipo2", "equipo3", "visitante", "donante", "padrino", "sponsor", "adoptante"], 
      default: ["public"]

    }, 
    image: {
      type: String,
      default: "Not image"
    },
    volunteer: {
      type: mongoose.Types.ObjectId,
      ref: "volunteers",
    },
    contribution: [
      {
        type: mongoose.Types.ObjectId,
        ref: "contributions",
      },
    ],
    adoptions: [
      {
        type: mongoose.Types.ObjectId,
        ref: "adoptions",
      },
    ],
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

// type:["public", "superAdmin", "admin", "equipo1", "equipo2", "equipo3", "visitante", "donante", "padrino", "sponsor", "adoptante", "voluntario"],
//       default: "public",
//------ Implementación de hasheo de pass en DB

// userSchema.statics.encryptPassword = async (password) => {
//     const salt = await bcrypt.genSalt(10);
//     return await bcrypt.hash(password, salt);
//   };

//   userSchema.statics.comparePassword = async (password, receivedPassword) => {
//     return await bcrypt.compare(password, receivedPassword)
//   }

//   userSchema.pre("save", async function (next) {
//     const user = this;
//     if (!user.isModified("password")) {
//       return next();
//     }
//     const hash = await bcrypt.hash(user.password, 10);
//     user.password = hash;
//     next();
//   })

module.exports = mongoose.model("users", usersScheme);
