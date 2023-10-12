'use client'
import Image from 'next/image'
import Header from '@/components/header'
import Posts from '@/components/profile/posts'
import profilePic from '@/app/images/profile-pic.png'
import Profile from "@/components/profile";
import settingsLogo from '@/app/images/back-arrow.svg';
import { useEffect,useState } from 'react'
import { authorize } from '@/store/slices/authSlice'
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'
import instaLogo from '@/app/images/insta.png';
import homeLogo from '@/app/images/home-small.svg';
import searchLogo from '@/app/images/search.svg';
import brouserLogo from '@/app/images/interesting-small.svg';
import reelsLogo from '@/app/images/drag_and_drop.jpeg';
import messageLogo from '@/app/images/message-small.svg';
import notificationLogo from '@/app/images/notification-small.svg';
import createLogo from '@/app/images/create-blog-small.svg';
import profile from '@/app/images/user-photo-small.svg';
import axios from 'axios'
import Post from '@/components/profile/posts/post'
import { useDispatch ,useSelector} from 'react-redux'

// import Modal from '@/components/createpost'
import { followUserAction } from '@/store/slices/getUsersPostsSlice'
export default function anyUserProfilePage({user}) {

    const dispatch=useDispatch()
    const router= useRouter()
    const searchParams = useSearchParams()
    const userId = searchParams.get('user')
    console.log('USER=======',userId);
    const [users, setUsers] = useState([]);
    const [myposts, setMyPosts] = useState([]);
     const [loading, setLoading] = useState(true); // Initial loading state
    // console.log('USER=======',user)
    // const isAuth = useSelector((state) => state.auth.isAuth);
    
    const followedUsers= useSelector((state) => state.userposts.followedUsers);

    // const dispatch = useDispatch();
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        console.log('isModalOpen?:', isModalOpen);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        console.log('open?:', isModalOpen);
    };

    

    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbG1hdC5tYWd6dW0xMjNAZ21haWwuY29tIiwiZnVsbF9uYW1lIjpudWxsLCJwaG9uZSI6bnVsbCwiaWF0IjoxNjk0NTg2NjczLCJleHAiOjE3MjYxMjI2NzN9.KTEqxyqQJ5avV6maDzAccZknj16_9m3g2NEOlwUch44';
    useEffect(() => {

        // dispatch(getUsersPostsAction())
        const fetchMyPosts = async () => {
            try {
                const users = await axios.get('http://157.245.193.184:3002/api/getallusers', {
                        headers: {
                            'Authorization': `Bearer ${authToken}`
                        }
                })
                

                const response = await axios.get('http://157.245.193.184:3002/api/post/all', {
                    headers: {
                        'Authorization': `Bearer ${authToken}`
                    }
                });
           

                setUsers(users.data)
                setLoading(false)
                setMyPosts(response.data);
                // setUpdatedLikes(response.data)
            } catch (error) {
                setLoading(false)
                console.error('Error fetching posts:', error);
            }
            
        };

        
        fetchMyPosts();
    }, [userId]);
    



    return (

        <div className='layout'>
            
            <div className="layout-left">
                <div className='layout-logo'>
                    <Image src={instaLogo} alt='some alt' />
                </div>
                <div className="layout-left-body">
                    <div className='layout-left-body-item'>
                        <button onClick={() => router.push(`/layout`)} className='layout-left-body-button'>
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
            <main>
        
        {users.map((item)=>{
           
           
           if(String(item.id)===String(userId)){
            console.log('item=',item)
           return(<>
           
                 <Header/>
                        <div className="profile-container">
                        <div className='profile flex jc-c ai-c'>
                        <div className='profile-image'>
                            {/* <button onClick={openModal} style={{'border': 'none'}}> */}
                                <Image src={profilePic} width={100} height={100} alt='some alt' />
                            {/* </button> */}
                            {/* <Modal isOpen={isModalOpen} onClose={closeModal}>
                                <Stories />
                            </Modal> */}
                            

                        </div>
                        <div className='profile-info justify-content: space-around;'>
                            <div className='flex gap'>
                                <span className='username'>{item.username}</span>
                                <button className='follow-button button button-primary' 
                                style={{ 'width': '90px', 'height': '30px', 'borderRadius': '6px' }}
                                onClick={async()=>{await dispatch(followUserAction(userId)),console.log('followedUsers=',followedUsers)}}
                                >Follow</button>
                                <button className='follow-button button button-primary' 
                                style={{ 'width': '90px', 'height': '30px', 'borderRadius': '6px' }}
                                onClick={async()=>{await dispatch(followUserAction(userId)),console.log('unfollowedUsers=',followedUsers)}}
                                >UnFollow</button>
                                {/* <button onClick={doLogOutUser}> */}
                                {/* <Image src={exit} width={20} height={10} alt='some alt' />
                                </button> */}
                                <a className='text-d-n username' href="">...</a>

                            </div>
                            <div className='flex gap'>
                                <p>1258 posts</p>
                                <p>4M followers</p>
                                <p>{followedUsers}</p>
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
                            {/* {userPosts.map((item2, index) => {
                                    console.log('item2 before',item2)
                                    {if (String(item2.creatorId)===String(userId)){
                                     console.log('item2 after  post from Posts component',item2)
                                    return(<>
                                              <Post key={item2.id} post={item2} anotherUser={userId} /> 
                                        </>)
                                    }}
                                    <div className='profile flex' key={item2.id}>
                                   
                                    </div>
                                    })} */}

                            {/* {userPosts.map((item2, index) => {
                                
                                console.log('item2.id:', item2.id, 'userId:', userId);
                                if (String(item2.creatorId) === String(userId)) {
                                    console.log('item2 after  post from Posts component',item2)
                                    return (
                                        <Post key={item2.id} post={item2} anotherUser={userId} />
                                    );
                                }
                            })} */}


{loading ? (
                                <div>Loading posts...</div> // Display a loading message or spinner
                            ) : (
                                <div className="profile-posts-container">
                                {myposts.map((item2) => {
                                     console.log('item2.id:', item2, 'userId:', userId);
                                    if (String(item2.creatorId) === String(userId)) {
                                        console.log('item2 after  post from Posts component',item2)
                                    return  <div className='profile flex'><Post key={item2.id} post={item2} anotherUser={userId} /></div>
                                    }
                                    return null;
                                })}
                                </div>
                            )}
                        </div>
                </>)
            }
        })}
       
    </main>
            </div>
        </div>
        
      
    )
}