const { createTurnInDiary,getUserTurns } = require("../controllers/diaryControllers")

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

const getUserTurnsHandler = async (req,res) => {
  try {
    const {userName} = req.params;
    console.log('usuario:',userName)
    const response = await getUserTurns(userName);
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json({error:error.message})
  }
}

module.exports = {
  createTurnInDiaryHandler,
  getUserTurnsHandler
}
