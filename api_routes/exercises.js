const express = require('express');
const router = express.Router();
const exerciseController = require('../controllers/exerciseController');

// router to search exercise database by name and show a list.
router.get('/', exerciseController.getExercisesByName);

// router to search exercise database by id and show 1 exercise.
router.get('/:id', exerciseController.findExercisesByID);

/* router to search exercise database by difficulty
and muscel. Afterward show them a list of matched ones. */
router.get('/queries', exerciseController.getExercisesByQueries);

module.exports = router;