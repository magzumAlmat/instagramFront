import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import END_POINT from '@/config/index';
import jwt_decode from 'jwt-decode';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux'; // Import useDispatch
const initialState = {
  isAuth: false,
  currentUser: null,
  someVar: 'blah blah blah',
  authToken: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    authorize: (state, action) => {
      localStorage.setItem('token', action.payload.token);

      axios.defaults.headers.common['Authorization'] = `Bearer${action.payload.token}`;
      const decoded = jwt_decode(action.payload.token);

      state.currentUser = {
        id: decoded.id,
        email: decoded.email,
        name: decoded.name,
        username: decoded.username,
        password: decoded.password,
      };
      state.isAuth = true;
    },

    login: (state, action) => {
      localStorage.setItem('token', action.payload.token);

      axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`; // Add space after 'Bearer'
      const decoded = jwt_decode(action.payload.token);

      state.currentUser = {
        id: decoded.id,
        email: decoded.email,
        name: decoded.name,
        username: decoded.username,
        password: decoded.password,
      };
      state.isAuth = true;
    },


    logout: (state) => {
      // Clear user-related state when logging out
      localStorage.removeItem('token'); // Remove the token from localStorage
      axios.defaults.headers.common['Authorization'] = ''; // Remove Authorization header
      state.currentUser = null;
      state.isAuth = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { authorize, logout, editVar,login } = authSlice.actions;

// Use useEffect for token initialization
export const useTokenInitialization = () => {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch(); // Create a dispatch function

  useEffect(() => {
    if (token) {
      let decodedToken = jwt_decode(token);
      initialState.isAuth = true;
      initialState.currentUser = {
        id: decodedToken.id,
        email: decodedToken.email,
        name: decodedToken.name,
        password: decodedToken.password,
        username: decodedToken.username,
      };
      axios.post(`${END_POINT}/api/auth/login`, {
        email: decodedToken.email, // Use the decoded email
        password: decodedToken.password, // Use the decoded password
      }).then((res) => {
        dispatch(login(res.data)); // Dispatch the login action
      });
    } else {
      localStorage.removeItem('token');
    }
  }, [token, dispatch]); // Include dispatch as a dependency

  console.log('Token не найден');
  return null;
};








export const createUser = (email, name, password, username) => (dispatch) => {
  console.log('1 createUser запустился ', email, name, password, username);

  axios.post(`${END_POINT}/api/auth/createuser`, {
    email: email,
    name: name,
    username: username,
    password: password,
  }).then((res) => {
    dispatch(authorize(res.data));
  });
};

export const authUser = (email, password) => (dispatch) => {
  localStorage.removeItem('token');
  console.log('1 AutheUser запустился ', email, password);

  axios.post(`${END_POINT}/api/auth/login`, {
    email: email,
    password: password,
  }).then((res) => {
    dispatch(login(res.data));
  });
};

export const logoutAction = () => (dispatch) => {
  console.log('logoutAction started/');

  dispatch(logout());
};

export default authSlice.reducer;
