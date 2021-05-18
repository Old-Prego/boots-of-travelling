
const sequelize = require('../config/config');
const { Enemy, Item, player_character, Room, } = require('../models');
// TODO: More seed requires

 const player_characterSeedData = require("./player_character.json");

const seedAll = async () => {
    await sequelize.sync({ force: true});
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedRooms();
    console.log('\n----- ROOMS SEEDED -----\n');

    // TODO: Add more seed calls
    process.exit(0);
}

seedAll();