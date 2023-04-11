const express = require('express');
const router = express.Router();
const exerciseController = require('../controllers/exerciseController');

// router will also change reps and sets according to different training goals.
router.get('/', exerciseController.getExercisesByQueries);

// router to search exercise database by name and show a list.
router.get('/search', exerciseController.getExercisesBySearch);

// router to search exercise database by id and show 1 exercise.
router.get('/search-by/:id', exerciseController.findExercisesByID);

module.exports = router;