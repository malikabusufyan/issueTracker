const Project = require("../models/Project");
const Issue = require("../models/Issue");

//To go to the form page to create project
module.exports.projectForm = async (req, res) => {
  try {
    res.render("create_project", { title: "Create Project" });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};

// Controller to create a project
module.exports.createProjects = async (req, res) => {
  try {
    const { name, author, description } = req.body;
    const project = await Project.create({
      name,
      author,
      description,
    });

    return res.redirect("/");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};

// To view project
module.exports.viewProjects = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id).populate("issues");
    if (!project) {
      // If project is not found, handle the error
      return res.status(404).send("Project not found");
    }

    return res.render("view_project", {
      title: "View Project",
      project: project,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};
