import {createSlice, current} from '@reduxjs/toolkit';
import axios from 'axios';
import END_POINT from '@/config/index';
import jwt_decode from 'jwt-decode';
import {use, useEffect} from 'react';


const token = localStorage.getItem("token")

let initialState = {
    isAuth: false,
    currentUser: null,
    someVar: '111111111111111111',
    authToken: '',
    posts: [],
  
    allPosts:[],
    allUsers:[],
    countOfLikes:[],
    userPosts:[],
    followedUsers:[]
}

if (token) {
    let decodedToken = jwt_decode(token)
    console.log('decodedToken from redux', token)
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
        allPosts:[],
        allUsers:[],
        countOfLikes:[],
        userPosts:[],
        someVar: '1111111111111111112',
        followedUsers:[]

    }
} else {
    localStorage.removeItem("token")
}


export const userPostsSlice = createSlice({

    name: 'userposts',
    initialState,

    reducers: {
        updatePostLikes: (state, action) => {
            // Update the likes count for a specific post
            const { postId, likesCount } = action.payload;
            const post = state.allPosts.find((post) => post.id === postId);
            if (post) {
              post.likesCount = likesCount;
            }
          },
        getUsersPostsReducer: (state, data) => {
            console.log('1 getUsersPostsReducer started   =', data.payload)
            console.log('current YSER in getUsersPostsReducer ',currentUser)
            localStorage.setItem("token", currentUser);
            state.userPosts.push(...data.payload);
            console.log('localstorage get item in  getUsersPostsReducer',localStorage.getItem("token"))

        },
        showAllUserPostsReducer: (state, data) => {
            state.userPosts.push(...data.payload);
        },
        getAllUsersPostsReducer: (state, data) => {

            // state.allPosts.push(null)
            console.log('11111AllPosts data =', data.payload)
            state.allPosts.push(...data.payload);
        },
        getAllUsersReducer: (state, data) => {
            // console.log('AllUsers data =', data.payload)
            state.allUsers.push(...data.payload);

        },
        addPostLikeReducer: (state, data) => {
            console.log('4 AllLikes data =', data.payload)
         
            // state.countOfLikes.push(data)
            // state.allUsers.push(...data.payload);
            // state.someVar=data.payload



        },
        addPostCommentaryReducer: (state, data) => {
            console.log('4 AllLikes data =', data.payload)
            // state.countOfLikes.push(data)
            // state.allUsers.push(...data.payload);
            // state.someVar=data.payload



        },

        followUserReducer:(state,data,userId)=>{
            console.log('follow reducer data =', data.payload,userId)
            state.followedUsers.push(...data.payload)
        },
     
        unfollowUserReducer:(state,data,userId)=>{
            console.log('follow reducer data =', data.payload,userId)
            state.followedUsers.push(...data.payload)
        },

      
}});


export const {getUsersPostsReducer,followUserReducer,unfollowUserReducer,
    getAllUsersPostsReducer,
    getAllUsersReducer,
    addPostLikeReducer, addPostCommentaryReducer,
    showAllUserPostsReducer,updatePostLikes} = userPostsSlice.actions;

