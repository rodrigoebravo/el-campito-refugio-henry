const router = require("express").Router();

const { CreateVolunteer } = require("../controllers/volunteers");

router.post("/", CreateVolunteer);
// router.get("/:id", adminDogsId);

module.exports = router;
