import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './slices/authSlice'
import getUsersPostsReducer from './slices/getUsersPostsSlice'
import setTotalLikes  from './slices/totalLikeSlice'
const store = configureStore({
  reducer: {
    auth:AuthReducer,
    userposts:getUsersPostsReducer,
    totalLikes:setTotalLikes
  },
})


export default store;

