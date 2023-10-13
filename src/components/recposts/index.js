import Image from "next/image"
import {useState, useEffect} from "react";
import axios from "axios";
import RecommendedPost from './recpost/RecommendedPost';
import { authSlice,editVar,logout } from '@/store/slices/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import { authorize ,createUser,authUser} from '@/store/slices/authSlice'
// import { getUsersPostsReducer} from '@/store/slices/userPostsSlice';
import getUsersPostsReducer from "@/store/slices/getUsersPostsSlice";
import { useRouter } from 'next/navigation'

import {getAllUsersPostsAction,addPostLikeAction} from '@/store/slices/getUsersPostsSlice';
import {getAllUsersAction} from '@/store/slices/getUsersPostsSlice';
// import { getUsersPostsAction } from '@/store/slices/getUsersPostsSlice';
import {getUsersPostsAction} from '@/store/slices/createPostSlice'
export default function ReccomendedPosts() {
    
    const dispatch=useDispatch()
    const isAuth = useSelector((state) => state.auth.isAuth);
    const someVar = useSelector((state) => state.auth.someVar);
    const posts = useSelector((state) => state.userposts);
    const [myposts, setMyPosts] = useState([]);
    const [updatedLikes, setUpdatedLikes] = useState([]);
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbG1hdC5tYWd6dW0xMjM0QGdtYWlsLmNvbSIsImZ1bGxfbmFtZSI6bnVsbCwicGhvbmUiOm51bGwsImlhdCI6MTY5NTY5ODE5NSwiZXhwIjoxNzI3MjM0MTk1fQ.r4M018A6NHYIV6tMAcaQOQowb3IhmHZ5u9VnSzRBEik'
    // const authToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbG1hdC5tYWd6dW0xMjNAZ21haWwuY29tIiwiZnVsbF9uYW1lIjpudWxsLCJwaG9uZSI6bnVsbCwiaWF0IjoxNjk0NTg2NjczLCJleHAiOjE3MjYxMjI2NzN9.KTEqxyqQJ5avV6maDzAccZknj16_9m3g2NEOlwUch44'
    
    const [users, setUsers] = useState([]);
    const url = 'http://157.245.193.184:3002/';

    // console.log('isAuth from recommended Posts',isAuth)
    // console.log('isAuth from recommended someVar',someVar)
    // console.log('posts from recommended posts',posts)
    const postsfromRedux = useSelector((state) => state);
    const allPostsfromRedux = useSelector((state) => state.userposts.allPosts);
    const allUsersfromRedux= useSelector((state) => state.userposts.allUsers);
    const updatedLikesfromRedux = useSelector((state) => state.userposts.updatedLikes);
    
    useEffect(() => {
        dispatch(getUsersPostsAction())
        dispatch(getAllUsersAction());
        dispatch(getAllUsersPostsAction())
          .then()
          .catch((error) => console.error(error));

        setMyPosts(allPostsfromRedux)
        setUsers(allUsersfromRedux)
        setUpdatedLikes(updatedLikesfromRedux)

      }, [allPostsfromRedux])
      
      ;

      const fetchComments = async () => { // Add "post" as a parameter
        dispatch(getAllUsersPostsAction());
        console.log('Команда fetch для обновления данных  ',postsfromRedux.userposts);
        
          
      
      };
      
      useEffect(() => {
        // Call the fetchComments function with a specific "post" object periodically (e.g., every 3 seconds)
        
        //   const intervalId = setInterval(() => fetchComments(), 12000);
      
          // Clean up the interval when the component unmounts
        //   return () => clearInterval(intervalId);
        
      }, []);





    const showPosts =   <RecommendedPost  allUsers={users} updatedLikes={updatedLikes} allPosts={myposts}/>
    

    return (
        <div className='recommended flex'>
          {/* <RecommendedPost  allUsers={users} updatedLikes={updatedLikes} allPosts={myposts}/> */}
          {showPosts}
        </div>
    );

    // myposts.map((item,index) =>

    // {

    // <div className='profile flex'>
    //     <Post key={index} post={item}  passpost={item}/>
    // </div>

    // }
    // )


}