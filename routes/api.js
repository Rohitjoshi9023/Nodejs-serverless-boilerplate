let express = require("express");
let router = express.Router();

// user Routes
let short_urls = controller("Api/ETURLController");
router.get("/:short_code", [], (req, res) => {
  return short_urls.redirectoShortLink(req, res);
});

module.exports = router;
