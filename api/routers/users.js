const router = require("express").Router();
const { createUser } = require("../controllers/users");
// getUsers, getUsersId, 
// router.get("/", getUsers);
// router.get("/:id", getUsersId);
router.post("/", createUser); 

module.exports = router;