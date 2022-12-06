const router = require("express").Router(); 


router.get("/", (req, res) => {
    res.send({msg: "tracks"}); 
}); 


module.exports = router; 