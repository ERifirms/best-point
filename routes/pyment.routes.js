const express = require("express");
const Product = require("../models/products.model");
const router = express.Router();
const midtransClient = require("midtrans-client");

const snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: "SB-Mid-server-f4rLWmXR-0p53XBdGm26P7sv",
  clientKey: "SB-Mid-client-lmOVOmuiDOGe1CDi",
});

router.post("/payment/callback", (req, res) => {
  const transactionStatus = req.body.transaction_status;

  if (transactionStatus === "capture") {
    // Payment success, update your database or perform other actions
    res.send("Payment success");
  } else {
    // Payment failed, handle accordingly
    res.send("Payment failed");
  }
});

router.post("/product/:id/pay", async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    const transactionDetails = {
      order_id: req.user._id,
      gross_amount: product.price,
    };

    const itemDetails = {
      id: product._id.toString(),
      price: product.price,
      quantity: 1,
      name: product.title,
    };

    const transactionOptions = {
      transaction_details: transactionDetails,
      item_details: itemDetails,
    };

    const snapToken = await snap.createTransaction(transactionOptions);

    res.render("products/payment", { snapToken, product });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
