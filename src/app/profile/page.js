'use client'
import Image from 'next/image'
import Header from '@/components/header'
import Posts from '@/components/profile/posts'
import profilePic from '@/app/images/profile-pic.png'
import exit from '@/app/images/exit.png'
import Profile from "@/components/profile";
import { useState } from 'react'
import ModalStories from '@/components/modalstories/index.js';
import Stories from '@/components/modalstories/stories';
import Modal from '@/components/modalstories/index.js';
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { logoutAction } from '@/store/slices/authSlice'
import { useRouter } from 'next/navigation'
import { logOut } from '@/store/slices/authSlice'

export default function ProfilePage() {

    const router=useRouter('')

    
    const isAuth = useSelector((state) => state.auth.isAuth);
    const currentUser = useSelector((state) => state.auth.currentUser);

    const dispatch=useDispatch()

    // console.log('thisis isAuth from UserSIGNUP= ',isAuth)
    // console.log('thisis current user in profile= ',currentUser)
    
    const doLogOutUser=()=>{
      
        dispatch(logoutAction());
        
        router.push('/login');
        
    
        
    }
 
   


    const [myStories, setMyStories] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        console.log('isModalOpen?:', isModalOpen);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        console.log('open?:', isModalOpen);
    };

    



    return (
        <main>
        <Header />
        {isAuth ? (
            <>
                
                <div className="profile-container">
                    <div className='profile flex jc-c ai-c'>
                        <div className='profile-image'>
                            <button onClick={openModal} style={{'border': 'none'}}>
                                <Image src={profilePic} width={100} height={100} alt='some alt' />
                            </button>
                            <Modal isOpen={isModalOpen} onClose={closeModal}>
                                <Stories />
                            </Modal>
                            

                        </div>
                        <div className='profile-info justify-content: space-around;'>
                            <div className='flex gap'>
                                <span className='username'>{currentUser.username}</span>
                                <button className='follow-button button button-primary' style={{ 'width': '90px', 'height': '30px', 'borderRadius': '6px' }}>Follow</button>
                                <button onClick={doLogOutUser}>
                                <Image src={exit} width={20} height={10} alt='some alt' />
                                </button>
                                <a className='text-d-n username' href="">...</a>

                            </div>
                            <div className='flex gap'>
                                <p>1258 posts</p>
                                <p>4M followers</p>
                                <p>1250 following</p>
                            </div>
                            <div>
                                Terry Lucas
                            </div>
                        </div>
                    </div>
                    <div className='profile-posts-top flex jc-c ai-c gap-10'>
                        <span className='posts-top-icon'>POSTS</span>
                        <input className='profile-posts-input' />
                    </div>
                    <Profile />
                </div>
            </>
        ) : (
            // Render something for non-authenticated users
            <p>Please log in to view your profile.</p>
        )}
    </main>
    )
}