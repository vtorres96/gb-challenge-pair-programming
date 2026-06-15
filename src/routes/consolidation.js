const express = require('express');
const router = express.Router();

const ConsolidationController = require('../controllers/consolidation');

router.get('/', ConsolidationController.index);

module.exports = router;
