const mongoose = require("mongoose"); 
const bcrypt = require("bcryptjs");


const userScheme = mongoose.Schema({

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
    roles: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "roles",
        },
    ],
},{
    timestamps: false, 
    versionKey: false, 
}); 

productSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };
  
  productSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
  }
  
  productSchema.pre("save", async function (next) {
    const user = this;
    if (!user.isModified("password")) {
      return next();
    }
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
    next();
  })

module.exports = mongoose.model("users", userScheme); 