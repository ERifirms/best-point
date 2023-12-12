const Review = require("../models/reviews.model");
const Product = require("../models/products.model");

module.exports.store = async (req, res) => {
  const { product_id } = req.params;

  const review = new Review(req.body.review);
  review.author = req.user._id;

  const product = await Product.findById(product_id);
  console.log(product);

  product.reviews.push(review);

  await product.save();
  await review.save();

  req.flash("success_msg", "Review Added successfully");
  res.redirect(`/products/${product_id}`);
};

module.exports.destroy = async (req, res) => {
  const { product_id, review_id } = req.params;
  await Product.findByIdAndUpdate(product_id, {
    $pull: { reviews: review_id },
  });
  req.flash("success_msg", "Review Deleted successfully");
  await Review.findByIdAndDelete(review_id);
  res.redirect(`/products/${product_id}`);
};
