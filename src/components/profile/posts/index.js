import Post from './post'
import image1 from '../../../app/images/post/1.jpg'
import image2 from '@/app/images/post/2.jpg'
import image3 from '@/app/images/post/3.jpg'
import image4 from '@/app/images/post/4.jpeg'
import image5 from '@/app/images/post/5.jpeg'
import image6 from '@/app/images/post/6.jpeg'
import { showAllUserPosts } from '@/store/slices/getUsersPostsSlice'
import Image from "next/image"
import { useState,useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import jwtDecode from 'jwt-decode'
import { authorize } from '@/store/slices/authSlice'
export default function Posts(userId) {
    const isAuth = useSelector((state) => state.auth.isAuth);
    const currentUser = useSelector((state) => state.auth.currentUser);


    const dispatch = useDispatch();
    const  userPosts= useSelector((state) => state.userposts.userPosts);
    // console.log('1 Функция Posts отработалась',currentUser)

    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbG1hdC5tYWd6dW0xMjM0QGdtYWlsLmNvbSIsImZ1bGxfbmFtZSI6bnVsbCwicGhvbmUiOm51bGwsImlhdCI6MTY5NTY5ODE5NSwiZXhwIjoxNzI3MjM0MTk1fQ.r4M018A6NHYIV6tMAcaQOQowb3IhmHZ5u9VnSzRBEik'

    const [myposts, setMyPosts] = useState([]);

    const handleClick = (event, posts) => {
        // 👇️ refers to the image element
        console.log(posts);
        console.log('Image clicked');

      };


    useEffect(() => {
        // const token=localStorage.getItem('token')
        // console.log('22pofile token',token)
        // if(token){
        //     let decodedToken=jwtDecode(token)
        //     dispatch(authorize({token}))

        // }
        // else{
        //     localStorage.removeItem('token')
        // }

        
        dispatch(showAllUserPosts());
        // // Define a function to fetch your posts
        // const fetchMyPosts = async () => {
        //     try {
        //         const response = await axios.get('http://157.245.193.184:3002/api/post', {
        //             headers: {
        //                 'Authorization': `Bearer ${authToken}`,
        //             },
        //         });

        //         // Assuming the response.data contains an array of your posts
        //         setMyPosts(response.data);
        //     } catch (error) {
        //         // Handle error
        //         console.error('Error fetching posts:', error);
        //     }
        // };

        // Call the function to fetch your posts when the component mounts
        // fetchMyPosts();
    }, [dispatch]);

    // console.log('1111my posts',  userPosts)

  

    const showPosts = userPosts.map((item, index) => ( 
        console.log('post from Posts component',item),
        <Post key={index} post={item} currentUser={currentUser} anotherUser={userId} />    
    ));

    return (
        <div className='profile flex'>
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
