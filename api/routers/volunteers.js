const router = require("express").Router();

const { CreateVolunteer, volunteerById } = require("../controllers/volunteers");

router.post("/", CreateVolunteer);

module.exports = router;
