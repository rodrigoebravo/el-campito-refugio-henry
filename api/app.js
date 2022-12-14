const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const app = express();

//--------------------------------
// const {dogModel} = require("./models/index");
// const info = require("../search.json");

// const cargarDB = () =>{
//     dogModel.create(info)
//     .then(res => console.log("cargado"))
// }

app.use(morgan("tiny"));

app.use(cors()); //error de origen cruzado
app.use(express.json()); //Manejar data .json

app.name = "API";

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
// app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());
// app.use(morgan('dev'));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // or `http://localhost:${FRONT}`// update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/api/dogs", require("./hook/dogHook"));
app.use("/api/users", require("./hook/userHook"));

app.use("/api", require("./routers"));

// Error catching endware.
app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = app;
