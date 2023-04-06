const express = require('express');
const router = express.Router();
const exerciseController = require('../controllers/exerciseController');

router.get('/', exerciseController.getExercises);
router.get('/:id', exerciseController.getExercises);

module.exports = router;