export const getUsersPostsAction = () => async (dispatch) => {
    // if(token){
    //     localStorage.removeItem("token")
    // }

    console.log('1 getUsersPosts STARTED',token);
    const token = localStorage.getItem('token');

    console.log('2 getUsersPosts token=', token);
    let decodedToken = jwt_decode(token)
    // console.log('3 getUsersPosts decoded=', decodedToken.username);

    if (!token) { // Handle the case where the token is not available or invalid
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

    if (!token) { // Handle the case where the token is not available or invalid
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



export const getAllUsersAction=()=>async(dispatch)=>{
    // console.log('1 getAllUserPostsAction STARTED');
    const token = localStorage.getItem('token');

    // console.log('2 getUsersPosts token=', token);
    // let decodedToken = jwt_decode(token)
    // console.log('3 getUsersPosts decoded=', decodedToken.username);

    if (!token) { // Handle the case where the token is not available or invalid
        console.error('Token not available');
        return;
    }


    const response = await axios.get(`${END_POINT}/api/getallusers`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
    });
    // console.log('response from axios=',response.data)
    dispatch(getAllUsersReducer(response.data));

    
}

export const showAllUserPosts = () => async (dispatch) => {
    const token = localStorage.getItem("token");
    const response = await axios.get('http://157.245.193.184:3002/api/post', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                // console.log('response data', response.data)
                dispatch(showAllUserPostsReducer(response.data))
}

export const addPostLikeAction=(post)=> async (dispatch)=>{
    // console.log('1 addPostLikeAction STARTED',post);
   
    // console.log('2 addPostLikeAction POSTID',postId);

    const token = localStorage.getItem('token');

    // console.log('2 getUsersPosts token=', token);
    let decodedToken = jwt_decode(token)
    // console.log('3 getUsersPosts decoded=', decodedToken.username);

    if (!token) { // Handle the case where the token is not available or invalid
        console.error('Token not available');
        return;
    }


    
    const response = await axios.post(`${END_POINT}/api/like/post/${post.id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
    });
    console.log('3 addPostLikeAction response from axios=',response.data)
    dispatch(addPostLikeReducer(response.data));


    
}





export const followUserAction=(userId)=> async (dispatch)=>{
    console.log('1 followUserAction STARTED | user',userId);
   
    // console.log('2 addPostLikeAction POSTID',postId);

    const token = localStorage.getItem('token');

    // console.log('2 getUsersPosts token=', token);
    let decodedToken = jwt_decode(token)
    console.log('token from folllowAction', token);

    if (!token) { // Handle the case where the token is not available or invalid
        console.error('Token not available');
        return;
    }



    
    const response = await axios.post(`${END_POINT}/api/follow/${String(userId)}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
    console.log('3 followuserAction response from axios=',response.data)

    dispatch(followUserReducer(response.data));


    
}


export const unfollowUserAction=(userId)=> async (dispatch)=>{
    console.log('1 followUserAction STARTED | user',userId);
   
    // console.log('2 addPostLikeAction POSTID',postId);

    const token = localStorage.getItem('token');

    // console.log('2 getUsersPosts token=', token);
    let decodedToken = jwt_decode(token)
    // console.log('3 getUsersPosts decoded=', decodedToken.username);

    if (!token) { // Handle the case where the token is not available or invalid
        console.error('Token not available');
        return;
    }



    
    const response = await axios.post(`${END_POINT}/api/unfollow/${String(userId)}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
    console.log('3 followuserAction response from axios=',response.data)

    dispatch(unfollowUserReducer(response.data));


    
}








export const addPostCommentAction=(comment,post)=> async (dispatch)=>{
    console.log('1 addPostCommentAction STARTED',comment,'postID=',post.id);
 
    // console.log('2 addPostLikeAction POSTID',postId);

    const token = localStorage.getItem('token');
    // console.log('2 getUsersPosts token=', token);
    let decodedToken = jwt_decode(token)
    // console.log('3 getUsersPosts decoded=', decodedToken.username);
    if (!token) { // Handle the case where the token is not available or invalid
        console.error('Token not available');
        return;
    }

    
    const response = await axios.post(`${END_POINT}/api/comment/${post.id}`, {commentary:comment},{
        headers: {
            'Authorization': `Bearer ${token}`,
          
        }
    });
    console.log('3 addPostLikeAction response from axios=',response.data)
    dispatch(addPostCommentaryReducer(response.data));


    
}










// export const createUser = (email, name, password, username) => (dispatch) => {
//     // console.log('1 createUser запустился ', email, name, password, username);

//     axios.post(`${END_POINT}/api/auth/createuser`, {
//         email: email,
//         name: name,
//         username: username,
//         password: password
//     }).then((res) => {
//         dispatch(authorize(res.data));
//     });
// };


// export const authUser = (email, password) => (dispatch) => {
//     localStorage.removeItem("token")
//     // console.log('1 createUser запустился ', email, password);

//     axios.post(`${END_POINT}/api/auth/login`, {
//         email: email,
//         password: password
//     }).then((res) => {
//         dispatch(authorize(res.data));
//     });
// };


// export const logoutAction = () => (dispatch) => {
//     // console.log('logoutAction started/');


//     dispatch(logout());

// };


export default userPostsSlice.reducer;