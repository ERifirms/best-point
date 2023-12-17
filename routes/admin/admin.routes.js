const express = require("express");
const wrapAsync = require("../../utils/wrapAsync");
const isValidObjectId = require("../../middlewares/isValidObjectId");
const isAuth = require("../../middlewares/isAuth");
const { validateProduct } = require("../../middlewares/validateSchema");
const { isAuthorProduct } = require("../../middlewares/isAuthor");
const ProdcutsController = require("../../controllers/product.controller");
const Product = require("../../models/products.model");
const upload = require("../../config/multer");

const router = express.Router();

router.get("/dashboard", async (req, res) => {
  const items = await Product.find();
  res.render("admin/dashboard", { items });
});

module.exports = router;
