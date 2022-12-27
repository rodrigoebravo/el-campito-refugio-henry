const router = require("express").Router();

const { CreateVolunteer } = require("../controllers/volunteers");

router.post("/", CreateVolunteer);

module.exports = router;
