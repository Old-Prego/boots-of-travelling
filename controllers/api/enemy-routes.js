const router = require('express').Router();
const { Enemy } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const enemyData = await Enemy.findAll();
        res.status(200).json(enemyData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try{
        const enemyData = await Enemy.findByPk(req.params.id);

        if(!enemyData) {
            res.status(404).json({message: 'No enemy with that ID could be found.'});
            return;
        }
        res.status(200).json(enemyData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const enemyData = await Enemy.create(req.body);
        res.status(200).json(enemyData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    Enemy.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
});

router.delete('/:id', async (req, res) => {
    Enemy.destroy({
        where: {
            id: req.params.id,
        },
    })
    .then((deletedEnemy) => {
        res.json(deletedEnemy);
    })
    .catch((err) => res.json(err));
});

module.exports = router;