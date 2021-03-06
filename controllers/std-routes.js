const router = require('express').Router();
const { Enemy, Item, player_character, Room, User } = require('../models');

router.get('/title', async(req, res) => {



    res.render('titlescreen');
});

router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/title');
        return;
    }

    res.render('login');
});

router.get('/createAcc', (req, res) => {
    res.render('createAcc');
})

router.get('/gameplay/:id', async (req, res) => {

    try {

        console.log(req.params.id);
        
        const roomData = await Room.findByPk(req.params.id);

        const room = roomData.get({ plain: true });

        res.render('gameplay', { 
            layout: 'gameUI',
            room 
        });
    } catch (err) {

    }
    
})

router.get('/character-select', async (req, res) => {

    try {
        const characterData = await player_character.findAll();

        const roomData = await Room.findByPk(1);

        const room = roomData.get({ plain: true });

        const characters = characterData.map((character) => character.get({ plain: true }));
        res.render('charsel', {
            layout: 'gameUI',
            characters,
            room
        });
    } catch (err) {
        res.redirect('/login');
    }
});

module.exports = router;