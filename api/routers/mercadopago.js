const router = require("express").Router();
const { payment } = require("mercadopago");
const mercadopago = require("mercadopago");

router.post("/", async (req, res) => {
  const { title, unit_price } = req.body;

  const preference = {
    items: [
      {
        title: title,
        quantity: 1,
        currency_id: "ARS",
        unit_price: unit_price,
      },
    ],
    back_urls: {
      success: "http://localhost:3000/colaborar", //falta hacer esto
      failure: "",
      pending: "",
    },
    auto_return: "approved",
    payment_methods: {
      excluded_payment_types: [
        {
          id: "ticket",
        },
      ],
    },
  };

  try {
    //preference create
    const response = await mercadopago.preferences.create(preference);
    const paymentUrl = response.body;
    res.status(200).send(paymentUrl);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});



module.exports = router;

