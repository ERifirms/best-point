const Product = require("../models/products.model");
const Review = require("../models/reviews.model");

module.exports.isAuthorProduct = async (req, res, next) => {
  const { id } = req.params;
  let product = await Product.findById(id);
  if (!product.author.equals(req.user._id)) {
    req.flash("error_msg", "Not Authorized");
    return res.redirect(`/products`);
  }
  next();
};

module.exports.isAuthorReview = async (req, res, next) => {
  const { product_id, review_id } = req.params;
  let product = await Review.findById(review_id);
  if (!product.author.equals(req.user._id)) {
    req.flash("error_msg", "Not Authorized");
    return res.redirect(`/products/${product_id}`);
  }
  next();
};
