const { pressModel } = require("../models");

module.exports = (req, res, next) => {
  pressModel.count({}, function (err, count) {
    if (err) {
      console.log(err);
      res.status(500).send("Error!");
    }

    res.setHeader("Access-Control-Expose-Headers", "Content-Range");
    res.setHeader("Content-Range", `press 0-${count}/${count}`);
    next();
  });
};