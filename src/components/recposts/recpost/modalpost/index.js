import React, {useEffect, useRef, useState} from "react";
import img from '@/app/images/profile.jpg';
import Image from "next/image";
import smallProfile from '@/app/images/profile-pic.png'
import backLogo from "@/app/images/back-arrow.svg";
import heart from '@/app/images/heart-3510.svg';
import comment from '@/app/images/instagram-comment-13415.svg';
import share from '@/app/images/instagram-share-13421.svg';
import save from '@/app/images/save-instagram-black-lineal-18315.svg';
import emoji from '@/app/images/smartphone.webp';

import { authSlice,authorize,logout } from '@/store/slices/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios";
import { addPostCommentAction } from "@/store/slices/getUsersPostsSlice";
import { getUsersPostsAction } from "@/store/slices/getUsersPostsSlice";
export default function ModalPost ({post,users,like}) {
    const dispatch = useDispatch()
    console.log('111post from modal post', post)
  
    const host = 'http://157.245.193.184:3002';

    let comments=post.commentaries
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbG1hdC5tYWd6dW0xMjNAZ21haWwuY29tIiwiZnVsbF9uYW1lIjpudWxsLCJwaG9uZSI6bnVsbCwiaWF0IjoxNjk0NTg2NjczLCJleHAiOjE3MjYxMjI2NzN9.KTEqxyqQJ5avV6maDzAccZknj16_9m3g2NEOlwUch44';
    
    const [newComment, setNewComment] = useState(""); // State to hold the new comment
    const [commentaries, setCommentaries] = useState([]);
    let commentariesPush = []

    if (post) {
        comments.map((item) => {
            commentariesPush.push(item)
        })
    }


    const handleCommentChange = (event) => {
      setNewComment(event.target.value); // Update the new comment state
    };
  
    const handlePublishClick = async() => {
        
      // Handle the "Опубликовать" click event
      console.log("Publishing comment: ", newComment);
      await dispatch(addPostCommentAction(newComment,post))
      alert('comment uploaded')
      comments.map((item) => {
        commentariesPush.push(item)
      })
      
      await dispatch(getUsersPostsAction())

    }
    useEffect (() => {
        setCommentaries(commentariesPush)
    },[])
    
    let mainImage=''
    
    post.mediaLinks.map((item,index) => {
        console.log('img=',item)
    mainImage=`${host}/${item}`
    })

    let nodata=[]

    if (comments.length==0){
        nodata=[{0:'NODATA'}]
        console.log('COMMENT HAVE NO DATA',comments,nodata)
        comments=nodata
    }

    return (
      
           
            <div className="modal">

        {console.log('post.commentaries.====',post.commentaries)}
      
        

        {comments.length > 0 &&(
                comments.map((item, index) => (
                
                //  console.log(' 1 item from post',post),
                
                <div key={item.id} className="modal-post">
                    <div className='modal-post-left'>
                        
                        <Image  src={mainImage} alt="some aasdaasdlt"
                            width={500}
                            height={500}/>
                    </div>
                 
                    
                    <div className='modal-post-right'>
                        <header className='modal-post-right-header'>
                            
                            <div>
                                {/* <Image src={smallProfile} style={{"height":'32px', "width": '32px'}} alt="asdad"/> */}
                            </div>
                            <br />
                            <div className='modal-post-right-header-username'>
                            {users.map((item3, index) => {
                            if(item3.id==post.creatorId){
                                return(
                                <div>
                                {item3.username}
                                </div>
                                )         
                                                                    }
                                                  }
                        )}
                                {/* <a href='#'>city</a> */}
                            </div>
                        </header>
                        <div className="modal-post-right-body">
                        {users.map((item3, index) => {
                            if(item3.id==post.creatorId){
                                return(
                                <div>
                                 {item3.username} {post.description}
                                </div>
                                )         
                                                                    }
                                                  }
                        )}
                        <br />
                        <br />
                            <div className=''>
                            {/* {comment.length == 0  ? (
                            
                           
                            
                            ):(
                                {comment=nodata}
                            )} */}
                                {commentaries.map((i) => (
                                     users.map((item3, index) => {
                                     if(item3.id==i.authorId){
                                        return(<div key={i.id}>{item3.username}   {i.commentary}</div>)
                                        // console.log('output i=',item3.username,i.commentary),
                                        
                                     }
                                     })
                                    ))}

                                    {/* <p>----------------------------------------------</p> */}
                                {/* <Image src={smallProfile} style={{"height":'32px', "width": '32px'}} alt="asdads"/> */}
                                {/* {item.commentary.map((item2)=>(<span key={item2.id}>{item2}</span>))} */}
                                {/* {console.log(' render coments= ',item.commentary)} */}
                                

                               {/* {console.log('cc=====',comments)}
                                    
                               
                                  {comments.map((i, index) => (
                                    users.map((item3, index) => {
                                        if(i.authorId===item3.id){
                                            <div key={item.id} className="modal-post">
                                                
                                               asdada {item3.username}   {i.commentary}
                                            </div>
                                        }})

                                ))
                                } */}

                                {/* {cc && cc.length > 0  ? (
                                        comments.map((i, index) => (
                                            users.map((item3, index) => {
                                                if(item3.id==i.authorId){
                                                    <div key={item.id} className="modal-post">
                                                    
                                                        {item3.username}   {i.commentary}
                                                    </div>
                                                }})

                                        ))
                                    ) : (
                                        <p>No comments available.</p>
                                    )} */}
                               
                               
                                {/* {comments.map((i) => (
                                     users.map((item3, index) => {
                                     if(item3.id==i.authorId){
                                        return(<div key={i.id}>{item3.username}   {i.commentary}</div>)
                                        // console.log('output i=',item3.username,i.commentary),
                                        
                                     }
                                     })
                                    ))} */}
                               
                              
                            </div>
                            <br />
                            {/* <time>{item.createdAt}</time> */}

                           
                        </div>
                        {/* <div className="modal-post-section">
                            <div className='modal-post-section-start'>
                                <button>
                                    <Image src={heart} alt="asdads"/>
                                </button>
                                <button>
                                    <Image src={comment} alt="asdads"/>
                                </button>
                                <button>
                                    <Image src={share} alt="asdads"/>
                                </button>
                            </div>
                            <div className='modal-post-section-end'>
                                <button>
                                    <Image src={save} alt="asdads"/>
                                </button>
                            </div>
                        </div> */}
                        <div className="modal-post-liked ">
                            <div>
                                <Image src={smallProfile} style={{'height': '16px', 'width': '16px','margin': '20px'}} alt="asdads"/>
                            </div>
                            <div>
                            {/* {post.likes.map((i) => (
                                     users.map((item3, index) => {
                                     if(item3.id==i.authorId){
                                        return(   <div >{like} Нравится {item3.username}</div>)
                                     }
                                    
                                     }
                            )
                                )    )
                            } */}
                            
                            <div >{post.likes.map((i) => {
                                let sum=0
                                sum=sum+i.length
                                // console.log('likes',i.length,sum)
                            })}
                                
                               
                                {like.length > 0 && (
                                    <div>
                                        {like[0]} отметок "Нравится"
                                    </div>
                                    )}
                                </div>
                                </div>
                        </div>
                        <div className='section'>
                        <time>{item.createdAt}</time>
                        </div>
                        <section className='section '>
                            <div className='modal-post-comment'>
                                <div className="section">
                                <svg aria-label="Смайлик" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Смайлик</title><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>

                                </div>
                                <div>
                                    <textarea
                                    value={newComment}
                                    onChange={handleCommentChange}
                                    style={{'width':'260px', 'height':'20px', 'border':'none', 'resize':'none'}} placeholder='Добавьте комментарий'/>
                                </div>
                                <div className='modal-post-section-end'>
                                    <a href="#" style={{'colot':'#77a7ff'} }  onClick={handlePublishClick}><b>Опубликовать</b></a>
                                </div>
                            </div>
                        </section>
                    </div>
                         
                </div>
                           )
                           )
                        )}
            </div>
        
    );

}