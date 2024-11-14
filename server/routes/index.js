const express = require('express');
const authRoutes = require('./auth');
const formRoutes = require('./form');
const responseRoutes = require('./response');

const router = express.Router();

// Define route prefixes for each module
router.use('/auth', authRoutes);
router.use('/forms', formRoutes);
router.use('/forms', responseRoutes); // Responses are part of forms

module.exports = router;
