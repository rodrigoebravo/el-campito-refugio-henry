const axios = require("axios");
const {
  PAYPAL_API,
  PAYPAL_API_CLIENT,
  PAYPAL_API_SECRET,
  PAYPAL_BRAND,
  FRONT,
  BACK
} = require("../config/paypal");


const {adminCreateContrib} = require("../utils/adminCreateContrib");


let pago = 0;
let names = null;
const createOrder = async (req, res) => {
  const { monto } = req.body;
  // console.log(a,"soy a ")
  names = monto.nombreDePerro;
  pago = monto.monto; // pago es la variable que obtiene el valor que entra por body
  console.log(monto.monto, "soy monto payment");
  console.log(monto.nombreDePerro, "soy nombreDePerro");
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
        brand_name: PAYPAL_BRAND, //  "El campito Refugio", BORRAR  COMENTARIO DESPUES DE PRUEBAS
        landing_page: "NO_PREFERENCE",
        user_action: "PAY_NOW",
        return_url: `${BACK}/api/paypal/capture-order`,
        cancel_url: `${BACK}/api/paypal/cancel-order`,
      },
    };


    // format the body
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");

    // Generate an access token
    const {
      data: { access_token },
    } = await axios.post(
      `${PAYPAL_API}/v1/oauth2/token`,
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
    return res.status(500).json("Something goes wrong create");
  }
};

const captureOrder = async (req, res) => {
  console.log("entre a capture order");
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
    // let obj = {
    //   // detail:
    //   //   (names && `Este pago fue realizado correctamente a ${names}`|| 
    //   //   "Este pago fue realizado correctamente"),
    //   detail: "Este pago fue realizado correctamente",
    //   name: info.payer.name.given_name + " " + info.payer.name.surname,
    //   email: info.payer.email_address,
    //   total: pago, // pago es el valor que ingresa desde body
    //   method: "paypal",
    // };
    // console.log(obj, "soy obj");

    
    // adminCreateContrib(obj)
    // let aux = {}

    let obj = {
      detail: "Este pago fue realizado correctamente",
      name: info.payer.name.given_name + " " + info.payer.name.surname,
      nameDog: names,
      email: info.payer.email_address,
      total: pago, // pago es el valor que ingresa desde body
      method: "paypal",
      type: (names && "padrinazgo" || "donación")
    };
    console.log(obj, "soy obj");

    
    let payDb = adminCreateContrib(obj);

    // res.json(response.data)
    //respuesta de la data en json
    res.redirect(`${FRONT}/pay`);
    //respuesta con redirect
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Server error caputure" });
  }
};


const cancelPayment = (req, res) => {
  console.log("Se cancelo la operacion");
  res.redirect(FRONT); // "http://localhost:3000" boorrar comentario después de pruebas
};

module.exports = {
  captureOrder,
  cancelPayment,
  createOrder,
};
