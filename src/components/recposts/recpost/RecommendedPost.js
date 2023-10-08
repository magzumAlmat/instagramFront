'use client';
import Image from 'next/image';
import likeLogo from '@/app/images/heart-3510.svg';
import commentLogo from '@/app/images/instagram-comment-13415.svg';
import shareLogo from '@/app/images/instagram-share-13421.svg';
import saveLogo from '@/app/images/save-instagram-black-lineal-18315.svg';
import axios from 'axios';
import {useEffect, useState} from 'react';
// import { getUsersPostsFunc } from '@/store/slices/userPostsSlice';
import { useDispatch,useSelector } from 'react-redux';
import { getUsersPostsAction } from '@/store/slices/getUsersPostsSlice';
import { getAllUsersPostsAction} from '@/store/slices/getUsersPostsSlice';
// import {getUsersPostsAction} from '@/store/slices/createPostSlice'
export default function RecommendedPost({post, users, myposts}) {
    const dispatch=useDispatch()

    const [postId, setPostId] = useState(0);
    const [postEntity, setPostEntity] = useState();
    const [count, setCount] = useState([]);
    // const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbG1hdC5tYWd6dW0xMjM0QGdtYWlsLmNvbSIsImZ1bGxfbmFtZSI6bnVsbCwicGhvbmUiOm51bGwsImlhdCI6MTY5NTY5ODE5NSwiZXhwIjoxNzI3MjM0MTk1fQ.r4M018A6NHYIV6tMAcaQOQowb3IhmHZ5u9VnSzRBEik'
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbG1hdC5tYWd6dW0xMjNAZ21haWwuY29tIiwiZnVsbF9uYW1lIjpudWxsLCJwaG9uZSI6bnVsbCwiaWF0IjoxNjk0NTg2NjczLCJleHAiOjE3MjYxMjI2NzN9.KTEqxyqQJ5avV6maDzAccZknj16_9m3g2NEOlwUch44';
    const host = 'http://157.245.193.184:3002';

    let authorPost = '';
    let authorComment = '';
    const arrayOfComments = [];
    const arrayofLikes = [];
    const arrayOfMedialinks = [];
    const arrayOfAuthorPosts = [];
    const arrayOfarrays = [];
    let refreshedLikesCount=[]
    
    const posts = useSelector((state) => state.userposts.posts);
    const allPosts = useSelector((state) => state.userposts.allPosts);
    // dispatch(getUsersPostsFunc())
    // console.log('isAuth from recommended posts',posts.currentUser.username)
    // dispatch(getUsersPostsAction())
    useEffect(() => {
        
        // dispatch(getUsersPostsAction());
        dispatch(getAllUsersPostsAction());
      }, [dispatch]);


      console.log('posts from use Selector= ',allPosts)
    return (
        <>
            <div className="post">
            {/* {allPosts.map((item, index) => (
                <div key={index}>
                <h2>ID: {item.id}</h2>
                <p>Description: {item.description}</p>
                <p>Creator ID: {item.creatorId}</p>
                <ul>
                    {item.mediaLinks.map((link, linkIndex) => (
                    <li key={linkIndex}>
                        Media Link {linkIndex + 1}: {link}
                    </li>
                    ))}
                </ul>
                </div>
      ))} */}

        {allPosts.map((item) => (
                <li key={item.id}>
                    <p>ID: {item.id}</p>
                    <p>Description: {item.description}</p>
                    <p>Creator ID: {item.creatorId}</p>
                   
                </li>
                ))}
            </div>


        </>
    );

}