const router = require("express").Router();
const { contactoPost } = require("../controllers/contacto");
const mailerContact = require("../middlewares/mailerContact");

router.post("/", mailerContact, contactoPost);

module.exports = router;
