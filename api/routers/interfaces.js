const router = require("express").Router();

const { getInterfaces, getInterfacesId } = require("../controllers/interfaces");

router.get("/", getInterfaces);
router.get("/:id", getInterfacesId);

module.exports = router;