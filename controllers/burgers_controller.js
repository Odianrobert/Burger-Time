const express = require('express');
const router = express.Router();
const burger = require('../models/burger')

router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/burgers", function(req, res) {
    burger.create(["burger_name"], [req.body.burger_name], function() {
      res.redirect("/");
    });
  });
  
  router.post("/eatBurger/:id", function (req, res) {
    console.log(req)
    var condition = "id = " + req.params.id;
    burger.update({
      devoured: true
    }, condition, function (data) {
      res.redirect('/');
    });
  });





module.exports = router;