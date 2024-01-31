// userSlice.js

import { createSlice } from "@reduxjs/toolkit"



const diarySlice = createSlice({
  name: "diary",
  initialState: {
    noted_days: [],
    days:[]
  },
  reducers: {
    getNotedDays: (state, action) => {
      state.noted_days = action.payload
    },
    getDays:(state, action) => {
      state.days = action.payload
    }
  },
})

export const { getNotedDays, getDays } = diarySlice.actions

const diaryReducer = diarySlice.reducer
export default diaryReducer;