const { createTurnInDiary } = require("../controllers/diaryControllers")

const createTurnInDiaryHandler = async (req, res) => {
  try {
    const { userName, dayTurn, hourTurn } = req.body
    const newTurn = await createTurnInDiary(userName, dayTurn, hourTurn)
    res.status(201).json(newTurn)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createTurnInDiaryHandler,
}
