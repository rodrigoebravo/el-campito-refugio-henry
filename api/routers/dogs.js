const router = require("express").Router();

const {
  adminDogs,
  adminDogsId,

} = require("../controllers/adminDogs");

router.get("/", adminDogs);
router.get("/:id", adminDogsId);






module.exports = router;
