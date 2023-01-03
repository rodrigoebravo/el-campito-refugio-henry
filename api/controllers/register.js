const bcrypt = require("bcrypt");
const User = require("../models/nosql/users");

const register = async (req, res) => {
  const { name, email, pass, roles } = req.body;


  User.findOne({ User }).then((usuario) => {
    if (usuario) {
      return res.json({ mensaje: "Ya existe un usuario con ese correo" });
    } else if (!name || !email || !pass) {
      return res.json({ mensaje: "Falta el nombre / correo / contraseña" });
    } else {
      bcrypt.hash(pass, 10, (error, contraseñaHasheada) => {
        if (error) res.json({ error });
        else {
          const nuevoUsuario = new User({
            name,
            email,
            pass: contraseñaHasheada,
            roles,
            image,
          });

          
          nuevoUsuario
            .save()
            .then((usuario) => {

              res.json({ mensaje: "Usuario creado correctamente", usuario });
            })
            .catch((error) => console.log(error,"error al crear usuario"));
        }
      });
    }
  });
};

module.exports = register;
