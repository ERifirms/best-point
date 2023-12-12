const mongoosse = require("mongoose");

module.exports = (redirectUrl) => {
  return async (req, res, next) => {
    const paramId = ["id", "product_id", "review_id"].find(
      (param) => req.params[param]
    );

    if (!paramId) {
      return next();
    }

    const id = req.params[paramId];
    if (!mongoosse.Types.ObjectId.isValid(id)) {
      req.flash("error_msg", "Invalid Id / Data tidak ditemukan");
      return res.redirect(redirectUrl);
    }

    next();
  };
};
