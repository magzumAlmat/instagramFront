'use client'
import Image from 'next/image'

export default function Post({post}){
    console.log('3 Post=',post.mediaLinks)

    const host='http://157.245.193.184:3002'

    return (<a className="profile-my-post">
        <Image
            src={`${host}/${post.mediaLinks}`}
            alt="some alt"
            width={500} height={300}
        />
    </a>)
}