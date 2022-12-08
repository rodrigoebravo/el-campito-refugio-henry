const router = require("express").Router(); 
const { getDogs, getDogById, createDog, deleteDog, updateDog} = require("../controllers/dogs"); 

router.get("/", getDogs); 
router.get("/:id", getDogById)
router.post("/", createDog); 
router.put("/", updateDog); 
router.delete("/:id", deleteDog); 

module.exports = router; 