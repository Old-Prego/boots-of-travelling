const sequelize = require('../config/config');
const {player_character , Enemy, User, Room, Item} = require('../models');

const player_characterSeed = require('./player_characterSeed.json');
const roomSeed = require('./room-seeds.json');
const itemSeed = require('./item-seeds.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const charcters = await player_character.bulkCreate(player_characterSeed, {
    individualHooks: false,
    returning: true,
  });

  const rooms = await Room.bulkCreate(roomSeed, {
    individualHooks: false,
    returning: true,
  });

  const items = await Item.bulkCreate(itemSeed, {
    individualHooks: false,
    returning: true,
  });
};

seedDatabase();
