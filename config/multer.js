const multer = require("multer");
const path = require("path");

const ExpresError = require("../utils/ErrorHandler");

const storege = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/");
  },

  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "_" + Math.round(Math.random() + 1e9);
    cb(
      null,
      file.fieldname + "_" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storege,
  fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new ExpresError("Only images are allowed", 405));
    }
  },
});

module.exports = upload;
