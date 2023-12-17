module.exports = (req, res, next) => {
  if (req.isAuthenticated() && req.user.rool == "admin") {
    return next();
  } else {
    req.flash("error_msg", "You are not admin");
    res.redirect("/products");
  }
};
