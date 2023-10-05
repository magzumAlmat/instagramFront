'use client'
import Image from 'next/image'
import Link from 'next/link'
import Modal from '@/components/createpost'
import ModalPost from './modalpost'
import { useState } from 'react'

export default function Post({post}){

 

    console.log('isAuth from redux=',isAuth)
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
        console.log(event.id)
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
            {console.log('id post clicked post', clickedPost)}
            <ModalPost post={clickedPost}/>
        </Modal>
     
     </a>
        
        )
}