
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connectionDb'); 

const Tournament = sequelize.define('Tournament', {
  tournamentName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  organizer: {
    type: DataTypes.STRING,
  },
  prizeMoney: {
    type: DataTypes.FLOAT, 
    defaultValue: 0.0,
  },
  numberOfTeams: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Tournament;
