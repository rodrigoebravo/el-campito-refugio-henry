// const dotenv = require("dotenv");
// dotenv.config();

// Paypal
const PAYPAL_API_CLIENT = process.env.PAYPAL_API_CLIENT;
const PAYPAL_API_SECRET = process.env.PAYPAL_API_SECRET;
const PAYPAL_API = process.env.PAYPAL_API; // url sandbox or live for your app
const PAYPAL_BRAND = process.env.PAYPAL_BRAND;
const FRONT = process.env.FRONT;
const BACK = process.env.PORT;


module.exports = {
  PAYPAL_API,
  PAYPAL_API_CLIENT,
  PAYPAL_API_SECRET,
  PAYPAL_BRAND,
  FRONT,
  BACK
};
