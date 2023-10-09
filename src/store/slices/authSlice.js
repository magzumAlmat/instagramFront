import { createSlice, current } from '@reduxjs/toolkit';
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
const token = localStorage.getItem('token');

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,

//   reducers: {
//     authorize: (state, action) => {
//       localStorage.setItem('token', action.payload.token);
//       axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;
//       // axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;
//       const decoded = jwt_decode(action.payload.token);

//       state.currentUser = {
//         id: decoded.id,
//         email: decoded.email,
//         name: decoded.name,
//         username: decoded.username,
//         password: decoded.password,
//       };
//       state.isAuth = true;
//     },

//     login: (state, action) => {
//       console.log('Login Reducer started! ')
//       localStorage.setItem("token", action.payload.token);
//       console.log('TOKEN',localStorage.getItem("token"));
//       axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;

//       // axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`; // Add space after 'Bearer'
//       const decoded = jwt_decode(action.payload.token);
//       console.log('decoded token=========', decoded)
//       state.currentUser = {
//         id: decoded.id,
//         email: decoded.email,
//         name: decoded.name,
//         username: decoded.username,
//         password: decoded.password,
//       };
//       state.isAuth = true;
//     console.log('curr user',state.currentUser)
//     },



//     logout: (state) => {
//       // Clear user-related state when logging out
//       localStorage.removeItem('token'); // Remove the token from localStorage
//       axios.defaults.headers.common['Authorization'] = ''; // Remove Authorization header
//       state.currentUser = null;
//       state.isAuth = false;
//     },
//   },
// });

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
      authorize: (state, action) => {

          console.log('Login Reducer started! token from profileMyposts',token)
          localStorage.setItem("token", action.payload.token);
          console.log('TOKEN',localStorage.getItem("token"));
          axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;
          // axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`; // Add space after 'Bearer'
        
          const decoded = jwt_decode(action.payload.token);
          console.log('decoded token=========', decoded)
          state.currentUser = {
            id: decoded.id,
            email: decoded.email,
            name: decoded.name,
            username: decoded.username,
            password: decoded.password,
          };
          state.isAuth = true;
      },


      logout: (state) => { // Clear user-related state when logging out
          localStorage.removeItem('token'); // Remove the token from localStorage
          axios.defaults.headers.common['Authorization'] = ''; // Remove Authorization header
          state.currentUser = null;
          state.isAuth = false;
      }
  }
});

// Action creators are generated for each case reducer function
export const { authorize, logout, editVar } = authSlice.actions;

// Use useEffect for token initialization
// export const useTokenInitialization = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (token) {
//       let decodedToken = jwt_decode(token);

//       // Create a new state object and set properties
//       const newState = {
//         ...initialState,
//         isAuth: true,
//         currentUser: {
//           id: decodedToken.id,
//           email: decodedToken.email,
//           name: decodedToken.name,
//           password: decodedToken.password,
//           username: decodedToken.username,
//         },
//       };

//       axios.post(`${END_POINT}/api/auth/login`, {
//         email: decodedToken.email,
//         password: decodedToken.password,
//       }).then((res) => {
//         dispatch(login(res.data));
//       });

//       // Dispatch the login action with the new state
//       dispatch(login(newState));
//     } else {
//       localStorage.removeItem('token');
//     }
//   }, [token, dispatch]);

//   console.log('Token не найден');
//   return null;
// };

export const useTokenInitialization = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('TOKENNNNNNNNNnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn', token)
    if (token) {
      try {
        let decodedToken = jwt_decode(token);
        console.log('decode token', decodedToken)
        // Dispatch the authorize action with user data from the token
        dispatch(
          authorize({
            token: token,
            id: decodedToken.id,
            email: decodedToken.email,
            name: decodedToken.name,
            username: decodedToken.username,
            password: decodedToken.password,
          })
        );
      } catch (error) {
        console.error('Error decoding token:', error);
        localStorage.removeItem('token'); // Remove invalid token
      }
    }
  }, [dispatch]);

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
  }).catch((error)=>{
    console.log('error')
  });
};

export const authUser = (email, password) => (dispatch) => {
  // axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;

  console.log('auth user start')
  localStorage.removeItem('token');

  console.log('1 AutheUser запустился ', email, password);

  axios.post(`${END_POINT}/api/auth/login`, {
    email: email,
    password: password,
  }).then((res) => {
    dispatch(authorize(res.data));
  });
};

export const logoutAction = () => (dispatch) => {
  console.log('logoutAction started/');

  dispatch(logout());
};

export default authSlice.reducer;
