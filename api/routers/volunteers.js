const router = require("express").Router();

const { adminCreateVolunteer } = require("../controllers/adminVolunteers");

router.post("/", adminCreateVolunteer);
// router.get("/:id", adminDogsId);

module.exports = router;
