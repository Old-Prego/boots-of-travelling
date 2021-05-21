const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Item extends Model{

}

Item.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false
    },
    defenseBoost:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    strengthBoost:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dexterityBoost:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    intelligenceBoost:{
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
    modelName: 'Item'

  }

  
);

module.exports = Item;
