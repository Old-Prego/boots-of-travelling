const router = require('express').Router();
const { Item } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const itemData = await Item.findAll();
        res.status(200).json(itemData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try{
        const itemData = await Item.findByPk(req.params.id);

        if(!itemData) {
            res.status(404).json({message: 'No item with that ID could be found.'});
            return;
        }
        res.status(200).json(itemData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const itemData = await Item.create(req.body);
        res.status(200).json(itemData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    Item.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
});

router.delete('/:id', async (req, res) => {
    Item.destroy({
        where: {
            id: req.params.id,
        },
    })
    .then((deletedItem) => {
        res.json(deletedItem);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
