//Serve as means to collect all the api routes and package them up for use. 
const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;
