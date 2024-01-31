const express = require('express');
const router = express.Router();
const { createTurnInDiaryHandler, getUserTurnsHandler } = require('../handlers/diaryHandlers');


router.post('/addTurn',createTurnInDiaryHandler)
router.get('/:userName',getUserTurnsHandler)

module.exports = router;