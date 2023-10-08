// // dataSlice.js

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   // Define your initial state here
//   data: [],
//   isLoading: false,
//   error: null,
// };

// const dataSlice = createSlice({
//   name: 'data',
//   initialState,
//   reducers: {
//     fetchDataStart: (state) => {
//       state.isLoading = true;
//       state.error = null;
//     },
//     fetchDataSuccess: (state, action) => {
//       state.data = action.payload;
//       state.isLoading = false;
//     },
//     fetchDataFailure: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = dataSlice.actions;

// export default dataSlice.reducer;



import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import END_POINT from '@/config/index';
import jwt_decode from 'jwt-decode';


const token = localStorage.getItem("token")

let initialState = {
    isAuth: false,
    currentUser: null,
    someVar: 'blah blah blah',
    authToken: '',
    posts:[],
    isLoading: false,
}

if (token) {
    let decodedToken = jwt_decode(token)
    console.log('decodedToken from redux',decodedToken)
    initialState = {
        isAuth: true,
        currentUser: {
            id: decodedToken.id,
            email: decodedToken.email,
            name: decodedToken.name,
            password: decodedToken.password,
            username: decodedToken.username,
        },
    posts:[]
    
    }
} else {
    localStorage.removeItem("token")
}


export const userPostsSlice = createSlice({
    
    name: 'userposts',
    initialState,

    reducers: {
        getUsersPostsReducer:(state,data)=>{
     
            console.log('data =',data.payload)
         
           

            
            // localStorage.setItem('token', action.payload.token)

            // axios.defaults.headers.common['Authorization'] = `Bearer${
            //     action.payload.token
            // }`

            // const decoded = jwt_decode(action.payload.token);
            // state.currentUser = {
            //     id: decoded.id,
            //     email: decoded.email,
            //     name: decoded.name,
            //     username: decoded.username,
            //     password: decoded.password
            // };
            // state.isAuth = true;

            // console.log('getUsersPosts - data=',data)
            // console.log('getUsersPosts - decoded=',currentUser.username)

          state.posts.push(...data.payload);

         
          

        // console.log('!!!!!POSTS',posts)
            
            // state.posts = {
            //     commentaries: postItems.commentaries,
            //     creatorId: postItems.creatorId,
            //     description:  postItems.description,
            //     id: postItems.id,
            //     likes:  postItems.likes,
            //     mediaLinks: postItems.mediaLinks,
            //   };

            //   console.log('POSTS=',state.posts)
        },

    
//   },
      
    }
});

// Action creators are generated for each case reducer function
export const {getUsersPostsReducer} = userPostsSlice.actions;

export const getUsersPostsAction = () => async (dispatch) => {
    console.log('1 getUsersPosts STARTED');
    const token = localStorage.getItem('token');

    console.log('2 getUsersPosts token=', token);
    let decodedToken = jwt_decode(token)
    console.log('3 getUsersPosts decoded=', decodedToken.username);
  
    if (!token) {
      // Handle the case where the token is not available or invalid
      console.error('Token not available');
      return;
    }
  

    try {
      const response = await axios.get(`${END_POINT}/api/posts/byUsername/${decodedToken.username}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('response from axios=',response.data)
      dispatch(getUsersPostsReducer(response.data));
      
    } catch (error) {
      // Handle errors, e.g., by returning an error object
      throw error;
    }
  };



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