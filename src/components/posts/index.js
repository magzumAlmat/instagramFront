import Post from "./post";
import image1 from '../../app/images/post/1.jpg'
import image2 from '@/app/images/post/2.jpg'
import image3 from '@/app/images/post/3.jpg'
import image4 from '@/app/images/post/4.jpeg'
import image5 from '@/app/images/post/5.jpeg'
import image6 from '@/app/images/post/6.jpeg'
import Image from "next/image"

export default function Posts() {
    console.log('2 Внутри тега MyResumes отправил параметром массив resumes')
    const posts = [
        { postImage: image1 },
        { postImage: image2 },
        { postImage: image3 },
        { postImage: image4 },
        { postImage: image5 },
        { postImage: image6 }
    ];

    const showPosts = posts.map((item, index) => (
        <Post key={index} post={item} />
    ));

    return (
        <div className='profile flex'>
            {showPosts}
        </div>
    );
}
