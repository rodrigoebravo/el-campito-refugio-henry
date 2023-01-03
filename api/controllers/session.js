const User = require("../models/nosql/users");
const jwt = require("jsonwebtoken");
// constraseña
const bcrypt = require("bcrypt");

// validation
const Joi = require("joi");

const schemaRegister = Joi.object({
  name: Joi.string().min(6).max(255).required(),
  email: Joi.string().min(6).max(255).required().email(),
  pass: Joi.string().min(6).max(1024).required(),
  image: Joi.string().min(6).max(1024),
});

const schemaLogin = Joi.object({
  email: Joi.string().min(6).max(255).required().email(),
  pass: Joi.string().min(6).max(1024).required(),
});

const login = async (req, res) => {
  // validaciones
  const { error } = schemaLogin.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json({ error: "Usuario no encontrado" });

  const validPassword = await bcrypt.compare(req.body.pass, user.pass);
  if (!validPassword)
    return res.status(400).json({ error: "contraseña no válida" });

  // create token
  const token = jwt.sign(
    {
      name: user.name,
      id: user._id,
    },
    process.env.TOKEN_SECRET
  );

  res.header("auth-token", token);

  res.json({
    info: user,
    error: null,
    data: "exito bienvenido",
    token,
  });
};

const register = async (req, res) => {
  // validate user
  const { error } = schemaRegister.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const isEmailExist = await User.findOne({ email: req.body.email });
  if (isEmailExist) {
    return res.status(400).json({ error: "Email ya registrado" });
  }

  // hash contraseña
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.pass, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    pass: password,
    image:
      req.body.image ||
      "https://cdn-icons-png.flaticon.com/512/1077/1077063.png",
  });
  try {
    const savedUser = await user.save();
    res.json({
      data: savedUser,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = {
  login,
  register,
};
