const router = require("express").Router();

const { CreateVolunteer } = require("../controllers/volunteers");
const mailerVolunterr = require("../middlewares/mailerVolunteer");

router.post("/", mailerVolunterr, CreateVolunteer);

module.exports = router;
