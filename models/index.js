
const Enemy = require('./Enemy');
const Item = require('./Item');
const Room = require('./Room');
const User = require('./User');
const player_character = require('./player_character');


 //Player character relationship
User.hasOne(player_character, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
  player_character.belongsTo(User, {
    foreignKey: 'user_id',
  });
  
  //Enemy relationship

  Room.hasMany(Enemy, {
    foreignKey: 'room_id',
    onDelete: 'CASCADE',
  });

 Enemy.belongsTo(Room,{
  foreignKey: 'room_id',

 });
  
//Item relationship
  Room.hasMany(Item, {
    foreignKey: 'room_id',
    onDelete: 'CASCADE',
  });
  
 
  Item.belongsTo(Room, {
    foreignKey: 'room_id',
  });







module.exports = {
    Enemy,
     Item,
    Room,
     User,
     player_character
};
