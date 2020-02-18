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
    burger.create(["burger_name"], [req.body.burger_name], function(data) {
      res.redirect("/burgers");
    });
  });
  
  router.put("/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update(
      {
        devoured: req.body.devoured
      },
      condition,
      function(data) {
        res.redirect("/burgers");
  
      }
    );
  });





module.exports = router;