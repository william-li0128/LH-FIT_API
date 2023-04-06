const express = require('express');
const router = express.Router();
const routineController = require('../controllers/routineController');

router.get('/', routineController.getRoutines);
router.get('/:id', routineController.getRoutines);

module.exports = router;