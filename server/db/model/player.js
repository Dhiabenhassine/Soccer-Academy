// player.js
const Sequelize = require('sequelize');
const sequelize = require('../connectionDb');

const Player = sequelize.define('Player', {
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
  role:{
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: false,
});

module.exports = Player;
