'use client'
import Image from "next/image"
export default function Post({post}){
    return (<a className="profile-my-post"><Image src={post.postImage}/></a>)
}