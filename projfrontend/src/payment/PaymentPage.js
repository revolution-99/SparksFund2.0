import React from "react";
import Nav from "../core/Nav";

const loadRazorPayScript = (src) => {
  return new Promise((resolve) => {

    // Creation of the element script in React we can't create <script src="https://checkout.razorpay.com/v1/checkout.js"></script> directly.
    const script = document.createElement("script");
    script.src = src;

    // The appendChild() method appends a node as the last child of a node. Similar function as append() in java script
    document.body.appendChild(script);
    // onload execute a JavaScript immediately after a page has been loaded:
    script.onload = () =>{
        resolve(true)
    }
    script.onerror = () =>{
        resolve(false)
    }
    document.body.appendChild(script)
  });
};

// if (document.domain === 'localhost') {
//     // developement
// }
// else{
//     // production
// }
// This is the same synatx as above which indicates that if we are in the local host we are in the developement mode
const __DEV__ = document.domain === 'localhost'


  async function displayRazorpay () {
    const res = await loadRazorPayScript("https://checkout.razorpay.com/v1/checkout.js")
    if (!res) {
        alert("Payment failed. Please check your network connection")
        return
    }

    // Making an API call to fetch the data
    const data = await fetch("http://localhost:3000/razorpay", 
    {
        method : 'POST',
        // mode : 'no-cors'
    })
    .then((t) => 
        t.json()
    )

    // For reference
    console.log(data);

    // From this line to the end all are copied from Razorpay documentation
    const options = {
      key: __DEV__ ? "rzp_test_HteZ41XEHmnp8l" : "PRODUCTION_KEY_LIVE_MODE", // First is Key ID generated from the Dashboard when the test mode is on otherwise load the key of the live mode
    //"data" is fetched from the backend
      amount: 50000, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: data.currency,
      order_id : data.id,
      name: "The Spark Fund",
      description: "Donate for a cause",

      // ***********************************Image Yet to be done***********************

      image: "https://www.thesparksfoundationsingapore.org/images/logo_small.png",
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },

    //   Prefile datas with the existing users
      prefill: {
        // cust_name: data.name,
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      // notes: {
      //   address: "Razorpay Corporate Office",
      // },
      // theme: {
      //   color: "#3399cc",
      // },
      notify: {
        "sms": true,
        "email": true
      },
    };
    var paymentObject = new window.Razorpay(options);
    paymentObject.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
   
      paymentObject.open();

  };

//   return (
//     <div>
      
//     </div>
//   );



export default displayRazorpay;
