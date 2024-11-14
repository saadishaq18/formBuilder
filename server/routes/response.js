const express = require('express');
const { submitResponse } = require('@controllers/responseController');
const router = express.Router();

router.post('/:formId/response', submitResponse);

module.exports = router;
