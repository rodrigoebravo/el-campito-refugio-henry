const router = require("express").Router();

const  mailerPass  = require("../middlewares/mailerPass");

router.post("/" ,mailerPass);

module.exports = router;
