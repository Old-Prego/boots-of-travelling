const router = require('express').Router();

const enemyRoutes = require('./enemy-routes');
const roomRoutes = require('./room-routes');
const userRoutes = require('./user-routes');

router.use('/enemy',enemyRoutes);
router.use('/room',roomRoutes);
router.use('/user',userRoutes);

module.exports = router;