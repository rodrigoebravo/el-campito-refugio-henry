const router = require("express").Router();
const {
  getDogs,
  getDogById,
  createDog,
  updateDog,
  deleteDog,
  adminCreate,
  adminDogs,
  adminDogsId,
  adminUpdate,
  adminDelete,

} = require("../controllers/dogs");

router.get("/", getDogs);
router.get("/:id", getDogById);
router.post("/", createDog);
router.put("/:id", updateDog);
router.delete("/:id", deleteDog); 

router.get("/admin/dogs", adminDogs);
router.get("/admin/dogs/:id", adminDogsId);
router.post("/admin/dogs/create", adminCreate);
router.put("/admin/dogs/:id", adminUpdate);
router.delete("/admin/dogs/:id", adminDelete);

// router.delete("/:id", deleteDog);

module.exports = router;
