const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enrollmentController');

router.get('/', enrollmentController.getEnrollments);
router.post('/', enrollmentController.createEnrollments);
router.get('/routine/:id', enrollmentController.getExcercisesByRountineID);
router.put('/enrollment/:id', enrollmentController.upDateEnrollment);

module.exports = router;