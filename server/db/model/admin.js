const Sequelize = require('sequelize');
const sequelize = require('../connectionDb');

const Admin = sequelize.define('Admin', {
  email: {
    type: Sequelize.STRING(95),
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING(45),
    allowNull: false,
  },
}, {
  timestamps: false,
});

module.exports = Admin;
