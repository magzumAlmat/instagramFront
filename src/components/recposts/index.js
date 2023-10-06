import Image from "next/image"
import {useState, useEffect} from "react";
import axios from "axios";
import RecommendedPost from './recpost/RecommendedPost';
import { authSlice,editVar,logout } from '@/store/slices/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import { authorize ,createUser,authUser} from '@/store/slices/authSlice'
import { getUsersPostsReducer} from '@/store/slices/userPostsSlice';

import { useRouter } from 'next/navigation'
export default function ReccomendedPosts() {
    
    const dispatch=useDispatch()
    const isAuth = useSelector((state) => state.auth.isAuth);
    const someVar = useSelector((state) => state.auth.someVar);
   
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbG1hdC5tYWd6dW0xMjM0QGdtYWlsLmNvbSIsImZ1bGxfbmFtZSI6bnVsbCwicGhvbmUiOm51bGwsImlhdCI6MTY5NTY5ODE5NSwiZXhwIjoxNzI3MjM0MTk1fQ.r4M018A6NHYIV6tMAcaQOQowb3IhmHZ5u9VnSzRBEik'
    // const authToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbG1hdC5tYWd6dW0xMjNAZ21haWwuY29tIiwiZnVsbF9uYW1lIjpudWxsLCJwaG9uZSI6bnVsbCwiaWF0IjoxNjk0NTg2NjczLCJleHAiOjE3MjYxMjI2NzN9.KTEqxyqQJ5avV6maDzAccZknj16_9m3g2NEOlwUch44'
    const [myposts, setMyPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const url = 'http://157.245.193.184:3002/';

    dispatch(getUsersPostsReducer())
    useEffect(() => {
        
           
        
        
        const fetchMyPosts = async () => {
            try {
                const users = await axios.get('http://157.245.193.184:3002/api/getallusers', {
                        headers: {
                            'Authorization': `Bearer ${authToken}`
                        }
                })

                const response = await axios.get('http://157.245.193.184:3002/api/post/all', {
                    headers: {
                        'Authorization': `Bearer ${authToken}`
                    }
                });
                setUsers(users.data);

                
                
                setMyPosts(response.data);
            } catch (error) {
                
                console.error('Error fetching posts:', error);
            }
        };

        
        fetchMyPosts();
    }, [authToken]);





    // const showPosts = myposts.map((item, index) => (
    //     <RecommendedPost key={index} users={users} myposts={myposts}
    //         post={item}/>
    // ));

    return (
        <div className='recommended flex'>
          <RecommendedPost  users={users} myposts={myposts}/>
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