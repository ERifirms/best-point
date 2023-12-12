const Product = require("../models/products.model");
const fs = require("fs");
const ExpressError = require("../utils/ErrorHandler");

module.exports.index = async (req, res) => {
  const products = await Product.find();
  res.render("products/index", { products });
};

module.exports.store = async (req, res) => {
  const images = req.files.map((file) => ({
    url: file.path,
    filename: file.filename,
  }));

  const product = new Product(req.body.product);
  product.author = req.user._id;
  product.images = images;

  await product.save();
  req.flash("success_msg", "Products addes successfully");
  res.redirect("/products");
};

module.exports.show = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("author");
  res.render("products/show", { product });
};

module.exports.edit = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("products/edit", { product });
};

module.exports.update = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, {
    ...req.body.product,
  });

  if (req.files && req.files.length > 0) {
    product.images.forEach((image) => {
      fs.unlink(image.url, (err) => new ExpressError(err));
    });

    const images = req.files.map((file) => ({
      url: file.path,
      filename: file.filename,
    }));

    product.images = images;
    await product.save();
  }
  req.flash("success_msg", "Products Updated successfully");
  res.redirect(`/products/${req.params.id}`);
};

module.exports.destroy = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);

  if (product.images.length > 0) {
    product.images.forEach((image) => {
      fs.unlink(image.url, (err) => new ExpressError(err));
    });
  }

  await product.deleteOne();
  req.flash("success_msg", "Products Deleted successfully");
  res.redirect("/products");
};

module.exports.destroyImage = async (req, res) => {
  try {
    const { id } = req.params;
    const { images } = req.body;
    if (!images || images.length === 0) {
      req.flash("error_msg", "Product selet at last me image");
      return res.redirect(`/products/${id}/edit`);
    }
    images.forEach((image) => {
      fs.unlinkSync(image);
    });

    await Product.findByIdAndUpdate(id, {
      $pull: { images: { url: { $in: images } } },
    });
    req.flash("success_msg", "Successsfuly deleted images");
    return res.redirect(`/products/${id}/edit`);
  } catch (error) {
    req.flash("error_msg", "Failed to delete images");
    return res.redirect(`/products/${id}/edit`);
  }
};
