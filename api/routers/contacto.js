const router = require("express").Router();
const {
  contactoPost } = require("../controllers/contacto");


router.post("/", contactoPost);


module.exports = router;