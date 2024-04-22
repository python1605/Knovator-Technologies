const express = require('express');

const user = require('./userRoutes');
const post=require('./postRoutes')

const router = express.Router();

router.use('/users', user);
router.use('/post', post);


module.exports = router;
