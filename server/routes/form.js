const express = require('express');
const { createForm } = require('@controllers/formController');
const router = express.Router();
const authMiddleware = require('@middleware/auth');

// Protect routes with authentication
router.post('/', authMiddleware, createForm);

module.exports = router;
