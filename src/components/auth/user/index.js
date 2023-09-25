'use client'
import Image from 'next/image'
import insta from '@/app/images/insta.png'
import Link from 'next/link'
 export default function UserLogin() {
    return (
        <>
            <section className="login-page">
                <div className="card">
                    <form action="">
                        <input type="text" className="input" placeholder='Телефон, имя пользователя или эл. адрес'/>
                        <input type="password" className="input" placeholder='Пароль'/>
                      
                        <button className="button button-primary">
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
