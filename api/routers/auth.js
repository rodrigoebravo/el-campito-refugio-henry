const router = require("express").Router();
const  mailer = require("../middlewares/mailer");
const  mailerRegister = require("../middlewares/mailerRegister");
const { login, register } = require("../controllers/session");


// router.use(mailer); 
router.post("/login",mailer, login);
router.post("/register",mailerRegister, register);

module.exports = router;
