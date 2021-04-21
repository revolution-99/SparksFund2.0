const express = require("express");
const app = express();
// Razorpay syntax for Node.js
const Razorpay = require("razorpay");
// shortid will throw some random strings
const shortid = require("shortid")
// cors will throw some headers that will tell the browser that "Don't stop any request for the perticular domain"

const cors = require("cors")
app.use(cors())

var razorpay = new Razorpay({
  key_id: "rzp_test_HteZ41XEHmnp8",
  key_secret: "9Vjyz7s0aQIgeYvAssgrPDdi",
});

app.post("/razorpay", (req, res) => {
  // payment_capture is something complex. This shows how we are going to validate the payment from the bank. So mset it manually as 1
  const payment_capture = 1;
  const amount = 5;
  const currency = "INR"
  const cust_name = ""

//   Wrapping the whole stuffs in a function 'option'
  const options = {
    amount: amount * 100,
    currency,
    // The receipt will be generated & returned back by Razorpay
    receipt : shortid.generate(),
    payment_capture,
    cust_name
  }
//   It will create the above options 
  const response = razorpay.orders.create(options);
  console.log(response)
  res.json({
      id : response.id,
      currency : response.currency,
      amount: response.amount
  })
});

app.listen(3000, () => {
  console.log("App is running at 3000");
});
