const seedRooms = require('./room-seeds');
// TODO: More seed requires

const sequelize = require('../config/config');

const seedAll = async () => {
    await sequelize.sync({ force: true});
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedRooms();
    console.log('\n----- ROOMS SEEDED -----\n');

    // TODO: Add more seed calls
    process.exit(0);
}

seedAll();