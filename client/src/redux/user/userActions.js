import axios from "axios"
import { getNotedDays, getDays } from "./userSlice.js"

const URLBASE = "http://localhost:9000"


export const getUserInfo = () => {
  return async (dispatch) => {
    axios
      .get(`${URLBASE}/api/users/sofia27/notedDays`)
      .then((res) => {
        dispatch(getNotedDays(res.data))
      })
      .catch((e) => console.log(e))
  }
}

export const getUserDays = () => {
  return async (dispatch) => {
    axios
      .get(`${URLBASE}/api/users/sofia27/days`)
      .then((res) => {
        dispatch(getDays(res.data))
      })
      .catch((e) => console.log(e))
  }
}

export const addTurnToUser = async (turn, userName) => {
  try {
    // Agregar el turno
    const response = await axios.post(
      `${URLBASE}/api/users/addTurn/${userName}/${turn}`
    )
    return response.data
  } catch (error) {
    console.error('Error al agregar el turno:', error.message)
    throw error
  }
}

export const deleteTurnToUser = async (turn, userName) => {
  try {
    const response = await axios.delete(
      `${URLBASE}/api/users/deleteTurn/${userName}/${turn}`
    )
    return response.data
  } catch (error) {
    console.error('Error al eliminar el turno:', error.message)
    throw error
  }
}

export const addUser =  (info) => async (dispatch) => {
  try {
    const response = await axios.post(`${URLBASE}/user/addUser`,info)
      console.log('usuario creado con exito', response.data)
  } catch (error) {
    console.log('error al crear el usuario:', error.message)
  }
}
