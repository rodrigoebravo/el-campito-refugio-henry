const router = require("express").Router(); 
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require("../controllers/Users"); 


router.get("/", getUsers); 
router.get("/:id", getUserById)
router.post("/", createUser); 
router.put("/", updateUser); 
router.delete("/:id", deleteUser); 

module.exports = router; 