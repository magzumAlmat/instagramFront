import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import END_POINT from '@/config/index';
import jwt_decode from 'jwt-decode';
import {useEffect} from 'react';


const token = localStorage.getItem("token")

let initialState = {
    isAuth: false,
    currentUser: null,
    someVar: 'blah blah blah',
    authToken: '',
    posts: [],
  
    allPosts:[]
}

if (token) {
    let decodedToken = jwt_decode(token)
    console.log('decodedToken from redux', decodedToken)
    initialState = {
        isAuth: true,
        currentUser: {
            id: decodedToken.id,
            email: decodedToken.email,
            name: decodedToken.name,
            password: decodedToken.password,
            username: decodedToken.username
        },
        posts: [],
        allPosts:[]

    }
} else {
    localStorage.removeItem("token")
}


export const userPostsSlice = createSlice({

    name: 'userposts',
    initialState,

    reducers: {
        getUsersPostsReducer: (state, data) => {


            // console.log('data =', data.payload)
            state.posts.push(...data.payload);

        },

        getAllUsersPostsReducer: (state, data) => {


            console.log('AllPosts data =', data.payload)
            state.allPosts.push(...data.payload);

        }


    }
});


export const {getUsersPostsReducer,getAllUsersPostsReducer} = userPostsSlice.actions;

export const getUsersPostsAction = () => async (dispatch) => {

    console.log('1 getUsersPosts STARTED');
    const token = localStorage.getItem('token');

    // console.log('2 getUsersPosts token=', token);
    let decodedToken = jwt_decode(token)
    // console.log('3 getUsersPosts decoded=', decodedToken.username);

    if (! token) { // Handle the case where the token is not available or invalid
        console.error('Token not available');
        return;
    }


    try {
        const response = await axios.get(`${END_POINT}/api/posts/byUsername/${
            decodedToken.username
        }`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        });
        // console.log('response from axios=',response.data)
        dispatch(getUsersPostsReducer(response.data));

    } catch (error) { // Handle errors, e.g., by returning an error object
        throw error;
    }
};

export const getAllUsersPostsAction=()=>async(dispatch)=>{
    console.log('1 getAllUserPostsAction STARTED');
    const token = localStorage.getItem('token');

    // console.log('2 getUsersPosts token=', token);
    let decodedToken = jwt_decode(token)
    // console.log('3 getUsersPosts decoded=', decodedToken.username);

    if (! token) { // Handle the case where the token is not available or invalid
        console.error('Token not available');
        return;
    }


    try {
        const response = await axios.get(`${END_POINT}/api/post/all`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        });
        // console.log('response from axios=',response.data)
        dispatch(getAllUsersPostsReducer(response.data));

    } catch (error) { // Handle errors, e.g., by returning an error object
        throw error;
    }
}

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


export default userPostsSlice.reducer;
