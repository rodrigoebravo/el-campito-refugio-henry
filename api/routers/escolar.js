const router = require("express").Router();

const { getEscolar, getEscolarId } = require("../controllers/escolar");

router.get("/", getEscolar);
router.get("/:id", getEscolarId);

module.exports = router;