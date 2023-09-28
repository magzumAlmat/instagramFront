'use client'
import Image from 'next/image'
import notificationLogo from '@/app/images/notification-small.svg';
export default function RecommendedPost({post}){
  
    const host='http://157.245.193.184:3002'
    
    const ram=post.likes
    const data = []
    ram.map(i=>{
      
           data.push(i)
        
    })


    console.log(data.length)
    // console.log('Likes= ',typeof(numberOfLikes.likes))



    return (
    <div className="post">  
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
                <Image src={notificationLogo}
                    alt='some alt2'
                    className='like'/></a>
            <a className="">
                <Image src={notificationLogo}
                    alt='some alt2'
                    className='comment'/></a>
            <a className="">
                <Image src={notificationLogo}
                    alt='some alt2'
                    className='send'/></a>
        </div>
        <div className="raw-item1" id="raw">
            <a>
                <Image src={notificationLogo}
                    alt='some alt2'
                    className='save'
                    id="raw"/></a>
        </div></div><div className="counOftLikes">
        <h6> отметок "Нравится"</h6></div>



        <div className="comments">
            <h6>Комментариии</h6>
        </div> 
    </div>
        )

    }



