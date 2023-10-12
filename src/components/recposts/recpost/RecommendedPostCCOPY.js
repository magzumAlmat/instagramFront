import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

import commentLogo from '@/app/images/instagram-comment-13415.svg';
import shareLogo from '@/app/images/instagram-share-13421.svg';
import saveLogo from '@/app/images/save-instagram-black-lineal-18315.svg';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Modal from '@/components/createpost';
import ModalPost from '@/components/recposts/recpost/modalpost/index';
import { useRouter } from 'next/navigation';
import { getAllUsersPostsAction } from '@/store/slices/getUsersPostsSlice';
import likeLogo from '../../../app/images/heart-3510.svg';
export default function RecommendedPost({ allPosts, allUsers, updatedLikes }) {
  const [clickedPost, setClickedPost] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [like, setLike] = useState([]);
  const [arrayOfComments, setArrayOfComments] = useState([]);
  const [countOfLike, setCountOfLikes] = useState([]);
  const router = useRouter();
  const dispatch = useDispatch();
  const authToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbG1hdC5tYWd6dW0xMjNAZ21haWwuY29tIiwiZnVsbF9uYW1lIjpudWxsLCJwaG9uZSI6bnVsbCwiaWF0IjoxNjk0NTg2NjczLCJleHAiOjE3MjYxMjI2NzN9.KTEqxyqQJ5avV6maDzAccZknj16_9m3g2NEOlwUch44';
  const host = 'http://157.245.193.184:3002';

  let arrayofLikes = [];
  const allPostsFromRedux = useSelector((state) => state.userposts.allPosts);
  const openModal = () => {
    setIsModalOpen(true);
};

const closeModal = () => {
    setIsModalOpen(false);
};

  useEffect(() => {
    dispatch(getAllUsersPostsAction());
    setLike(arrayofLikes)
    dispatch(getAllUsersPostsAction());
    setCountOfLikes(arrayofLikes)
    handleClick()
  }, [dispatch]);

  const addCommentClick = async (post) => {
    try {
      const response = await axios.get(`${host}/api/post/all`, {
        headers: {
          'Authorization': `Bearer ${authToken}`,
        },
      });
      const comments = response.data.map((item) => item.commentaries);
      setClickedPost(post);
      openModal();
      setArrayOfComments(comments);
    } catch (error) {
      console.error(error);
    }
  };


  const handleClick = async (post) => {
    await dispatch(addPostLikeAction(post));
    try {
      const response = await axios.get(`${host}/api/post/all`, {
        headers: {
          'Authorization': `Bearer ${authToken}`,
        },
      });
      const updatedLikes = response.data.map((item) => item.likes.length);
      setLike(updatedLikes);
    } catch (error) {
      console.error(error);
    }
    alert('You liked/unliked this post');
  };

  const handleRedirectToProfile = (user) => {
    router.push(`/anyuserprofile?user=${user.id}`);
  };

  const renderUserPosts = (user) => {
    const userPosts = allPosts.filter((post) => user.id === post.creatorId);
    return userPosts.map((post, index) => (
      <div key={index}>
        <a onClick={() => handleRedirectToProfile(user)}>
          {allUsers.map((item3, index) => {
            if (item3.id === post.creatorId) {
              return <p>{item3.username}</p>;
            }
          })}
        </a>
        <Image
          src={`${host}/${post.mediaLinks}`}
          alt="some alt"
          width={500}
          height={500}
        />
        <div id="flex-container">
          <div className="flex-item1" id="flex">
            <Image
              src={likeLogo}
              alt="some alt"
              className="like"
              onClick={() => handleClick(post)}
            />
            <Image
              src={commentLogo}
              alt="some alt"
              className="comment"
              onClick={() => addCommentClick(post)}
            />
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <ModalPost post={clickedPost} users={allUsers} like={like} />
            </Modal>
            <Image src={shareLogo} alt="some alt" className="send" />
          </div>
          <div className="raw-item1" id="raw">
            <Image src={saveLogo} alt="some alt" className="save" id="raw" />
          </div>
        </div>
        <div className="gap">
          <div className="countOfLikes">
            <span>{like[index]} отметок "Нравится"</span>
          </div>
        </div>
        <div className="authorname">
          <span> {user.username} {post.description} </span>
        </div>
        {arrayOfComments.map((item, index) => (
          <div key={index}>
            <p>--------{item.commentary}--------</p>
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div>
      <div className="post">
        <div className="post">{allUsers.map((user) => <div key={user.id}>{renderUserPosts(user)}</div>)}</div>
      </div>
    </div>
  );
}
