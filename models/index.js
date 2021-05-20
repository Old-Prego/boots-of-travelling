
const Enemy = require('./Enemy');
const Item = require('./Item');
const Room = require('./Room');
const User = require('./User');
const player_character = require('./player_character');
//const { UPSERT } = require('sequelize/types/lib/query-types');

 //Player character relationship
User.hasOne(player_character, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
  player_character.belongsTo(User, {
    foreignKey: 'user_id',
  });
  //Room relationship
  User.hasOne(Room, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });

  Room.belongsTo(User, {
    foreignKey: 'user_id',
  });

//Item relationship
  User.hasMany(Item, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
  
 
  Item.belongsTo(User, {
    foreignKey: 'user_id',
  });

//Enemy relationship
   User.hasMany(Enemy, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
  
 
  Enemy.belongsTo(User, {
    foreignKey: 'user_id',
  });
  






module.exports = {
    Enemy,
     Item,
    Room,
     User,
     player_character
};

