'use client'
import Image from 'next/image'
import insta from '@/app/images/insta.png'
import Link from 'next/link'
 export default function UserSignUp() {
    return (
        <>
            <section className="login-page">
                <div className="card">
                  <Image src={insta}/>
                  <p className='pheader'>Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.</p>
                    <form action="">
                        <input type="text" className="input"/>
                        <input type="password" className="input"/>
                        <input type="text" className="input"/>
                        <input type="password" className="input"/>
                      
                        <button className="button button-primary">
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
