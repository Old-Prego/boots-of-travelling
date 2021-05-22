const router = require('express').Router();
const { Enemy, Item, player_character, Room, User} = require('../models');

router.get('/title', async (req, res) => {



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

module.exports = router;