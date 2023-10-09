'use client'
import Image from 'next/image'
import instaLogo from '@/app/images/insta.png';
import homeLogo from '@/app/images/home-small.svg';
import searchLogo from '@/app/images/search.svg';
import brouserLogo from '@/app/images/interesting-small.svg';
import reelsLogo from '@/app/images/drag_and_drop.jpeg';
import messageLogo from '@/app/images/message-small.svg';
import notificationLogo from '@/app/images/notification-small.svg';
import createLogo from '@/app/images/create-blog-small.svg';
import profile from '@/app/images/user-photo-small.svg';
import CreatePostPage from '../createpost/page';
import Link from 'next/link';
import PostPage from '@/app/profile/page';
import RecommendedPostsPage from '../recposts/page';
import {useState} from "react";
import ModalContent from "@/components/createpost/modalcontent";
import Modal from "@/components/createpost";
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { authorize } from '@/store/slices/authSlice'
import jwtDecode from 'jwt-decode'
export default function LayoutPage() {

    
    const currentUser = useSelector((state) => state.auth.currentUser);

    const dispatch = useDispatch();
    useEffect(()=>{
        const token=localStorage.getItem('token')
        console.log('22pofile token',token)
        if(token){
            let decodedToken=jwtDecode(token)
            dispatch(authorize({token}))
        }
        else{
            localStorage.removeItem('token')
        }
    },[])  

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");
    const isCurrentUser=useSelector((state)=>{state.auth.isCurrentUser})
    const isAuth = useSelector((state) => state.auth.isAuth);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const renderRightContent = () => {
        if (activeSection === "Home") {
            return <RecommendedPostsPage />;
        } else if (activeSection === "Profile") {
            return <PostPage />;
        }
        
    };


    return (
        <div className='layout'>
            
            <div className="layout-left">
                <div className='layout-logo'>
                    <Image src={instaLogo} alt='some alt' />
                </div>
                <div className="layout-left-body">
                    <div className='layout-left-body-item'>
                        <button onClick={() => setActiveSection("Home")} className='layout-left-body-button'>
                            <Image src={homeLogo} alt='some alt'/>
                            <p>Главная</p>
                        </button>
                    </div>
                    <div className='layout-left-body-item'>
                        <button className='layout-left-body-button'>
                            <Image src={searchLogo} alt='some alt' />
                            <p>Поисковый запрос</p>
                        </button>
                    </div>
                    <div className='layout-left-body-item'>
                        <button className='layout-left-body-button'>
                            <Image src={brouserLogo} alt='some alt'/>
                            <p>Интересное</p>
                        </button>
                    </div>
                    <div className='layout-left-body-item'>
                        <button onClick={() => setActiveSection("Reels")} className='layout-left-body-button'>
                            <Image src={reelsLogo} alt='some alt'/>
                            <p>Reels</p>
                        </button>
                    </div>
                    <div className='layout-left-body-item'>
                        <button className='layout-left-body-button'>
                            <Image src={messageLogo} alt='some alt'/>
                            <p>Сообщения</p>
                        </button>
                    </div>
                    <div className='layout-left-body-item'>
                        <button className='layout-left-body-button'>
                            <Image src={notificationLogo} alt='some alt' />
                            <p>Уведомления</p>
                        </button>
                    </div>
                    <div className='layout-left-body-item'>
                        <button onClick={openModal} className='layout-left-body-button'>
                            <Image src={createLogo}  alt='some alt'/>
                            <p>Создать</p>
                        </button>
                    </div>
                    <div className='layout-left-body-item'>
                        <button onClick={() => setActiveSection('Profile')} className='layout-left-body-button'>
                            <Image src={profile}  alt='some alt'/>
                            <p>Профиль</p>
                        </button>
                    </div>
                </div>
                <div className="layout-left-footer">
                    <div className='layout-left-footer-item'>
                        <button className='layout-left-body-button'>
                            <Image src={createLogo}  alt='some alt'/>
                            <p>Еще</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className='layout-right'>
          
            <h3>{console.log('1  isAuth=',isAuth)}</h3>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <ModalContent />
                </Modal>
                {renderRightContent()}
            </div>

        </div>
    );

}