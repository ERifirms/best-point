module.exports = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash("error_msg", "You Are not logged in");
    return res.redirect("/login");
  }
  next();
};
