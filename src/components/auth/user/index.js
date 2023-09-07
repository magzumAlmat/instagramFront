'use client'
 export default function UserLogin() {
    return (
        <>
            <section className="login-page">
                <div className="card">
                    <h1>Поиск работы</h1>
                    <form action="">
                        <input type="text" className="input"/>
                        <button className="button button-primary">
                            Продолжить
                        </button>
                    </form>
                </div>

                <div className="card">
                    <h1>Размещение вакансий и доступ к базе резюме</h1>


                    <button className="button button-primary-bordered">
                        Ищу сотрудников
                    </button>

                </div>
            </section>
        </>
    )
}
