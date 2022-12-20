const router = require("express").Router();
const { adminCreateUser } = require("../controllers/adminUsers");



router.post("/", adminCreateUser);


module.exports = router;
