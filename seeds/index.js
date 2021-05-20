const sequelize = require('../config/config');
const {player_character , Enemy, User} = require('../models');

const player_characterSeed = require('./player_characterSeed.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const charcters = await player_character.bulkCreate(player_characterSeed, {
    individualHooks: false,
    returning: true,
  });
};

seedDatabase();
