const express = require('express');
const router = express.Router();
//  imports
const ServiceController = require('../controllers/ServiceController');
router.get('/', ServiceController.index);
router.get('/api/dev', ServiceController.dev);
router.post('/api/webhook', ServiceController.webhook);

module.exports = router;
