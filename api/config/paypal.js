const dotenv = require("dotenv");
dotenv.config();

// Paypal
const PAYPAL_API_CLIENT = "ATxN-COATDrhTAh2FTj46MY9VUMs3L02fcECHcXoCghkp8R_k3bmCngi2X-7SYDfu10JUItC6YxuWIck"
const PAYPAL_API_SECRET = "EIjHmxUb-KpivT9E2QY53MfQbZTkstZzmjXvx4GCaEzIvnBEGd7D6p55qGezE56BxSmaUzkXMaHWBQQH";
const PAYPAL_API = "https://api-m.sandbox.paypal.com" // url sandbox or live for your app

// Server
const PORT =  3001;
const HOST = "http://localhost:" + PORT;

module.exports = {
  PAYPAL_API,
  PAYPAL_API_CLIENT,
  PAYPAL_API_SECRET,
  PORT,
  HOST,
};
