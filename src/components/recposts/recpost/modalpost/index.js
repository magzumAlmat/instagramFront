import React, {useRef, useState} from "react";
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
export default function ModalPost ({post}) {
    console.log('post from modal post', post)
  




    return (
            <div className="modal-post">
               
                    <div className='modal-post-left'>
                        asd
                        <Image src={img} alt="alt" />
                    </div>
                    <div className='modal-post-right'>
                        <header className='modal-post-right-header'>
                            <div>
                                <Image src={smallProfile} style={{"height":'32px', "width": '32px'}} alt=""/>
                            </div>
                            <div className='modal-post-right-header-username'>
                                <a href='#'>Username</a>
                                <a href='#'>city</a>
                            </div>
                        </header>
                        <div className="modal-post-right-body">
                            <div className='flex flex-ai-c flex-rw'>
                                <Image src={smallProfile} style={{"height":'32px', "width": '32px'}} alt=""/>
                                <span>comment</span>
                            </div>
                            <time>time</time>

                            <div>
                                <Image src={smallProfile} style={{"height":'32px', "width": '32px'}} alt=""/>
                            </div>
                            <div className='modal-post-right-header-username'>
                                <span>comment</span>
                                <time>time</time>
                            </div>
                            <div>
                                <Image src={smallProfile} style={{"height":'32px', "width": '32px'}} alt=""/>
                            </div>
                            <div className='modal-post-right-header-username'>
                                <span>comment</span>
                                <time>time</time>
                            </div>
                            <div>
                                <Image src={smallProfile} style={{"height":'32px', "width": '32px'}} alt=""/>
                            </div>
                            <div className='modal-post-right-header-username'>
                                <span>comment</span>
                                <time>time</time>
                            </div>
                            <div>
                                <Image src={smallProfile} style={{"height":'32px', "width": '32px'}} alt=""/>
                            </div>
                            <div className='modal-post-right-header-username'>
                                <span>comment</span>
                                <time>time</time>
                            </div>
                            <div>
                                <Image src={smallProfile} style={{"height":'32px', "width": '32px'}} alt=""/>
                            </div>
                            <div className='modal-post-right-header-username'>
                                <span>comment</span>
                                <time>time</time>
                            </div>
                            <div>
                                <Image src={smallProfile} style={{"height":'32px', "width": '32px'}} alt=""/>
                            </div>
                            <div className='modal-post-right-header-username'>
                                <span>comment</span>
                                <time>time</time>
                            </div>
                            <div>
                                <Image src={smallProfile} style={{"height":'32px', "width": '32px'}} alt=""/>
                            </div>
                            <div className='modal-post-right-header-username'>
                                <span>comment</span>
                                <time>time</time>
                            </div>
                            <div>
                                <Image src={smallProfile} style={{"height":'32px', "width": '32px'}} alt=""/>
                            </div>
                            <div className='modal-post-right-header-username'>
                                <span>comment</span>
                                <time>time</time>
                            </div>
                            <div>
                                <Image src={smallProfile} style={{"height":'32px', "width": '32px'}} alt=""/>
                            </div>
                            <div className='modal-post-right-header-username'>
                                <span>comment</span>
                                <time>time</time>
                            </div>
                        </div>
                        <div className="modal-post-section">
                            <div className='modal-post-section-start'>
                                <button>
                                    <Image src={heart}/>
                                </button>
                                <button>
                                    <Image src={comment}/>
                                </button>
                                <button>
                                    <Image src={share}/>
                                </button>
                            </div>
                            <div className='modal-post-section-end'>
                                <button>
                                    <Image src={save}/>
                                </button>
                            </div>
                        </div>
                        <div className="modal-post-liked p1">
                            <div>
                                <Image src={smallProfile} style={{'height': '16px', 'width': '16px'}}></Image>
                                <Image src={smallProfile} style={{'height': '16px', 'width': '16px'}}></Image>
                                <Image src={smallProfile} style={{'height': '16px', 'width': '16px'}}></Image>
                            </div>
                            <div>
                                Нравится username
                            </div>
                        </div>
                        <div className='p1'>
                            timestamp
                        </div>
                        <section className='section'>
                            <div className='modal-post-comment'>
                                <div>
                                    <Image style={{'width': '32px', 'height': '32px'}} src={emoji}/>
                                </div>
                                <div>
                                    <textarea style={{'width':'260px', 'height':'20px', 'border':'none', 'resize':'none'}} placeholder='Добавьте комментарий'/>
                                </div>
                                <div className='modal-post-section-end'>
                                    <a href="#">Опубликовать</a>
                                </div>
                            </div>
                        </section>
                    </div>
            </div>
    );

}