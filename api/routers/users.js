const router = require("express").Router(); 
const { getUsers, getUserById, createUser, updateUser } = require("../controllers/Users"); 


router.get("/", getUsers); 
router.get("/:id", getUserById)
router.post("/", createUser); 
router.put("/", updateUser); 
// router.put("/:id", deleteUser); 

module.exports = router; 