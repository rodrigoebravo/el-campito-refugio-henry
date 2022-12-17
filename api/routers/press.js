const router = require("express").Router();

const { adminPress, adminPressId } = require("../controllers/adminPress");

router.get("/", adminPress);
router.get("/:id", adminPressId);

module.exports = router;