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
export default function LayoutPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");

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
                    <Image src={instaLogo} />
                </div>
                <div className="layout-left-body">
                    <div className='layout-left-body-item'>
                        <button onClick={() => setActiveSection("Home")} className='layout-left-body-button'>
                            <Image src={homeLogo} />
                            <p>Главная</p>
                        </button>
                    </div>
                    <div className='layout-left-body-item'>
                        <button className='layout-left-body-button'>
                            <Image src={searchLogo} />
                            <p>Поисковый запрос</p>
                        </button>
                    </div>
                    <div className='layout-left-body-item'>
                        <button className='layout-left-body-button'>
                            <Image src={brouserLogo} />
                            <p>Интересное</p>
                        </button>
                    </div>
                    <div className='layout-left-body-item'>
                        <button onClick={() => setActiveSection("Reels")} className='layout-left-body-button'>
                            <Image src={reelsLogo} />
                            <p>Reels</p>
                        </button>
                    </div>
                    <div className='layout-left-body-item'>
                        <button className='layout-left-body-button'>
                            <Image src={messageLogo} />
                            <p>Сообщения</p>
                        </button>
                    </div>
                    <div className='layout-left-body-item'>
                        <button className='layout-left-body-button'>
                            <Image src={notificationLogo} />
                            <p>Уведомления</p>
                        </button>
                    </div>
                    <div className='layout-left-body-item'>
                        <button onClick={openModal} className='layout-left-body-button'>
                            <Image src={createLogo} />
                            <p>Создать</p>
                        </button>
                    </div>
                    <div className='layout-left-body-item'>
                        <button onClick={() => setActiveSection('Profile')} className='layout-left-body-button'>
                            <Image src={profile} />
                            <p>Профиль</p>
                        </button>
                    </div>
                </div>
                <div className="layout-left-footer">
                    <div className='layout-left-footer-item'>
                        <button className='layout-left-body-button'>
                            <Image src={createLogo} />
                            <p>Еще</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className='layout-right'>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <ModalContent />
                </Modal>
                <div>{renderRightContent()}</div>
            </div>

        </div>
    );

}