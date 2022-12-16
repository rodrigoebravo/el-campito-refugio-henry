const router = require("express").Router();
const {
  adoptionPost } = require("../controllers/adoptions");


router.post("/", adoptionPost);


module.exports = router;