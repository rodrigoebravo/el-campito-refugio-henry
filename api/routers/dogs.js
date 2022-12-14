const router = require("express").Router();
const {
  getDogs,
  getDogById,
  createDog,
  updateDog,
  // adminDogs,
  // adminDogsID,
  // adminUpdate,
  // adminDelete,
} = require("../controllers/dogs");

router.get("/", getDogs);
router.get("/:id", getDogById);
router.post("/", createDog);
router.put("/", updateDog);

// router.get("/admin/dogs", adminDogs);
// router.get("/admin/dogs/:id", adminDogsID);
// router.put("/admin/dogs/:id", adminUpdate);
// router.delete("/admin/dogs/:id", adminDelete);



module.exports = router;
