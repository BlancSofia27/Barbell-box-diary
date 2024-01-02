// userSlice.js

import { createSlice } from "@reduxjs/toolkit"



const userSlice = createSlice({
  name: "user",
  initialState: {
    user_noted_days: [],
    days:[]
  },
  reducers: {
    getNotedDays: (state, action) => {
      state.user_noted_days = action.payload
    },
    getDays:(state, action) => {
      state.days = action.payload
    }
  },
})

export const { getNotedDays, getDays } = userSlice.actions

const userReducer = userSlice.reducer
export default userReducer;
