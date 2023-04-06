const express = require('express');
const userRouter = require('./users');
const exerciseRouter = require('./exercises');
const routineRouter = require('./routines');
const enrollmentRouter = require('./enrollments');


const router = express.Router();

router.use('/users', userRouter);
router.use('/exercises', exerciseRouter);
router.use('/routines', routineRouter);
router.use('/enrollments', enrollmentRouter);

module.exports = router;
