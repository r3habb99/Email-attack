const express = require('express');

const authController = require('../controllers/authController');

//for user authentication
const UserController = require('../middleware/authController');

const router = express.Router()

router.post('/auth/register', UserController.register)

router.post('/auth/login', UserController.login) 

module.exports = router
