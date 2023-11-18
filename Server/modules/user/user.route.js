const express = require('express');
const router = express.Router();
const userController = require('./user.controller');

// Routes
router.post('/', userController.createUser);
router.get('/:id', auth, userController.getUserDetail);
router.patch('/:id', auth, userController.updateUser);
router.patch('/change-password/:id', auth, userController.changePassword);
router.delete('/:id', auth, userController.deleteUser);
router.get('/', auth, userController.getAllUsers);

module.exports = router;