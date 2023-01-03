const router = require("express").Router();
const { createUser,getUsers } = require("../controllers/users");
// , getUsersId, 
router.get("/", getUsers);
// router.get("/:id", getUsersId);
router.post("/", createUser); 

module.exports = router;