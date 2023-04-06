const express = require('express');
const userRouter = require('./users');
const exerciseRouter = require('./exercises');

const router = express.Router();

router.use('/users', userRouter);
router.use('/exercises', exerciseRouter);

module.exports = router;
