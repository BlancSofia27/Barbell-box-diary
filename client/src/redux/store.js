import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import diaryReducer from "./diary/diarySlice"

export default configureStore({
  reducer: {
    user: userReducer,
    diary: diaryReducer,
  },
});
