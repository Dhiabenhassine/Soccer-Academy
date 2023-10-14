// parent.js
const Sequelize = require('sequelize');
const sequelize = require('../connectionDb');

const Parent = sequelize.define('Parent', {
  name: {
    type: Sequelize.STRING(95),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(95),
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING(95),
    allowNull: false,
  },
  role: {
    type: Sequelize.STRING(20), 
    allowNull: false,
  },
}, {
  timestamps: false,
});

module.exports = Parent;
