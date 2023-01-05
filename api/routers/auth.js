const router = require("express").Router();
const  mailer = require("../middlewares/mailer");
const { login, register } = require("../controllers/session");


router.use(mailer); 
router.post("/login", login);
router.post("/register", register);

module.exports = router;
