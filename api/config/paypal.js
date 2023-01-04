const dotenv = require("dotenv");
dotenv.config();

// Paypal
const PAYPAL_API_CLIENT = process.env.PAYPAL_API_CLIENT;
const PAYPAL_API_SECRET = process.env.PAYPAL_API_SECRET;
const PAYPAL_API = process.env.PAYPAL_API; // url sandbox or live for your app

// Server
const PORT = process.env.PORT || 3001;
const HOST = "http://localhost:" + PORT;

module.exports = {
  PAYPAL_API,
  PAYPAL_API_CLIENT,
  PAYPAL_API_SECRET,
  PORT,
  HOST,
};
