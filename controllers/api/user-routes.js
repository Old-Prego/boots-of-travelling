const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (req, res) =>{
  try{
    const userData = await User.findAll();
    res.status(200).json(userData);
  } catch{
    res.status(500).json(err);
  }
});

router.get(':/id', async (req, res) =>{
  try{
    const userData  = await User.findByPk(req.params.id);

    if(!userData){
      res.status(404).json({message: 'No user with that id could be found.'});
      return;
    }
    res.status(200).json(userData);
  }catch(err){
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    User.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
});

router.delete('/:id', async (req, res) => {
    User.destroy({
        where: {
            id: req.params.id,
        },
    })
    .then((deletedUser) => {
        res.json(deletedUser);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
