'use client';
import Image from 'next/image';
import likeLogo from '@/app/images/heart-3510.svg';
import commentLogo from '@/app/images/instagram-comment-13415.svg';
import shareLogo from '@/app/images/instagram-share-13421.svg';
import saveLogo from '@/app/images/save-instagram-black-lineal-18315.svg';
import axios, { all } from 'axios';
import {useEffect, useState} from 'react';
// import { getUsersPostsFunc } from '@/store/slices/userPostsSlice';
import {useDispatch, useSelector} from 'react-redux';
import {getUsersPostsAction} from '@/store/slices/getUsersPostsSlice';
import {getAllUsersPostsAction,addPostLikeAction} from '@/store/slices/getUsersPostsSlice';
import {getAllUsersAction} from '@/store/slices/getUsersPostsSlice';

export default function RecommendedPost({allPosts,allUsers}) {
  console.log("ALLPOSTS++++++________=====",allPosts)
  console.log("ALLUSERS form parent++++++________=====",allUsers)
    const dispatch = useDispatch()

    const [postId, setPostId] = useState(0);
    const [postEntity, setPostEntity] = useState();
    const [countOfLike, setCountOfLikes] = useState([]);
    // const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbG1hdC5tYWd6dW0xMjM0QGdtYWlsLmNvbSIsImZ1bGxfbmFtZSI6bnVsbCwicGhvbmUiOm51bGwsImlhdCI6MTY5NTY5ODE5NSwiZXhwIjoxNzI3MjM0MTk1fQ.r4M018A6NHYIV6tMAcaQOQowb3IhmHZ5u9VnSzRBEik'
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbG1hdC5tYWd6dW0xMjNAZ21haWwuY29tIiwiZnVsbF9uYW1lIjpudWxsLCJwaG9uZSI6bnVsbCwiaWF0IjoxNjk0NTg2NjczLCJleHAiOjE3MjYxMjI2NzN9.KTEqxyqQJ5avV6maDzAccZknj16_9m3g2NEOlwUch44';
    const host = 'http://157.245.193.184:3002';



    let authorPost = '';
    let authorComment = '';
    const arrayOfComments = [];
    let arrayofLikes = [];
    const arrayOfMedialinks = [];
    const arrayOfAuthorPosts = [];
    const arrayOfarrays = [];

    if(allPosts){
      allPosts.map((item,index)=>{
      //   console.log('likes',   item.likes.length)
        arrayofLikes.push(item.likes.length)
      })
      
    }
  
  
  
  else{
      console.log('allPosts is null')
  }

useEffect (() => {
  console.log('ARRAYOFLIKES', arrayofLikes)
  setCountOfLikes(arrayofLikes)
  console.log('COUNTOFLIKES' ,countOfLike)
}, [setCountOfLikes])

    
    

    // const posts = useSelector((state) => state.userposts.posts);

    // const allPosts = useSelector((state) => state.userposts.allPosts);
    // const allUsers = useSelector((state) => state.userposts.allUsers);
    const countOfLikes = useSelector((state) => state.userposts.countOfLikes);
    // dispatch(getUsersPostsFunc())
    // console.log('isAuth from recommended posts',posts.currentUser.username)
    // dispatch(getUsersPostsAction())
    
   
    
const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   dispatch(getAllUsersAction());
  //   dispatch(getAllUsersPostsAction())
  //     .then(() => setIsLoading(false))
  //     .catch((error) => console.error(error));
  // }, [dispatch]);


    console.log('1 Posts from use Selector= ', allPosts)
   
  
    // console.log('arrayofLikes=  ',arrayofLikes)
    // console.log('posts count od likes from use Selector= ', countOfLikes,typeof(countOfLikes))
    // arrayofLikes=Array(countOfLikes)
    // console.log('posts count od likes from use Selector= ', arrayofLikes,typeof(arrayofLikes))

    const renderUserPosts = (user) => {

        const userPosts = allPosts.filter((post) => user.id ===post.creatorId);
        console.log('2 userPOSTS',userPosts)
        const PostComments = allPosts.filter((post) => post.commentaries);
        
        // const PostLikes = allPosts.filter((post) => post);
        // console.log('postLIIIKES',PostLikes.likes)



        return userPosts.map((post, index) => (
          <>
          {console.log('countOfLikes', countOfLike)}
          {countOfLike.map((item)=>(
          <h1>{item}</h1>
        ))}
          </>,
          <div key={index} >
        
            <p>{user.username}</p>
            <Image
              src={`${host}/${post.mediaLinks}`}
              alt="some aasdlt"
              width={500}
              height={500}
            />
            <div id="flex-container">
                                    <div className="flex-item1" id="flex">
                                        {/* <button onClick={incrementCount}>Click Here</button> */}

                                        <Image src={likeLogo}
                                            alt='some altasd2'
                                            className='like'
                                            onClick={
                                                () => dispatch(addPostLikeAction(post))
                                            }
                                            />

                                        <Image src={commentLogo}
                                            alt='some alasdt2'
                                            className='comment'/>

                                        <Image src={shareLogo}
                                            alt='some aasdlt2'
                                            className='send'/>
                                    </div>
                                    <div className="raw-item1" id="raw">
                                        <Image src={saveLogo}
                                            alt='some asdalt2'
                                            className='save'
                                            id="raw"/>
                                    </div>
                                </div>
                                <div className='gap'>
                                    <div className="counOftLikes">
                                  
                                
                                   
                                    <span >{post.likes.length} отметок "Нравится"</span>
                                        
                                        
                                            
                                           
                                    </div>
                                </div>
           <div className='authorname'>
                    <span> {user.username} {post.description} </span>
            </div>
            {/* <h1>{PostComments}</h1>  */}
            {post.commentaries.map((commentaries, index)=>(
                //  console.log('post -',user.username,'has comments= ',commentaries.commentary),
                
                 <div className="comments">
                    <span key={index}>{user.username}  {commentaries.commentary}</span>
                  
                 </div>
                

            )
            )}
          
          </div>
        ),
     );
        
      };

      // if (isLoading) {
      //   return <p>Loading...</p>;
      // }
      
    return (<div>
        <div className="post">
             {/* {allPosts.map((item, index) => (
                <div key={index}>
                <h2>ID: {item.id}</h2>
                <p>Description: {item.description}</p>
                <p>Creator ID: {item.creatorId}</p>
                <ul>
                    {item.mediaLinks.map((link, linkIndex) => (
                    <li key={linkIndex}>
                        Media Link {linkIndex + 1}: {link}
                    </li>
                    ))}
                </ul>
                </div>
      ))} */}

            <div className="post">
            {allUsers.map((user) => (
                    <div key={user.id}>
                    {renderUserPosts(user)}
                    </div>
                ))}
                </div>
            
        </div>
    </div>);

}