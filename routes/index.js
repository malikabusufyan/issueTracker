const express = require("express");
const router = express.Router();

//Accessing the Controllers
const homeController = require("../controllers/home_controller");
const projectController = require("../controllers/project_controller");
const issueController = require("../controllers/issue_controller");

//Accessing the Routes
router.get("/", homeController.home);
router.get("/project", projectController.Project);
router.get("/issue", issueController.Issue);

module.exports = router;
