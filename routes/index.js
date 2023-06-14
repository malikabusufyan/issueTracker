const express = require("express");
const router = express.Router();

//Accessing the Controllers
const homeController = require("../controllers/home_controller");

//Accessing the Routes
router.get("/", homeController.home);

module.exports = router;
