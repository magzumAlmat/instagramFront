'use client'
import Image from 'next/image'
import Header from '@/components/header'
import Posts from '@/components/posts'
import profilePic from '@/app/images/profile.jpg'
export default function PostPage() {
    return (
        <main>
            <Header/>
            <div className="profile-container">
                <div className='profile flex jc-c ai-c'>
                    <div className='profile-image'>
                        <Image src={profilePic} width={100} height={100} />
                    </div>
                    <div className='profile-info flex-cl'>
                        <div className='flex ai-c gap-10'>
                            <span>DOGGY</span>
                            <button className='follow-button button button-primary'>Follow</button>
                            <a className='text-d-n' href="">...</a>
                        </div>
                        <div className='flex gap-10'>
                            <p>1258 posts</p>
                            <p>4M followers</p>
                            <p>1250 following</p>
                        </div>
                        <div>
                            UserFullName
                        </div>
                    </div>
                </div>
                <div className='profile-posts-top flex jc-c ai-c gap-10'>
                    <span className='posts-top-icon'>POSTS</span>
                    <input className='profile-posts-input' />
                </div>
                <Posts />
            </div>
        </main>
    )
}