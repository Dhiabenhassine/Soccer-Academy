
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connectionDb'); 
const Match = require('./match')

const MatchResult = sequelize.define('MatchResult', {
  homeTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  awayTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  winner: {
    type: DataTypes.STRING,
    defaultValue: null,
  },
});

MatchResult.belongsTo(Match, { foreignKey: 'matchId' });

module.exports = MatchResult;
