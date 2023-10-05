import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import END_POINT from '@/config/index';
import jwt_decode from 'jwt-decode';


const token = localStorage.getItem("token")

let initialState = {
    isAuth: false,
    currentUser: null,
    someVar: 'blah blah blah',
    authToken: ''
}

if (token) {
    let decodedToken = jwt_decode(token)
    initialState = {
        isAuth: true,
        currentUser: {
            id: decodedToken.id,
            email: decodedToken.email,
            name: decodedToken.name,
            password: decodedToken.password
        }
    }
} else {
    localStorage.removeItem("token")

}

export const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        authorize: (state, action) => {
            localStorage.setItem('token', action.payload.token)

            axios.defaults.headers.common['Authorization'] = `Bearer${
                action.payload.token
            }`
            const decoded = jwt_decode(action.payload.token);

            state.currentUser = {
                id: decoded.id,
                email: decoded.email,
                name: decoded.name,
                username: decoded.username,
                password: decoded.password
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
export const {authorize, logout, editVar} = authSlice.actions;

export const createUser = (email, name, password, username) => (dispatch) => {
    console.log('1 createUser запустился ', email, name, password, username);

    axios.post(`${END_POINT}/api/auth/createuser`, {
        email: email,
        name: name,
        username: username,
        password: password
    }).then((res) => {
        dispatch(authorize(res.data));
    });
};


export const authUser = (email, password) => (dispatch) => {
    localStorage.removeItem("token")
    console.log('1 createUser запустился ', email, password);

    axios.post(`${END_POINT}/api/auth/login`, {
        email: email,
        password: password
    }).then((res) => {
        dispatch(authorize(res.data));
    });
};


export const logoutAction = () => (dispatch) => {
    console.log('logoutAction started/');


    dispatch(logout());

};


export default authSlice.reducer;

