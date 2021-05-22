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
    name:{
      type: DataTypes.STRING,
      AllowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    attack: {
      type: DataTypes.STRING,
      AllowNull: false,
    },
    defense: {
      type: DataTypes.INTEGER,
      AllowNull: false,
    },
    strength: {
      type: DataTypes.INTEGER,
      AllowNull: false,
    },
    intelligence: {
      type: DataTypes.INTEGER,
      AllowNull: false,
    },
    dexterity: {

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

