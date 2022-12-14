const router = require("express").Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  adminCreate,
  adminUpdate,
  adminUsersId,
  adminUsers,
  adminDelete,
} = require("../controllers/Users");

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);

router.get("/admin/users", adminUsers);
router.get("/admin/users/:id", adminUsersId);
router.post("/admin/users/", adminCreate);
router.put("/admin/users/:id", adminUpdate);
router.delete("/admin/users/:id", adminDelete);

module.exports = router;
