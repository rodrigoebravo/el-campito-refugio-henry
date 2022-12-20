const router = require("express").Router();

const { getDogs, getDogsId } = require("../controllers/dogs");

router.get("/", getDogs);
router.get("/:id", getDogsId);

module.exports = router;
