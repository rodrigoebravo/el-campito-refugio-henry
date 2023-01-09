const { volunteersModel } = require("../models");

module.exports = (req, res, next) => {
  volunteersModel.count({}, function (err, count) {
    if (err) {
      console.log(err);
      res.status(500).send("Error!");
    }

    res.setHeader("Access-Control-Expose-Headers", "Content-Range");
    // res.setHeader("Content-Range", `volunteers 0-${count}/${count}`);
    next();
  });
};