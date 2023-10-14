
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connectionDb');

const Team = sequelize.define('Team', {
  teamName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  totalWins: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  totalLosses: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  totalDraws: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  goalsFor: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  goalsAgainst: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  points: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Team;
