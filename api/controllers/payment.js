const axios = require("axios")

 const createOrder = async (req, res) => {
  try {
    const order = {
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: '50',
          },
        },
      ],
      application_context: {
        brand_name: 'El Campito Refugio',
        landing_page: 'NO_PREFERENCE',
        user_action: 'PAY_NOW',
        return_url: `${HOST}/capture-order`,
        cancel_url: `${HOST}/cancel-payment`,
      },
    };

    // format the body
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');

    // Generate an access token
    const {
      data: { access_token },
    } = await axios.post(
      'https://api-m.sandbox.paypal.com/v1/oauth2/token',
      params,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        auth: {
          username: process.env.PAYPAL_API_CLIENT,
          password: process.env.PAYPAL_API_SECRET,
        },
      }
    );

    console.log(access_token);

    // make a request
    const response = await axios.post(
      `${process.env.PAYPAL_API}/v2/checkout/orders`,
      order,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    console.log(response.data);

    return res.json(response.data);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json('Something goes wrong');
  }
};

const captureOrder = async (req, res) => {
  const { token } = req.query;

  try {
    const response = await axios.post(
      `${process.env.PAYPAL_API}/v2/checkout/orders/${token}/capture`,
      {},
      {
        auth: {
          username: process.env.PAYPAL_API_CLIENT,
          password: process.env.PAYPAL_API_SECRET,
        },
      }
    );

    console.log(response.data);

    res.redirect('/payed.html');
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Internal Server error' });
  }
};

 const cancelPayment = (req, res) => {
  res.redirect('/');
};

module.exports = {
  captureOrder, 
  cancelPayment,
  createOrder
};