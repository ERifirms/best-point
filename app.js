const express = require("express");
const ExpressError = require("./utils/ErrorHandler");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const sessin = require("express-session");
const flash = require("connect-flash");
const methodOverride = require("method-override");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/users.model");
const path = require("path");
require("dotenv").config();
const app = express();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set(express.static(path.join(__dirname, "views")));

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  sessin({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  next();
});

// connect to mongodb
mongoose
  .connect(process.env.DB)
  .then((result) => {
    console.log("connect to mongodb...");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.render("home");
});

// routers
app.use("/admin", require("./routes/admin/admin.routes")); // admin
app.use("/", require("./routes/auth.routes"));
app.use("/products", require("./routes/product.routes"));
app.use("/", require("./routes/review.routes"));
app.use("/", require("./routes/pyment.routes"));

app.all("*", (req, res, next) => {
  next(new ExpressError("Page not foud", 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = "Oh no, Something went Wrong!!";
  res.status(statusCode).render("error", { err });
});

app.listen(process.env.PORT, () => {
  console.log("Server is Running on http://localhost:3000");
});
