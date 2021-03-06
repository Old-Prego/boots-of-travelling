const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Enemy extends Model {}

Enemy.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        attack: {
            type: DataTypes.STRING,
            allowNull: false
        },
        defense: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        strength: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        intelligence: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dexterity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        room_id:  {
            type: DataTypes.INTEGER,
            reference: {
              model : "room",
              key : "id",
      
            },
      

      }
    
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'Enemy'
    }
);

module.exports = Enemy;