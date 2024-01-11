const express = require('express');
const diarySchema = require('../models/diaryModel');
const router = express.Router();
const { createTurnInDiaryHandler } = require('../handlers/diaryHandlers');


router.post('/addTurn',createTurnInDiaryHandler)

module.exports = router;