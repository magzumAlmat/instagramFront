
import Image from 'next/image';
import likeLogo from '@/app/images/heart-3510.svg';
import commentLogo from '@/app/images/instagram-comment-13415.svg';
import shareLogo from '@/app/images/instagram-share-13421.svg';
import saveLogo from '@/app/images/save-instagram-black-lineal-18315.svg';
import axios, { all } from 'axios';
import {useEffect, useState, useMemo} from 'react';
// import { getUsersPostsFunc } from '@/store/slices/userPostsSlice';
import {useDispatch, useSelector} from 'react-redux';
import {getUsersPostsAction, updatePostLikes} from '@/store/slices/getUsersPostsSlice';
import {getAllUsersPostsAction,addPostLikeAction} from '@/store/slices/getUsersPostsSlice';
import {getAllUsersAction} from '@/store/slices/getUsersPostsSlice';
import Link from 'next/link'
import Modal from '@/components/createpost'
import ModalPost from '@/components/recposts/recpost/modalpost/index'
import Posts from '@/components/profile/posts';
import Profile from '@/components/profile';
import { useRouter } from 'next/navigation'
export default function RecommendedPost({allPosts,allUsers, updatedLikes}) {
  const [clickedPost, setClickedPost] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const openModal = () => {
      setIsModalOpen(true);
  };

  const closeModal = () => {
      setIsModalOpen(false);
  };

    const dispatch = useDispatch()
    console.log('ALLPOST++++++++', allPosts)
    const [postId, setPostId] = useState(0);
    const [hardcodeArray, setHardcodeArray] = useState([]);
    const [postEntity, setPostEntity] = useState();
    const [countOfLike, setCountOfLikes] = useState([]);
    const [like, setLike] = useState([]);
    const [arrayOfComments, setArrayOfComments] = useState([]);
    const [clickedUser,setClickedUser]=useState()
    

    const [comments, setComments] = useState({});
    // const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbG1hdC5tYWd6dW0xMjM0QGdtYWlsLmNvbSIsImZ1bGxfbmFtZSI6bnVsbCwicGhvbmUiOm51bGwsImlhdCI6MTY5NTY5ODE5NSwiZXhwIjoxNzI3MjM0MTk1fQ.r4M018A6NHYIV6tMAcaQOQowb3IhmHZ5u9VnSzRBEik'
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbG1hdC5tYWd6dW0xMjNAZ21haWwuY29tIiwiZnVsbF9uYW1lIjpudWxsLCJwaG9uZSI6bnVsbCwiaWF0IjoxNjk0NTg2NjczLCJleHAiOjE3MjYxMjI2NzN9.KTEqxyqQJ5avV6maDzAccZknj16_9m3g2NEOlwUch44';
    const host = 'http://157.245.193.184:3002';

    const allPostsFromRedux = useSelector((state) => state.userposts.allPosts);
    
    let switcher=true
    let authorPost = '';
    let authorComment = '';
    let arrayOfCommentsPush = [];
    let arrayofLikes = [];
    let arrayOfUpdatedLikes = [];
    const arrayOfMedialinks = [];
    const arrayOfAuthorPosts = [];
    const arrayOfarrays = [];

    let sum=0
    let sum2=0

    
    if(allPosts){
      allPosts.map((item,index)=>{
      //   console.log('likes',   item.likes.length)
        arrayofLikes.push(item.likes.length)
       
      })
      
    }
    
  
  
  
  else{
      console.log('allPosts is null')
  }
  
  const addCommentClick = async (post) => {
    // await dispatch(addPostLikeAction(post))
    // console.log("1 add comment click",arrayOfComments)
    arrayOfCommentsPush=[]
    // console.log('2 after click arrayOfComments',arrayOfCommentsPush)
    try {
      const response = await axios.get('http://157.245.193.184:3002/api/post/all', {
                    headers: {
                        'Authorization': `Bearer ${authToken}`
                    }
                });
                response.data.map((item) => {
                  arrayOfCommentsPush.push(item.commentaries) 
                })
                
                // console.log("3 after click   ARRAYOFCOMMENTSPUSH", arrayOfCommentsPush)
                // arrayOfCommentsPush.map((commentary, index) => {
                //   conso
                // })
               
                setClickedPost(post);
                openModal();
                // setArrayOfComments(index);
                // setArrayOfComments("NEW CLICKED DATAAAAA");
                // setArrayOfComments(arrayOfCommentsPush);
                console.log('arrayofcomments after click',arrayOfComments)
    } catch {
      
    }
    // console.log('4 after click arrayofComments must be null',arrayOfComments)
    // console.log('5 beforesetcomments arrayofcomentspush=',arrayOfCommentsPush)
   
    // console.log('SETCOMMENTS',arrayOfComments)

  
    // console.log('id post clicked post', clickedPost)
   
  }



  const handleClick = async (post) => {
    await dispatch(addPostLikeAction(post))
    try {
      const response = await axios.get('http://157.245.193.184:3002/api/post/all', {
                    headers: {
                        'Authorization': `Bearer ${authToken}`
                    }
                });
                response.data.map((item) => {
                  arrayOfUpdatedLikes.push(item.likes.length)
                  arrayOfarrays.push(item) 
                })
                setLike(arrayOfUpdatedLikes)
    } catch {
      
    }
   
    // console.log('SETLIKE', like)
    
    
    

    allPosts.map((item) => {
     
     
      arrayOfUpdatedLikes.push(item.likes.length)
    
   
    LIKES.push([])
    LIKES.push(hardcodeArray)
    })
    
    // console.log('allPostsFromRedux=',allPostsFromRedux)
    alert('You unliked/liked this post')
  }
  // console.log('COMMENTARIES', arrayOfComments)
  

  const existingPostIds = allPosts.map(post => post.id);
          
  // Фильтруйте новые посты, чтобы исключить дубликаты
  const newPosts = allPosts.filter(newPost => !existingPostIds.includes(newPost.id));

  // Добавьте только новые посты в state.allPosts
  arrayOfCommentsPush.push(...newPosts);


  useEffect (() => { 
    setLike(arrayofLikes)
    
    setCountOfLikes(arrayofLikes)
    // handleClick()
    
    setArrayOfComments(arrayOfCommentsPush);

    // const fetchComments = async (post) => {
    //   console.log('Fetch inside useEffect Started!')
    //   try {
    //     const response = await axios.get('http://157.245.193.184:3002/api/post/all', {
    //       headers: {
    //         'Authorization': `Bearer ${authToken}`,
    //       },
    //       params: {
    //         postId: post.id, // Pass the post ID to fetch comments for a specific post
    //       },
    //     });
    //     const newComments = response.data;
        
    //     setArrayOfComments(newComments.commentaries);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    // fetchComments()
    // addCommentClick()
  }, [allPosts])


 

const LIKES = useMemo(() => {
  if (allPosts) {
    return allPosts.map(item => item.likes.length);
  }
  return [];
}, [allPosts,like]);
    

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

    // console.log('1 Posts from use Selector= ', allPosts)
   
    // console.log('arrayofLikes=  ',arrayofLikes)
    // console.log('posts count od likes from use Selector= ', countOfLikes,typeof(countOfLikes))
    // arrayofLikes=Array(countOfLikes)
    // console.log('posts count od likes from use Selector= ', arrayofLikes,typeof(arrayofLikes))

    const handleClickCommenttest = (post) => {
      setClickedPost(post);
      openModal();
  };

  const handleRedirectToProfile = (user) => {
    console.log('USER CLICKED',user)
  
    router.push(`/anyuserprofile?user=${user.id}`)
    
    // router.push({
    //   pathname: '/anyuserprofile',
    //   query: { user:  user }
    // })

    // router.push({
    //   pathname: '/anyuserprofile',
    //   query: { user: user.id }, 
    // });
      
  }
  
    const renderUserPosts = (user) => {

        const userPosts = allPosts.filter((post) => user.id ===post.creatorId);
        const PostComments = allPosts.filter((post) => post.commentaries);
        // const PostLikes = allPosts.filter((post) => post);
        // console.log('postLIIIKES',PostLikes.likes)

        return userPosts.map((post, index) => (
            
          // arrayOfCommentsPush.push(post.commentaries),
          // console.log('12331-',arrayOfCommentsPush),
          post.commentaries.map((commentaries, index)=>{
             
          arrayOfCommentsPush.push(commentaries)
              // arrayOfCommentsPush.push(commentaries)
              // console.log('post=',post,'comment',commentaries)           
    }),
          <div key={index} >
           <a  onClick={()=>handleRedirectToProfile(user)}>
            {console.log('post-------------',post)}
            { 
            allUsers.map((item3, index) => {
              if(item3.id===post.creatorId){
                // setClickedUser(item3)
                return(<p>{item3.username}</p>)}
            })
            
          }
          </a>

            {/* {console.log('user.username',user.username)} */}
            {/* <p>{user.username}</p> */}
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
                                                () => handleClick(post)
                                            }
                                            />
                                      
                                        <Image src={commentLogo}
                                            alt='some alasdt2'
                                            className='comment'
                                            onClick={() => addCommentClick(post)}
                                            />
                                            <Modal isOpen={isModalOpen} onClose={closeModal}>
                                              {console.log('id post clicked post', clickedPost)}
                                              <ModalPost  post={clickedPost} users={allUsers} like={like}/>
                                           </Modal>
                                      

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
                      
                                    <span >{like[index]} отметок "Нравится"</span>
                                    {/* <span>{arrayOfComments.commentaries[index]}</span> */}
                                    </div>
                                </div>
           <div className='authorname'>
              <span> {user.username} {post.description} </span>
            </div>
            {/* <h1>{PostComments}</h1>  */}
            
            {/* {post.commentaries.map((commentaries, index)=>(
                 console.log('post -',user.username,'has comments= ',commentaries.commentary),
                 <div className="comments">
                    <span key={index}>{user.username}  {commentaries.commentary}</span>
                 </div>

            )
            )} */}
            {/* <p>-----------------------------</p> */}
            {/* {console.log('ARRAYOFCOMMENTARIES',arrayOfComments)} */}
            {}

            {/* {arrayOfComments.map((i, index) => (
              
                                     console.log('1 arrayofCommentsPush',arrayOfComments),
                                     i.map((ii)=>{
                                      console.log('ii=',ii)
                                     allUsers.map((item3, index) => {
                                      // console.log('1 usernames',item3.username)
                                     if(ii.authorId===item3.id){
                                      if(post.id===ii.postId){
                                        console.log('1 otvet компментарий ',ii.commentary, ' с автором',item3.username,'дополнительно пост', post)  
                                        return(<div key={index}>{item3.username}   {ii.commentary}</div>)}
                                      
                                      
                                        
                                     
                                     }
                                    }
                                     )
                                    }
                                    )
                                     )
                                    )} */}
            {/* <p>-----------------------------</p> */}
            {console.log('222 arrayOfComments',arrayOfComments)}
          
               
            
            {arrayOfComments.map((item, index) => {
                // console.log(' 222=item of array',item)
               
               
               
               
                  if(post.id==item.postId ){
                    
                  return(<div>{item.authorId} {item.commentary}</div>)
                  console.log(' 222 item2Commentary=',item.commentary),
                  <div key={index}>
                    <div>--------{item.commentary}--------</div>
                  </div>
                  }
                })
          
          
                     
          }
        
        
                
            {/* <div key={index}>
                <div className="comments">
                  {arrayOfComments[post.id] &&
                    arrayOfComments[post.id].map((comment, commentIndex) => (
                      <div key={commentIndex}>
                        <span>{comment.commentary}</span>
                      </div>
                    ))}
                </div>
              </div> */}


      {/* ... (other JSX) */}

            {/* {arrayOfComments.map((item)=>{
              <div className="comments">
              <span key={index}>{user.username} {item.commentary}</span>
            </div>
            })} */}





            {/* {arrayOfComments[index]}  */}
            {/* {console.log('------------arrayOfComments',arrayOfComments)} */}
            {/* {arrayOfComments.map((item)=>{ 
              <h1>123{item}</h1>
             })  } */}
             {/* {arrayOfComments.map((item, index) => (
              console.log('arrayOfComents',arrayOfComments,post),
              
                
                <div className="comments" key={index}>
                  <span>{user.username} {item.commentary}</span>
                </div>
              
                
              ))} */}
             

          
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