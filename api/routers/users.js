const router = require("express").Router();
const { createUser,getUsers,getUsersId,updateUser ,updatePassword} = require("../controllers/users");
// , getUsersId, 
router.get("/", getUsers);
router.get("/:id", getUsersId);
router.post("/", createUser);
router.put("/:id",updateUser)
router.put("/password/:id",updatePassword)

module.exports = router;