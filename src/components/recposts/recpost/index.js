'use client'
import Image from 'next/image'
import notificationLogo from '@/app/images/notification-small.svg';
import likeLogo from '@/app/images/heart-3510.svg';
import commentLogo from '@/app/images/instagram-comment-13415.svg';
import shareLogo from '@/app/images/instagram-share-13421.svg';
import saveLogo from '@/app/images/save-instagram-black-lineal-18315.svg';
export default function RecommendedPost({post, users, myposts}){
  
    const host='http://157.245.193.184:3002'
    const data3 = []
    users.map(i=>{
        data3.push(i.id)
    })
    let authorPost = '';
    let authorComment = '';

    console.log(data3)




    const ram=post.likes
    const data = []
    ram.map(i=>{
           data.push(i) 
    })

    console.log('post ',post)
    // console.log('comments ',post.commentaries)
    const ramComments=post.commentaries
    const data2 = []
    ramComments.map(i=>{
           data2.push(i);
           users.map(u => {
               if (u.id == i.authorId) {
                   authorComment = u.username
               }
           })
    })



    const data4 = []
    myposts.map(i=>{
        users.map(u => {
            if (u.id == i.creatorId) {
                authorPost = u.username
                console.log('check resolve', u.username)
            }
            console.log('this is user from map' ,u)
        })
        data4.push(i)
        console.log( 'this is post', i)
    })
    let comment = []
  

    // console.log('data2',data2)
    const mapComment = data2.map(i => {
        console.log(i.commentary)
        comment.push(i.commentary)
    })
    // console.log('Likes= ',typeof(numberOfLikes.likes))



    return (
    <div className="post">
        <h6>{authorPost}</h6>
        <Image
            src={`${host}/${post.mediaLinks}`}
            alt="some alt"
            width={500}
            height={500}
        />

        {/* <div className=''>
            <a className=""> <Image src={notificationLogo} alt='some alt2'  className='like'   /></a>
            <a className=""> <Image src={notificationLogo} alt='some alt2'  className='comment'/></a>
            <a className=""> <Image src={notificationLogo} alt='some alt2'  className='send'     /></a>
            <a className="saveLink"> <Image src={notificationLogo} alt='some alt2'  className='save'   id="raw"  /></a>
        </div> */}

        < div id = "flex-container" > <div className="flex-item1" id="flex">
            <a className="">
                <Image src={likeLogo}
                    alt='some alt2'
                    className='like'/></a>
            <a className="">
                <Image src={commentLogo}
                    alt='some alt2'
                    className='comment'/></a>
            <a className="">
                <Image src={shareLogo}
                    alt='some alt2'
                    className='send'/></a>
        </div>
        <div className="raw-item1" id="raw">
            <a>
                <Image src={saveLogo}
                    alt='some alt2'
                    className='save'
                    id="raw"/></a>
        </div></div><div className="counOftLikes">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h6> {data.length} отметок "Нравится"</h6></div>
        <h6>{authorPost} {post.description}</h6>



        <div className="comments">
            {comment.map((key) => (
                // eslint-disable-next-line react/jsx-key
                <h6>
                    {authorComment} {key}
                </h6>
                
            ))}
        </div> 
    </div>
        )

    }



