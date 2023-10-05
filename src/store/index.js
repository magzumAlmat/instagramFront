import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './slices/authSlice'

const store = configureStore({
  reducer: {
    auth:AuthReducer
  },
})


export default store;

