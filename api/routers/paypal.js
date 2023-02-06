const Router = require("express");

const router = Router();

const {
  createOrder,
  cancelPayment,
  captureOrder,
} = require("../controllers/payment");

router.post("/create-order", createOrder);

router.get("/capture-order", captureOrder);

router.get("/cancel-order", cancelPayment);

module.exports = router;
