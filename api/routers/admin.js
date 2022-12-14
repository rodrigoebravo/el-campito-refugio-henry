const router = require("express").Router();

const {
  adminDogs,
  adminDogsId,
  adminUpdateDog,
  adminDeleteDog,
  adminCreateDog,
} = require("../controllers/adminDogs");

const {
  adminCreateUser,
  adminDeleteUser,
  adminUsers,
  adminUpdateUser,
  adminUsersId,
} = require("../controllers/adminUsers");

//------ /api/admin/dogs
router.get("/dogs", adminDogs);
router.get("/dogs/:id", adminDogsId);
router.post("/dogs", adminCreateDog);
router.put("/dogs", adminUpdateDog);
router.delete("/dogs/:id", adminDeleteDog);
//------ /api/admin/users
router.get("/users", adminUsers);
router.get("/users/:id", adminUsersId);
router.post("/users", adminCreateUser);
router.put("/users/:id", adminUpdateUser);
router.delete("/users/:id", adminDeleteUser);

module.exports = router;
