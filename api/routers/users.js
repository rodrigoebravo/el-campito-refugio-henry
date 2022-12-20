const router = require("express").Router();
const { getUsers, getUsersId } = require("../controllers/users");

router.get("/", getUsers);
router.get("/:id", getUsersId);

module.exports = router;