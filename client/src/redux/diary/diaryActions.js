import axios from "axios"
import {getNotedDays} from './diarySlice.js'
const URLBASE = "http://localhost:9000"

export const addTurnToUser =  (turnData) => async (dispatch) => {
    try {
        console.log(turnData)
      const response = await axios.post(`${URLBASE}/diary/addTurn`,turnData)
        console.log('turno agregado con exito', response.data)
    } catch (error) {
      console.log('error al agregar el turno:', error.message)
    }
  }

  export const getUserNotedDays = (userName) => {
    
    return async (dispatch) =>{
        axios
        .get(`${URLBASE}/diary/${userName}`)
        .then((res) => {
            dispatch(getNotedDays(res.data))
        })
        .catch((error) => console.log(error.message))
    }
  }