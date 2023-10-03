'use client' 
import Image from 'next/image'
import notificationLogo from '@/app/images/notification-small.svg';
import likeLogo from '@/app/images/heart-3510.svg';
import commentLogo from '@/app/images/instagram-comment-13415.svg';
import shareLogo from '@/app/images/instagram-share-13421.svg';
import saveLogo from '@/app/images/save-instagram-black-lineal-18315.svg';
import axios from 'axios';
import { useEffect ,useState} from 'react';
export default function RecommendedPost({post, users, myposts}) {
    const [postId,setPostId]=useState(0)
    const [postEntity,setPostEntity]=useState()
    const [response,setResponse]=useState('')
    //const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbG1hdC5tYWd6dW0xMjM0QGdtYWlsLmNvbSIsImZ1bGxfbmFtZSI6bnVsbCwicGhvbmUiOm51bGwsImlhdCI6MTY5NTY5ODE5NSwiZXhwIjoxNzI3MjM0MTk1fQ.r4M018A6NHYIV6tMAcaQOQowb3IhmHZ5u9VnSzRBEik'
    const authToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbG1hdC5tYWd6dW0xMjNAZ21haWwuY29tIiwiZnVsbF9uYW1lIjpudWxsLCJwaG9uZSI6bnVsbCwiaWF0IjoxNjk0NTg2NjczLCJleHAiOjE3MjYxMjI2NzN9.KTEqxyqQJ5avV6maDzAccZknj16_9m3g2NEOlwUch44'
    const host = 'http://157.245.193.184:3002'

    const usersArray = []
    users.map(i => {
        usersArray.push(i.id)
    })
    let authorPost = '';
    let authorComment = '';

    // console.log(usersArray)


    // setPostEntity(post)
    // console.log('POST ENTITY',postEntity)
    const likeArray = []
    let counter=0
    post.likes.map(i => {
       
        if (Number(i.id)>0){
            // console.log('i >0',i,'with post id',i.postId)
            likeArray.push(i)
        }

    })
    // console.log('1 likeArrayArray',likeArray)


    // setResponse(data.length)
    // console.log('1 RESPONSE',response)

    // console.log('post ', post)
    // console.log('comments ',post.commentaries)
    
    const commentArray = []
    post.commentaries.map(i => {
        commentArray.push(i);
        users.map(u => {
            if (u.id == i.authorId) {
                authorComment = u.username
            }
        })
    })


    const filteredUsers = []
    myposts.map(i => {
        users.map(u => {
            if (u.id == i.creatorId) {
                authorPost = u.username
                // console.log('check resolve', u.username)
            }
            // console.log('this is user from map', u)
        })
        filteredUsers.push(i)
        // console.log('this is post', i)
    })

    let comment = []
    const mapComment = commentArray.map(i => {
        // console.log(i.commentary)
        comment.push(i.commentary)
    })

          const likeHandleClick = async (post) => {
            setPostId(Number(post.id));
          };
        
          useEffect(() => {
           
            const fetchData = async () => {
              if (postId !== 0) {
                try {
                  const resp = await axios.post(`${host}/api/like/post/${postId}`, null, {
                    headers: {
                      'Authorization': `Bearer ${authToken}`
                    }
                  });
                  console.log('Response for like action :', resp.data);
            
                  const newPosts = await axios.get('http://157.245.193.184:3002/api/post/all', {
                    headers: {
                        'Authorization': `Bearer ${authToken}`
                    }
                });
            

                  setResponse(...likeArray,newPosts)

                  console.log('NEWPOSTS from server ', response);

                } catch (error) {
                  console.error('Error:', error);
                }
              } else {
                console.log('postId is 0');
              }
            };
        
            fetchData(); // Call fetchData when postId changes
        
          }, [postId]);


    return (
        <div className="post">
            <div className='gap'>
            <span >{authorPost}</span>
            </div>
            
            <Image src={
                    `${host}/${
                        post.mediaLinks
                    }`
                }
                alt="some alt"
                width={500}
                height={500}/> 
                

            <div id="flex-container">
                <div className="flex-item1" id="flex">
                    <button className=""  onClick={()=>likeHandleClick(post)}>
                        <Image src={likeLogo}
                            alt='some alt2'
                            className='like'/></button>
                    <button  className="">
                      <Image src={commentLogo}
                          alt='some alt2'
                          className='comment'/></button>
                    <button className="">
                        <Image src={shareLogo}
                            alt='some alt2'
                            className='send'/></button>
                </div>
                <div className="raw-item1" id="raw">
                    <button>
                        <Image src={saveLogo}
                            alt='some alt2'
                            className='save'
                            id="raw"/></button>
                </div>
            </div>
        <div className='gap'>    
            <div className="counOftLikes" >
                
                <span> {
                    likeArray.length
                }{' '}
                    отметок "Нравится"</span>
            </div>

            <div className='authorname'>
            <span>{authorPost}
            {' '}{
                post.description
            }</span>
            
            </div>

            <div className="comments">
                {comment.map((key) => (
                    
                     <div>
                     <span>
                    {authorComment} {' '}{key}
                 
                  

                    </span>
                    <h6 className='comment-text'> </h6>
                    </div>


                ))
            } </div>
        </div>
        </div>
    )

}

