const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Routes for project CRUD operations
router.post('/', projectController.createProject);   // Create a project
router.get('/', projectController.getProjects);     // Get all projects
router.put('/:id', projectController.updateProject); // Update a project
router.delete('/:id', projectController.deleteProject); // Delete a project

module.exports = router;
