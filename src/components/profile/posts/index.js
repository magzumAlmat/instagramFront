import Post from './post'
import image1 from '../../../app/images/post/1.jpg'
import image2 from '@/app/images/post/2.jpg'
import image3 from '@/app/images/post/3.jpg'
import image4 from '@/app/images/post/4.jpeg'
import image5 from '@/app/images/post/5.jpeg'
import image6 from '@/app/images/post/6.jpeg'
import Image from "next/image"
import { useState,useEffect } from "react";
import axios from "axios";
import { useSelector } from 'react-redux/es/hooks/useSelector'
export default function Posts() {
    const isAuth = useSelector((state) => state.auth.isAuth);
    const currentUser = useSelector((state) => state.auth.currentUser);

    
    console.log('1 Функция Posts отработалась',currentUser)

    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbG1hdC5tYWd6dW0xMjM0QGdtYWlsLmNvbSIsImZ1bGxfbmFtZSI6bnVsbCwicGhvbmUiOm51bGwsImlhdCI6MTY5NTY5ODE5NSwiZXhwIjoxNzI3MjM0MTk1fQ.r4M018A6NHYIV6tMAcaQOQowb3IhmHZ5u9VnSzRBEik'

    const [myposts, setMyPosts] = useState([]);

    const handleClick = (event, posts) => {
        // 👇️ refers to the image element
        console.log(posts);
    
        console.log('Image clicked');
      };

    useEffect(() => {

        // Define a function to fetch your posts
        const fetchMyPosts = async () => {
            try {
                const response = await axios.get('http://157.245.193.184:3002/api/post', {
                    headers: {
                        'Authorization': `Bearer ${authToken}`,
                    },
                });

                // Assuming the response.data contains an array of your posts
                setMyPosts(response.data);
            } catch (error) {
                // Handle error
                console.error('Error fetching posts:', error);
            }
        };

        // Call the function to fetch your posts when the component mounts
        fetchMyPosts();
    }, [authToken]);




    const posts = [
        { postImage: image1 },
        { postImage: image2 },
        { postImage: image3 },
        { postImage: image4 },
        { postImage: image5 },
        { postImage: image6 }
    ];

    const showPosts = myposts.map((item, index) => (
     
        <Post key={index} post={item} currentUser={currentUser} />    
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
