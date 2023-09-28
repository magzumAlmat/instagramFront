import Image from "next/image"
import {useState, useEffect} from "react";
import axios from "axios";
import RecommendedPost from './recpost'

export default function ReccomendedPosts() {
    console.log('1 Функция Posts отработалась')

    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbG1hdC5tYWd6dW0xMjM0QGdtYWlsLmNvbSIsImZ1bGxfbmFtZSI6bnVsbCwicGhvbmUiOm51bGwsImlhdCI6MTY5NTY5ODE5NSwiZXhwIjoxNzI3MjM0MTk1fQ.r4M018A6NHYIV6tMAcaQOQowb3IhmHZ5u9VnSzRBEik'
    // const authToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbG1hdC5tYWd6dW0xMjNAZ21haWwuY29tIiwiZnVsbF9uYW1lIjpudWxsLCJwaG9uZSI6bnVsbCwiaWF0IjoxNjk0NTg2NjczLCJleHAiOjE3MjYxMjI2NzN9.KTEqxyqQJ5avV6maDzAccZknj16_9m3g2NEOlwUch44'
    const [myposts, setMyPosts] = useState([]);

    useEffect(() => {

        // Define a function to fetch your posts
        const fetchMyPosts = async () => {
            try {
                const response = await axios.get('http://157.245.193.184:3002/api/post/all', {
                    headers: {
                        'Authorization': `Bearer ${authToken}`
                    }
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


    const showPosts = myposts.map((item, index) => (
        <RecommendedPost key={index}
            post={item}/>
    ));

    return (
        <div className='recommended flex'>
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

