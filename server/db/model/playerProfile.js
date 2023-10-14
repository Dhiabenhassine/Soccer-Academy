const {Sequelize,DataTypes} = require('sequelize');
const sequelize = require('../connectionDb');
const Team = require('./team')
const Player=require('./player')

const Profile = sequelize.define('Profile', {
    playerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
    },
    totalGoals: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    totalAssists: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    yellowCards: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    redCards: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  });

  Player.hasMany(Profile)
  Profile.belongsTo(Player)

  Team.hasMany(Profile);
  Profile.belongsTo(Team);

  module.exports = Profile