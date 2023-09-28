'use client'
import Image from 'next/image'
import instaLogo from '@/app/images/insta.png';
import homeLogo from '@/app/images/home-small.svg';
import searchLogo from '@/app/images/search.svg';
import brouserLogo from '@/app/images/interesting-small.svg';
import reelsLogo from '@/app/images/drag_and_drop.svg';
import messageLogo from '@/app/images/message-small.svg';
import notificationLogo from '@/app/images/notification-small.svg';
import createLogo from '@/app/images/create-blog-small.svg';
import profile from '@/app/images/user-photo-small.svg';
export default function LayoutPage() {


    return (
        <div className='layout'>
            <div className="layout-left">
                <div className='layout-logo'>
                    <Image src={instaLogo} />
                </div>
                <div className="layout-left-body">
                    <div className='layout-left-body-item'>
                        <button className='layout-left-body-button'>
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
                        <button className='layout-left-body-button'>
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
                        <button className='layout-left-body-button'>
                            <Image src={createLogo} />
                            <p>Создать</p>
                        </button>
                    </div>
                    <div className='layout-left-body-item'>
                        <button className='layout-left-body-button'>
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
            </div>

        </div>
    );

}