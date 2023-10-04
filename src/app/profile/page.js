'use client'
import Image from 'next/image'
import Header from '@/components/header'
import Posts from '@/components/profile/posts'
import profilePic from '@/app/images/profile-pic.png'
import Profile from "@/components/profile";
import { useState } from 'react'
import ModalStories from '@/components/modalstories/index.js';
import Stories from '@/components/modalstories/stories';
import Modal from '@/components/modalstories/index.js';


export default function ProfilePage() {

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
            <Header/>
            <div className="profile-container">
                <div className='profile flex jc-c ai-c'>
                    <div className='profile-image'>
                        <button onClick={openModal}>
                            <Image src={profilePic} width={100} height={100} alt='some alt'/>

                        </button>
                        <Modal isOpen={isModalOpen} onClose={closeModal}>
                            <Stories/>
                        </Modal>

                    </div>
                    <div className='profile-info justify-content: space-around;'>
                        <div className='flex gap'>
                            <span className='username'> TERRYLUCAS</span>
                            <button className='follow-button button button-primary' style={{'width':'90px','height':'30px','borderRadius':'6px','margin':'4px 16px;'}}>Follow</button>
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
                <Profile/>
            </div>
        </main>
    )
}