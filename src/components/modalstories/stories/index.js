import { useState,useEffect } from "react";
import axios from "axios";
import Story from "./story";
import Modal from '@/components/modalstories/index.js'
export default function Stories() {
    const [myStories, setMyStories] = useState([])
    console.log('1 Функция Posts отработалась')

    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbG1hdC5tYWd6dW0xMjM0QGdtYWlsLmNvbSIsImZ1bGxfbmFtZSI6bnVsbCwicGhvbmUiOm51bGwsImlhdCI6MTY5NTY5ODE5NSwiZXhwIjoxNzI3MjM0MTk1fQ.r4M018A6NHYIV6tMAcaQOQowb3IhmHZ5u9VnSzRBEik'

    

    useEffect(() => {

        // Define a function to fetch your posts
        const fetchMyStories = async () => {
            try {
                const response = await axios.get('http://157.245.193.184:3002/api/story', {
                    headers: {
                        'Authorization': `Bearer ${authToken}`,
                    },
                });

                // Assuming the response.data contains an array of your posts
                setMyStories(response.data);
                console.log('response --- ',response)
            } catch (error) {
                // Handle error
                console.error('Error fetching posts:', error);
            }
        };

        // Call the function to fetch your posts when the component mounts
        fetchMyStories();
    }, [authToken]);






    const showPosts = myStories.map((item, index) => (
                <Story key={index} stories={item} />
        
    ));

    return (
        <div className='profile flex'>
            {showPosts}
            {/* {console.log(showPosts)} */}
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
