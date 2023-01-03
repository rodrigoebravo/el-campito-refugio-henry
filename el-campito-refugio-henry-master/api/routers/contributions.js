const router = require("express").Router();

const { contributionPost } = require("../controllers/contributions");

router.post("/", contributionPost);


module.exports = router;