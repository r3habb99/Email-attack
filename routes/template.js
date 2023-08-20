const express = require('express');


const templateController = require('../controllers/templateController');

//for user authentication
const authController = require('../middleware/authController');
const accessControl = require('../middleware/accessControl');

const router = express.Router()

router.get('/templates', templateController.getAllTemplates)

router.post('/templates',  templateController.createTemplate)

router.put('/templates/:id', templateController.updateTemplate)

router.delete('/templates/:id', templateController.deleteTemplate);

module.exports = router