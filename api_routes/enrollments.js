const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enrollmentController');

router.get('/', enrollmentController.getEnrollments);
router.get('/:id', enrollmentController.getEnrollments);

module.exports = router;