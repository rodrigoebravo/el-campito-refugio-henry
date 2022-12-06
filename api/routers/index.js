const fs = require("fs");
const express = require("express");
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (name) => {
  return name.split(".").shift();
};

fs.readdirSync(PATH_ROUTES).map((file) => {
  const name = removeExtension(file);
  
  if (name !== "index") {
    router.use(`/${name}`, require(`./${file}`));
  }
});

module.exports = router;
