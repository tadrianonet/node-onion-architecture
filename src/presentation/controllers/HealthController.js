// src/presentation/controllers/HealthController.js
const express = require('express');
const router = express.Router();

router.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

module.exports = router;
