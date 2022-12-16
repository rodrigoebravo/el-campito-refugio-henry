const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");


const userScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      unique: true,
    },
    pass: {
      type: String,
      required: true,
    },
    roles: { 
      type: String, 
      enum: ["public", "superAdmin", "admin", "equipo1", "equipo2", "equipo3", "visitante", "donante", "padrino", "sponsor", "adoptante", "voluntario"], 
      default: "public"
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

userScheme.pre("find", function () {
  this.where({ isDelete: false });
});

userScheme.pre("findOne", function () {
  this.where({ isDelete: false });
});

module.exports = mongoose.model("users", userScheme);
