const router = require('express').Router();
const { Room } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const roomData = await Room.findAll();
        res.status(200).json(roomData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try{
        const roomData = await Room.findByPk(req.params.id);

        if(!roomData) {
            res.status(404).json({message: 'No room with that ID could be found.'});
            return;
        }
        res.status(200).json(enemyData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const roomData = await Room.create(req.body);
        res.status(200).json(roomData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    Room.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
});

router.delete('/:id', async (req, res) => {
    Room.destroy({
        where: {
            id: req.params.id,
        },
    })
    .then((deletedRoom) => {
        res.json(deletedRoom);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
