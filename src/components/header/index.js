'use client'

import Image from 'next/image'
import homeIcon from '@/app/images/home-small.svg'
import messageIcon from '@/app/images/message-small.svg'
import createIcon from '@/app/images/create-blog-small.svg'
import interestingIcon from '@/app/images/interesting-small.svg'
import notificationIcon from '@/app/images/notification-small.svg'
import userIcon from '@/app/images/user-photo-small.svg'
import profile from '@/app/images/insta.png'
export default function Header (){

    return(

        <header className="header flex jc-sb ai-c m-b-20 header-container">
            <div className="header-container">
                <Image src={profile}/> 
            </div>
            <div className="header-container flex jc-c">
                <input className="header-search flex jc-c ai-c" placeholder='Search'/>
            </div>
            <div className="header-container flex jc-sb gap-6 moduleicon">
                <a><Image src={homeIcon}/></a>
                <a><Image src={messageIcon}/></a>
                <a><Image src={createIcon}/></a>
                <a><Image src={interestingIcon}/></a>
                <a><Image src={notificationIcon}/></a>
                <a><Image src={userIcon}/></a>
            </div>
        </header>
    )
}