const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Room extends Model {
    
}

Room.init(
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
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        choice1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        choice2: {
            type: DataTypes.STRING,
            allowNull: true
        },
        choice3: {
            type: DataTypes.STRING,
            allowNull: true
        },
        choice4: {
            type: DataTypes.STRING,
            allowNull: true
        },
        result1: {
            type: DataTypes.STRING,
            ALlowNull: false
        },
        result2: {
            type: DataTypes.STRING,
            ALlowNull: true
        },
        result3: {
            type: DataTypes.STRING,
            ALlowNull: true
        },
        result4: {
            type: DataTypes.STRING,
            ALlowNull: true
        },
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'Room'
    }
);

module.exports = Room;