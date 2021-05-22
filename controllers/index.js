const router = require('express').Router();

const apiRoutes = require('./api/');
const stdRoutes = require('./std-routes');

router.use('/api',apiRoutes);
router.use('/',stdRoutes);

module.exports = router;