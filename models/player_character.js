const { Model, DataTypes } = require('sequelize');

//const sequelize = require('../config/connection');

class player_character extends Model {}

player_character.init(
  {

    id: {

      player_character_id: {

    type: DataTypes.INTEGER,
    AllowNull: false,
    primaryKey: true,
    autoIncrement: true
    },
    Name:{
      type: DataTypes.STRING,
      AllowNull: false,
    },
    Attack: {
      type: DataTypes.STRING,
      AllowNull: false,
    },
    Defense: {
      type: DataTypes.INTEGER,
      AllowNull: false,
    },
    Strength: {
      type: DataTypes.INTEGER,
      AllowNull: false,
    },
    Intelligence: {
      type: DataTypes.INTEGER,
      AllowNull: false,
    },
    Dexterity: {

      type: DataTypes.INTEGER,
      AllowNull: false,
    },
    

      type: DataTypes.BOOLEAN,
      AllowNull: false,
    },
    

  },

  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'player_character'
  }
);

module.exports = player_character;

