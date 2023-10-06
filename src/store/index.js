import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './slices/authSlice'
import getUsersPostsReducer from './slices/getUsersPostsSlice'
const store = configureStore({
  reducer: {
    auth:AuthReducer,
    userposts:getUsersPostsReducer,
  },
})


export default store;

