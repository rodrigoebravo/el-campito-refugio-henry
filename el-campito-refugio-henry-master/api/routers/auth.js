const router = require("express").Router();
const  mailer = require("../middlewares/mailer");
const { login, register } = require("../controllers/session");

router.post("/login",mailer, login);
router.post("/register", register);

module.exports = router;
