let express = require("express");

let router = express.Router();
var multer = require("multer");
// File Upload
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + "." + file.originalname);
  }
});

var upload = multer({ storage: storage });

// user Routes
let UserController = require("../app/Controllers/Api/UserController");
var user = new UserController();
router.post("/login", [], (req, res) => {
  return user.login(req, res);
});

module.exports = router;
