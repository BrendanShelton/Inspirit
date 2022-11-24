const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./savedRoutes');
const quoteRoutes = require('./quoteRoutes');

router.use('/users', userRoutes);
router.use('/saved', projectRoutes);
router.use('/quotes', quoteRoutes)
module.exports = router;
