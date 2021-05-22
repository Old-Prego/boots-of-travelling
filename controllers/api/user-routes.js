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

router.post('/',bodyParser,async (req, res) => {
    try {
        // console.log(req);
        console.log(req.body);
        console.log(req.query);
        console.log(req.params);
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
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if(!user) {
      res.status(400).json({ message: 'Your username or password are incorrect.'});
      return;
    }

    const goodPW = user.checkPassword(req.body.password);

    if(!validPassword) {
      res.status(400).json({ message: 'Your username or password are incorrect.'});
      return;
    }

    req.session.save(() => {
      req.session.userID = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;

      res.json({ user, message: 'Login Successful!'});
    });
  } catch(err) {
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
