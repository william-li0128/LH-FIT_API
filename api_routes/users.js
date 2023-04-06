const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUsers);
router.post('/', userController.createUser);
// POST /login
router.post('/login', userController.comparePasswords, async (req, res) => {
  /* If the middleware function was successful, 
  the user object will be available in the request object. */
  const user = req.user;
});

router.get('/:id', userController.findUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;

