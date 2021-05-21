<<<<<<< HEAD
const { Model, DataTypes } = require('sequelize');

=======
const { Model, Datatypes } = require('sequelize');
>>>>>>> 965b483143054f3d893abd7a346b30ccd895fe7a
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
    user_id:  {
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
    modelName: 'Item'
<<<<<<< HEAD

  }

=======
  }
>>>>>>> 965b483143054f3d893abd7a346b30ccd895fe7a
);
module.exports = Item;
