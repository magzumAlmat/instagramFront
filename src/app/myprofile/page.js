'use client'
import Image from 'next/image'
import Header from '@/components/header'
import Posts from '@/components/profile/posts'
import profilePic from '@/app/images/profile-pic.png'
import Profile from "@/components/profile";
import settingsLogo from '@/app/images/back-arrow.svg';


export default function MyProfilePage() {
    return (
        <main>
            <Header/>
            <div className="profile-container">
                <div className='profile flex jc-c ai-c'>
                    <div className='profile-image'>
                        <Image src={profilePic} width={100} height={100} />
                    </div>
                    <div className='profile-info justify-content: space-around;'>
                        <div className='flex gap'>
                            <span className='username'> TERRYLUCAS</span>
                            <button className='follow-button button' style={{'width':'90px','height':'30px','border-radius':'6px','margin':'4px 16px;'}}>Edit</button>
                            <button className='follow-button button' style={{'width':'90px','height':'30px','border-radius':'6px','margin':'4px 16px;'}}>Show archive</button>
                            <button className='follow-button button' style={{'width':'90px','height':'30px','border-radius':'6px','margin':'4px 16px;'}}>
                                <Image src={settingsLogo}/>
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
                <Profile/>
            </div>
        </main>
    )
}