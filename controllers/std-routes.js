const router = require('express').Router();
const { Enemy, Item, player_character, Room, User} = require('../models');

router.get('/', async (req, res) => {
    res.render('titlescreen');
});

module.exports = router;