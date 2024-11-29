const Project = require('../models/project');

// Create a new project
const createProject = async (req, res) => {
  try {
    const { title, description, image, link } = req.body;

    if (!title || !description || !image || !link) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newProject = await Project.create({
      title,
      description,
      image,
      link,
    });

    res.status(201).json({
      success: true,
      data: newProject,
      message: 'Project created successfully!',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Get all projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.status(200).json({ success: true, data: projects });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Update a project
const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image, link } = req.body;

    const project = await Project.findByPk(id);

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    project.title = title || project.title;
    project.description = description || project.description;
    project.image = image || project.image;
    project.link = link || project.link;

    await project.save();

    res.status(200).json({
      success: true,
      data: project,
      message: 'Project updated successfully!',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Delete a project
const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByPk(id);

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    await project.destroy();

    res.status(200).json({ success: true, message: 'Project deleted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
};
