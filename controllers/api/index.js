const router = require('express').Router();

const enemyRoutes = require('./enemy-routes');
const roomRoutes = require('./room-routes');

router.use('/enemy',enemyRoutes);
router.use('/room',roomRoutes);

module.exports = router;