import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './slices/authSlice'
import getUsersPostsReducer from './slices/getUsersPostsSlice'
import setTotalLikes  from './slices/totalLikeSlice'
// import { createStoryReducer } from './slices/createStorySlice'
const store = configureStore({
  reducer: {
    auth:AuthReducer,
    userposts:getUsersPostsReducer,
    totalLikes:setTotalLikes,
    
  },
})


export default store;

