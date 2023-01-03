const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
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

//list of midlewares
app.use("/api/admin/dogs", require("./hook/dogHook"));
app.use("/api/admin/users", require("./hook/userHook"));
app.use("/api/admin/volunteers", require("./hook/volunteersHook"));
app.use("/api/admin/adoptions", require("./hook/adopHook"));
app.use("/api/admin/press", require("./hook/pressHook"));
app.use("/api/admin/contributions", require("./hook/contribHook"));
app.use("/api/admin/interfaces", require("./hook/interfaceHook"));

app.use("/api", require("./routers"));

// Error catching endware.
app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

//-----------------------mercado pago-----------------------//
dotenv.config();

const mercadopago = require("mercadopago");

//mercadopago.configurations.setAccessToken(process.env.ACCESS_TOKEN);
mercadopago.configure({
  access_token: process.env.ACCESS_TOKEN,
});

// importa el módulo de rutas de Mercado Pago
const mercadopagoRoutes = require("./routers/mercadopago");

// asigna un manejador de rutas a la ruta '/mercadopago'
app.use("/mercadopago", mercadopagoRoutes);

//-----------------------fin mercado pago-----------------------//

module.exports = app;
