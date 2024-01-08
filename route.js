// used for routing 

var express = require("express");

var router = express.Router();

router.get("/", function(req,res) {
    console.log("Hello, this is the home page")
    res.render("index")

});

module.exports = router; // returns the router from route.js to expose for other modules to use (module-module communication)