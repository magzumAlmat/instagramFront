'use client'
import Image from 'next/image'
import insta from '@/app/images/insta.png'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {createUser} from '@/store/slices/authSlice'
import { useRouter } from 'next/navigation'
 export default function UserSignUp() {
    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const [username,setUsername]=useState('')
    const router=useRouter('')

    
    const isAuth = useSelector((state) => state.auth.isAuth);

    const dispatch=useDispatch()

    console.log('thisis isAuth from UserSIGNUP= ',isAuth)
    
    const doCreateUSER=()=>{
        console.log('!!!!!2 doCreateUser запустился ',email,name,password,username)
        dispatch(createUser(email,name,password,username))
    }

    
    useEffect(()=>{
        if(isAuth===true){
            router.push('/login')
        }
    }
    ,[isAuth])

    return (
        <>
            <section className="login-page">
                <div className="card">
                  <Image src={insta} alt='some alt'/>
                  <p className='pheader'>Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.</p>
                    <form action="">
                        <input type="text" className="input" placeholder='Моб. телефон или эл. адрес'  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <input type="text" className="input" placeholder='Имя и фамилия' value={name} onChange={(e)=>setName(e.target.value)}/>
                        <input type="text" className="input" placeholder='Имя пользователя' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                        <input type="password" className="input" placeholder='Пароль' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                      
                        <button className="button button-primary" onClick={doCreateUSER} type='button'>
                            Регистрация
                        </button>
                    </form>
                </div>
                <div className="card">
                  <p>Есть аккаунт? <Link href="/login">Вход</Link></p>
                </div>

             
            </section>
        </>
    )
}
