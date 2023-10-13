'use client'
import Image from 'next/image'
import Link from 'next/link'
import Modal from '@/components/createpost'
import ModalPost from './modalpost'
import { useEffect, useState } from 'react'
import { getAllUsersAction } from '@/store/slices/getUsersPostsSlice'
import { useDispatch,useSelector } from 'react-redux'
import axios from 'axios'
export default function Post({post,currentUser,anotherUser}){

    // console.log('Clicked User',anotherUser)
    console.log('ALL POSTS from parent component==',post)
    // const allUsers=useSelector(((state) => state.userposts.allUsers))
    const [allUsers, setUsers] = useState([]);
    // console.log("ALLL USERS",allUsers)
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbG1hdC5tYWd6dW0xMjM0QGdtYWlsLmNvbSIsImZ1bGxfbmFtZSI6bnVsbCwicGhvbmUiOm51bGwsImlhdCI6MTY5NTY5ODE5NSwiZXhwIjoxNzI3MjM0MTk1fQ.r4M018A6NHYIV6tMAcaQOQowb3IhmHZ5u9VnSzRBEik'
  
    useEffect(() => {
        
        const fetchMyPosts = async () => {
            try {
                const users = await axios.get('http://157.245.193.184:3002/api/getallusers', {
                        headers: {
                            'Authorization': `Bearer ${authToken}`
                        }
                })

                setUsers(users.data)
                
              
            } catch (error) {
                
                console.error('Error fetching posts:', error);
            }
            
        };

        
        fetchMyPosts();
    }, []);

    // console.log('3 Post=',post.mediaLinks)
    const [clickedPost, setClickedPost] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const host='http://157.245.193.184:3002'
    const handleClick = (event) => {
        // console.log(event.id)
        setClickedPost(event)
        // console.log('id post clicked post', clickedPost)
        openModal()
    }
    
 
    return (
    
    
    <a className='profile-my-post'>
       
       
    
        <Image 
            onClick={()=>{handleClick(post)}}
            src={`${host}/${post.mediaLinks}`}
            alt="some alt"
            width={500} height={300}
            />
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            {/* {console.log('id post clicked post', clickedPost)} */}
            <ModalPost post={clickedPost} users={allUsers} />
        </Modal>
     
     </a>
        
        )
}