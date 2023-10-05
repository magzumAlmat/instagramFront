'use client'
import Image from 'next/image'
import insta from '@/app/images/insta.png'
import Link from 'next/link'
import { authSlice,editVar,logout } from '@/store/slices/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import { authorize ,createUser} from '@/store/slices/authSlice'
 export default function UserLogin() {
    const dispatch=useDispatch()
    const isAuth = useSelector((state) => state.auth.isAuth);
    const someVar = useSelector((state) => state.auth.someVar);
 

    return (
        <>
            <section className="login-page">
            <h1>{someVar}</h1>
                 <button onClick={()=>{dispatch(editVar()) }}>CLICK</button>
                <div className="card">
                    <form action="">
                        <input type="text" className="input" placeholder='Телефон, имя пользователя или эл. адрес'/>
                        <input type="password" className="input" placeholder='Пароль'/>
                      
                        <button className="button button-primary"  >
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
