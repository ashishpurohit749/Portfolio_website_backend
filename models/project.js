const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

// Define Project model with timestamp disabled
const Project = sequelize.define('Project', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  link: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: false, // Disable timestamps
});

module.exports = Project;
