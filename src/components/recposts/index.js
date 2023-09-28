
import image1 from '../../app/images/post/1.jpg'
import image2 from '@/app/images/post/2.jpg'
import image3 from '@/app/images/post/3.jpg'
import image4 from '@/app/images/post/4.jpeg'
import image5 from '@/app/images/post/5.jpeg'
import image6 from '@/app/images/post/6.jpeg'
import Image from "next/image"
import { useState,useEffect } from "react";
import axios from "axios";
import RecommendedPost from './recpost'

export default function ReccomendedPosts() {
    console.log('1 Функция Posts отработалась')

    


    const posts = [
        { postImage: image1 },
        { postImage: image2 },
        { postImage: image3 },
        { postImage: image4 },
        { postImage: image5 },
        { postImage: image6 }
    ];

    const showPosts = posts.map((item, index) => (
        <RecommendedPost key={index} post={item} />
    ));

    return (
        <div className='recommended flex'>
            {showPosts}
        </div>
    );

    // myposts.map((item,index) =>

    // {

    // <div className='profile flex'>
    //     <Post key={index} post={item}  passpost={item}/>
    // </div>

    // }
    // )




}
