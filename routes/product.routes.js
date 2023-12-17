const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const isValidObjectId = require("../middlewares/isValidObjectId");
const isAuth = require("../middlewares/isAuth");
const isAdmin = require("../middlewares/isAdmin");
const { validateProduct } = require("../middlewares/validateSchema");
const { isAuthorProduct } = require("../middlewares/isAuthor");
const ProdcutsController = require("../controllers/product.controller");
const upload = require("../config/multer");

const router = express.Router();

router.get("/create", isAuth, (req, res) => {
  res.render("products/create");
});

router
  .route("/")
  .get(wrapAsync(ProdcutsController.index))
  .post(
    isAuth,
    isAdmin,
    upload.array("image", 5),
    validateProduct,
    wrapAsync(ProdcutsController.store)
  );

router
  .route("/:id")
  .get(isValidObjectId("/products"), wrapAsync(ProdcutsController.show))
  .put(
    isAuth,
    upload.array("image", 5),
    isAuthorProduct,
    validateProduct,
    isValidObjectId("/products"),
    wrapAsync(ProdcutsController.update)
  )
  .delete(
    isAuth,
    isAdmin,
    isAuthorProduct,
    isValidObjectId("/products"),
    wrapAsync(ProdcutsController.destroy)
  );

router.get(
  "/:id/edit",
  isAuth,
  isAdmin,
  isAuthorProduct,
  isValidObjectId("/products"),
  wrapAsync(ProdcutsController.edit)
);

router.delete(
  "/:id/images",
  isAuth,
  isAdmin,
  isAuthorProduct,
  isValidObjectId("/products"),
  wrapAsync(ProdcutsController.destroyImage)
);

module.exports = router;
