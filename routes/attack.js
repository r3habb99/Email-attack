const express = require('express');

const attackController = require('../controllers/attackController');

//for user authentication
// let authController = require('../middleware/authController');
// let accessControl = require('../middleware/accessControl');

const router = express.Router()

router.post('/attacks', attackController.createAttack)

router.get('/attacks',  attackController.getAllAttacks);

router.post('/attacks/:id',  attackController.updateAttack);

router.delete('/attacks/:id',  attackController.deleteAttack)

module.exports = router

