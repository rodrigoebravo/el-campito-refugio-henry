const axios = require("axios");
const {
  PAYPAL_API,
  HOST,
  PAYPAL_API_CLIENT,
  PAYPAL_API_SECRET,
} = require("../config/paypal");


const {adminCreateContrib} = require("../utils/adminCreateContrib");


let pago = 0;
const createOrder = async (req, res) => {
  const monto = req.body;
  // console.log(a,"soy a ")
  pago = monto.monto; // pago es la variable que obtiene el valor que entra por body
  console.log(monto.monto, "soy monto payment");

  try {
    const order = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: pago,
          },
        },
      ],
      application_context: {
        brand_name: "mycompany.com",
        landing_page: "NO_PREFERENCE",
        user_action: "PAY_NOW",
        return_url: "http://localhost:3001/api/paypal/capture-order",
        cancel_url: "http://localhost:3001/api/paypal/cancel-order",
      },
    };


    // format the body
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");

    // Generate an access token
    const {
      data: { access_token },
    } = await axios.post(
      "https://api-m.sandbox.paypal.com/v1/oauth2/token",
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        auth: {
          username: PAYPAL_API_CLIENT,
          password: PAYPAL_API_SECRET,
        },
      }
    );

    // console.log(access_token);

    // make a request
    const response = await axios.post(
      `${PAYPAL_API}/v2/checkout/orders`,
      order,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    console.log(response.data);
    console.log("soy data");

    return res.json(response.data);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json("Something goes wrong crate");
  }
};

const captureOrder = async (req, res) => {
  console.log("entre a cpture order");
  const { token } = req.query;

  try {
    const response = await axios.post(
      `${PAYPAL_API}/v2/checkout/orders/${token}/capture`,
      {},
      {
        auth: {
          username: PAYPAL_API_CLIENT,
          password: PAYPAL_API_SECRET,
        },
      }
    );

    console.log(response.data);
    let info = response.data;
    let obj = {
      detail: "Este pago fue realizado correctamente",
      name: info.payer.name.given_name + " " + info.payer.name.surname,
      email: info.payer.email_address,
      total: pago, // pago es el valor que ingresa desde body
      method: "paypal",
    };
    console.log(obj, "soy obj");

    
    adminCreateContrib(obj)

    // res.json(response.data)
    //respuesta de la data en json
    res.redirect("http://localhost:3000/pay");
    //respuesta con redirect
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Server error caputure" });
  }
};


const cancelPayment = (req, res) => {
  console.log("Se cancelo la operacion");
  res.redirect("http://localhost:3000");
};

module.exports = {
  captureOrder,
  cancelPayment,
  createOrder,
};
