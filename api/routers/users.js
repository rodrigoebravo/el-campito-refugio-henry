const router = require("express").Router();
const { getUsers, getUsersId, createUser} = require("../controllers/users");

router.get("/", getUsers);
router.get("/:id", getUsersId);
router.post("/", createUser); 

module.exports = router;