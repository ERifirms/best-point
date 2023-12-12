const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const AuthController = require("../controllers/auth.controller");
const router = express.Router();

router
  .route("/register")
  .get(AuthController.registerForm)
  .post(wrapAsync(AuthController.register));

router
  .route("/login")
  .get(AuthController.loginForm)
  .post(
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: {
        type: "error_msg",
        msg: "Invalid username or password",
      },
    }),
    AuthController.login
  );

router.post("/logout", AuthController.logout);

module.exports = router;
