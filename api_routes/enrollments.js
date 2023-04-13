const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enrollmentController');

router.get('/', enrollmentController.getEnrollments);
router.get('/routine/:id', enrollmentController.getExcercisesByRountineID);

module.exports = router;