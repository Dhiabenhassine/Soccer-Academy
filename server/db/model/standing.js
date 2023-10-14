
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connectionDb'); 
const Team = require('./team')

const Standings = sequelize.define('Standings', {
  rank: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  points: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  wins: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  draws: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  losses: {
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

});

Standings.belongsTo(Team, { foreignKey: 'teamId' });

module.exports = Standings;
