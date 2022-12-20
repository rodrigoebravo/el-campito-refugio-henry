const router = require("express").Router();

const { getPress, getPressId } = require("../controllers/press");

router.get("/", getPress);
router.get("/:id", getPressId);

module.exports = router;