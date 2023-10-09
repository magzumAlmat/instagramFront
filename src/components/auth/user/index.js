'use client'
import Image from 'next/image'
import insta from '@/app/images/insta.png'
import Link from 'next/link'
import { authSlice,editVar,logout } from '@/store/slices/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import { authorize ,createUser,authUser} from '@/store/slices/authSlice'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/navigation'

 export default function UserLogin() {
    const dispatch=useDispatch()
    const isAuth = useSelector((state) => state.auth.isAuth);
    // const someVar = useSelector((state) => state.auth.someVar);
    
    console.log('this is localstorage=',localStorage)

    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const router=useRouter('')

    const isCurrentUser=useSelector((state)=>{state.auth.isCurrentUser})
  
 

    console.log('isAuth from login= ',isAuth)

    const doAuthUser=()=>{
        console.log('doAuthteUser запустился ',email,password)
        dispatch(authUser(email,password))
        
       
    }

    useEffect(() => {
        // Redirect to '/layout' when isAuth becomes true
        if (isAuth === true) {
          router.push('/layout');
        }
      }, [isAuth, router]); 


    return (
        <>
            <section className="login-page">
                {isCurrentUser}
            {/* <h1>{someVar}</h1> */}
                 {/* <button onClick={()=>{dispatch(editVar()) }}>CLICK</button> */}
                <div className="card">
                    <form action="">
                        <input type="text" className="input" placeholder='Моб. телефон или эл. адрес'  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        
                        <input type="password" className="input" placeholder='Пароль' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <button className="button button-primary"  onClick={doAuthUser} type='button'>
                            Войти
                        </button>
                    </form>
                </div>
                <div className="card">
                  <p>У вас ещё нет аккаунта? <Link href="signup/">Зарегистрироваться</Link></p>
                </div>

             
            </section>
        </>
    )
}
