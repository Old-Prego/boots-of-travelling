const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/config');

class player_character extends Model {}

player_character.init(
  {

    id: {

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
    
    user_id: {
      type: DataTypes.INTEGER,
      reference: {
        model : "user",
        key : "id",

      },

    }
    

  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'player_character'
  }
);

module.exports = player_character;

