const express = require('express');

const attackController = require('../controllers/attackController');

//for user authentication
const authController = require('../middleware/authController');
const accessControl = require('../middleware/accessControl');

const router = express.Router()

router.post('/attacks', authController.authenticateUser,accessControl(['admin', 'superadmin']), attackController.createAttack)

router.get('/attacks', authController.authenticateUser, accessControl(['user', 'admin', 'superadmin']), attackController.getAllAttacks);

router.put('/attacks/:id', authController.authenticateUser, accessControl(['admin', 'superadmin']), attackController.updateAttack);

router.delete('/attacks/:id', authController.authenticateUser, accessControl(['admin', 'superadmin']), attackController.deleteAttack)

module.exports = router

