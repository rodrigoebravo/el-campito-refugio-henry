const router = require("express").Router();
const {
  contactoPost } = require("../controllers/contacto");
const mailerContacto = require("../middlewares/mailerContacto")

router.post("/", mailerContacto,contactoPost);


module.exports = router;