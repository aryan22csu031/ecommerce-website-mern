const paypal = require('paypal-rest-sdk');
require("dotenv").config();

paypal.configure({
  'mode': 'sandbox', // or 'live'
  'client_id': process.env.PAYPAL_CLIENT_ID, // Your PayPal client ID
  'client_secret': process.env.PAYPAL_CLIENT_SECRET // Your PayPal client secret
});
