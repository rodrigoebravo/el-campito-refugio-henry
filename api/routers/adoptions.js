const router = require("express").Router();
const { adoptionPost } = require("../controllers/adoptions");
const mailerAdoptions = require("../middlewares/mailerAdoptions");

router.post("/", mailerAdoptions, adoptionPost);

module.exports = router;
