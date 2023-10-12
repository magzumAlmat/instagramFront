import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import END_POINT from '@/config/index';
import jwt_decode from 'jwt-decode';



const token = localStorage.getItem("token")
// console.log('Token from create post slice:', token)
let initialState = {
    isAuth: false,
    currentUser: null,
    someVar: 'blah blah blah',
    authToken: '',
    posts:[]
    
}

if (token) {
    let decodedToken = jwt_decode(token)
    // console.log('decodedToken from redux',decodedToken)
    initialState = {
        isAuth: true,
        currentUser: {
            id: decodedToken.id,
            email: decodedToken.email,
            name: decodedToken.name,
            password: decodedToken.password,
            username: decodedToken.username,
        },
        posts:[],
    }
} else {
    localStorage.removeItem("token")

}


export const createPostSlice = createSlice({
    
    name: 'createpost',
    initialState,

    reducers: {
        createPost:(state,action)=>{
            // console.log('Token from create post slice:', token)
            // console.log('createpost reducer started')
            localStorage.setItem('token', action.payload.token)
            axios.defaults.headers.common['Authorization'] = `Bearer${
                action.payload.token
            }`
            const decoded = jwt_decode(action.payload.token);
            // console.log('createPostReducer',decoded)
            state.currentUser = {
                id: decoded.id,
                email: decoded.email,
                name: decoded.name,
                username: decoded.username,
                password: decoded.password
            };
            
            state.isAuth = true;
            state.userPosts={

            }

           


           
        },


        getUsersPostsReducer:(state,action,data)=>{
            // console.log('4 getUsersPosts STARTED')
            
            // useEffect(() => {
            //     if (token) {
            //       let decodedToken = jwt_decode(token);
            //       initialState.isAuth = true;
            //       initialState.currentUser = {
            //         id: decodedToken.id,
            //         email: decodedToken.email,
            //         name: decodedToken.name,
            //         password: decodedToken.password,
            //         username: decodedToken.username,
            //       };
            //       initialState.posts={
            //         sfd:'afsdfsd'
            //       }
            //     } else {
            //       localStorage.removeItem('token');
            //     }
            //   }, [token]);
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

export const {authorize, logout, editVar,createPost,getUsersPostsReducer} = createPostSlice.actions;

export const createPostFunc = (formData) => (dispatch) => {
    const token = localStorage.getItem("token");
    // console.log('2 token from localstorage',token)

    // console.log('1 createPostSlice | createPostFunc запустился ');
    
    for (const value of formData.values()) {
        // console.log('formData Values',value);
    }
      



    if (!token) {
        // Handle the case where the token is not available or invalid
        console.error('Token not available');
        return;
    }


    
    try{
     axios.post(`${END_POINT}/api/createpost`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            })
                .then((response) => {
                    console.log('File uploaded successfully:', response.data);
                    dispatch(createPost(response.data))
                })
                .catch((error) => {
                    console.error('Error uploading file:', error);
                });
        }

    catch (error) {
        // Handle errors, e.g., by returning an error object
        throw error;
      }
    // axios.post(`${END_POINT}/api/posts/byUsername/`, {
    //     email: email,
    //     name: name,
    //     username: username,
    //     password: password
    // }).then((res) => {
    //     dispatch(authorize(res.data));
    // });
};

export const getUsersPostsAction = () => async (dispatch) => {
    // console.log('1 getUsersPosts STARTED');
    const token = localStorage.getItem('token');

    // console.log('2 getUsersPosts token=', token);
    let decodedToken = jwt_decode(token)
    // console.log('3 getUsersPosts decoded=', decodedToken.username);
  
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
    //   console.log('response from axios=',response.data)
      dispatch(getUsersPostsReducer(response.data));
      
    } catch (error) {
      // Handle errors, e.g., by returning an error object
      throw error;
    }
  };





export const createUser = (email, name, password, username) => (dispatch) => {
    // console.log('1 createUser запустился ', email, name, password, username);

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
    // console.log('1 createUser запустился ', email, password);

    axios.post(`${END_POINT}/api/auth/login`, {
        email: email,
        password: password
    }).then((res) => {
        dispatch(authorize(res.data));
    });
};


export const logoutAction = () => (dispatch) => {
    // console.log('logoutAction started/');


    dispatch(logout());

};


export default createPostSlice.reducer;