'use client'
import Image from 'next/image'
import notificationLogo from '@/app/images/notification-small.svg';
export default function RecommendedPost({post}){
    console.log('3 Post=',post.mediaLinks)

    const host='http://157.245.193.184:3002'
 


    return (
    <div className="post">
    
        <Image
            src={post.postImage}
            alt="some alt"
          
            />
        
        {/* <div className=''>
            <a className=""> <Image src={notificationLogo} alt='some alt2'  className='like'   /></a>
            <a className=""> <Image src={notificationLogo} alt='some alt2'  className='comment'/></a>
            <a className=""> <Image src={notificationLogo} alt='some alt2'  className='send'     /></a>
            <a className="saveLink"> <Image src={notificationLogo} alt='some alt2'  className='save'   id="raw"  /></a>
        </div> */}


        < div id = "flex-container" > <div class="flex-item1" id="flex">
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
        <div class="raw-item1" id="raw">
            <a>
                <Image src={notificationLogo}
                    alt='some alt2'
                    className='save'
                    id="raw"/></a>
        </div></div><div className="counOftLikes">
        <h6>36 отметок "Нравится"</h6></div>



        <div className="comments">
            <h6>Комментариии</h6>
        </div> 
    </div>
        )

    }



