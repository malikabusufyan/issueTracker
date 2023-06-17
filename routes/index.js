// Routes
const express = require("express");
const router = express.Router();

// Accessing the Controllers
const homeController = require("../controllers/home_controller");
const projectController = require("../controllers/project_controller");

// Accessing the Routes
router.get("/", homeController.home);
router.get("/project/create", projectController.projectForm);
router.post("/project/create", projectController.createProjects);
router.get("/project/:id", projectController.viewProjects);

module.exports = router;
