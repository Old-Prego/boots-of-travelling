const router = require('express').Router();
const { User } = require('../../models');
const bodyParser = require('body-parser').json();

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

router.post('/',bodyParser ,async (req, res) => {
    try {
        const userData = await User.create({
          username: req.body.username,
          password: req.body.password,
        });
        res.status(200).json(userData);

        req.session.save(() => {
          req.session.userID = userData.id;
          req.session.username = userData.username;
          req.session.loggedIn = true;

          res.json(userData);
        })
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', bodyParser, async (req, res) => {
  try {
    console.log(req.body.username);
    const user = await User.findOne({
      where: {
        username: req.body.username,      
      },
    });

    if(!user) {
      console.log('Bad User');
      res.status(400).json({ message: 'There is no user with your username'});
      return;
    }
    const goodPW = user.checkPassword(req.body.password);

    if(!goodPW) {
      res.status(400).json({ message: 'Your username or password are incorrect.'});
      return;
    }

    req.session.save(() => {
      req.session.userID = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;

      res.json({ user, message: 'Login Successful!'});
    });
  } catch(err) {
    console.log(req.body.username);
    res.status(400).json({ message: 'Your username or password are incorrect.' });
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
