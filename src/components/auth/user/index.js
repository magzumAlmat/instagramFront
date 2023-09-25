'use client'
import Image from 'next/image'
import insta from '@/app/images/insta.png'
import Link from 'next/link'
 export default function UserLogin() {
    return (
        <>
            <section className="login-page">
                <div className="card">
                  <Image src={insta}/>
                    <form action="">
                        <input type="text" className="input"/>
                        <input type="password" className="input"/>
                      
                        <button className="button button-primary">
                            Войти
                        </button>
                    </form>
                </div>
                <div className="card">
                  <p>У вас ещё нет аккаунта? <Link href="#">Зарегистрироваться</Link></p>
                </div>

             
            </section>
        </>
    )
}
