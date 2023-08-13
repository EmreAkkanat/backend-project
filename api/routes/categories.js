var express = require("express");
var router = express.Router();
const isAuthenticated = false;
router.all("*", (req, res, next) => {
  if (isAuthenticated) {
    next();
  } else {
    res.json({ success: false, error: "not authenticated" });
  }
});

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({ succes: true });
});

module.exports = router;
