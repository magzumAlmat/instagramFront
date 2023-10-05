import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import END_POINT from '@/config/index';
import jwt_decode from 'jwt-decode';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    currentUser: null,
    someVar: 'blah blah blah',
    authToken: '',
  },
  reducers: {
    authorize: (state, action) => {
      const decoded = jwt_decode(action.payload.token);
      
      state.currentUser = {
        id: decoded.id,
        email: decoded.email,
        name: decoded.name,
        password: decoded.password,
      };
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
    },
    editVar: (state) => {
      state.someVar = 'AAAAAAAÆ';
    },
  },
});

// Action creators are generated for each case reducer function
export const {authorize, logout, editVar } = authSlice.actions;

export const createUser = (email, name, password) => (dispatch) => {
  console.log('1 createUser запустился ', email, name, password);
  
  axios.post(`${END_POINT}/api/auth/createuser`, {
      email: email,
      name: name,
      password: password,
    })
    .then((res) => {
      dispatch(authorize(res.data));
    });
};

export default authSlice.reducer;
