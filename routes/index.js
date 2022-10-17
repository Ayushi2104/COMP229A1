
// Name: Ayushi Patel
// Student ID: 301239473
// Date: 15 Oct 2022


var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("home", { title: "Express" });
});

router.get("/home", function (req, res, next) {
  res.render("home", { title: "Ayushi Patel - Home" });
});

router.get("/contactme", function (req, res, next) {
  res.render("contactme", { title: "Ayushi Patel - Contact" });
});

router.get("/aboutme", function (req, res, next) {
  res.render("aboutme", { title: "Ayushi Patel - About Me" });
});

router.get("/projects", function (req, res, next) {
  res.render("projects", { title: "Ayushi Patel - Projects" });
});
router.get("/services", function (req, res, next) {
  res.render("services", { title: "Ayushi Patel -Services" });
});
module.exports = router;
