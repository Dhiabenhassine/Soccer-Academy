
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connectionDb'); 
const Team = require('./team')

const Match = sequelize.define('Match', {
  dateAndTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

Match.belongsTo(Team, { as: 'homeTeam', foreignKey: 'homeTeamId' });
Match.belongsTo(Team, { as: 'awayTeam', foreignKey: 'awayTeamId' });

module.exports = Match;
