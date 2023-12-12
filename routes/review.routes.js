const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const { validateReview } = require("../middlewares/validateSchema");
const isValidObjectId = require("../middlewares/isValidObjectId");
const isAuth = require("../middlewares/isAuth");
const { isAuthorReview } = require("../middlewares/isAuthor");
const ReviewController = require("../controllers/review.controller");

const router = express.Router();

router.post(
  "/products/:product_id/reviews",
  // isAuth,
  isValidObjectId("/products"),
  // validateReview,
  wrapAsync(ReviewController.store)
);

router.delete(
  "/products/:product_id/reviews/:review_id",
  isAuth,
  isAuthorReview,
  isValidObjectId("/products"),
  wrapAsync(ReviewController.destroy)
);

module.exports = router;
