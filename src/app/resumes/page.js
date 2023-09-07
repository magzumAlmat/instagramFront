'use client'
import Header from '@/components/header'
import MyResumes from '@/components/myresumes'
export default function ResumePage() {
    const resumes = [{
        position: "Менеджер отдела продаж",
        createdAt: "25.07.2023",
        stats: {
            views: 0,
            invites: 0,
            shown: 0
        }
    },{
        position: "Менеджер отдела продаж2",
        createdAt: "25.07.2024",
        stats: {
            views: 20,
            invites: 20,
            shown: 20
        }
    },{
        position: "Менеджер отдела продаж3",
        createdAt: "25.07.2025",
        stats: {
            views: 30,
            invites: 30,
            shown: 30
        }
    }]
  return (
    <main>
        <Header/>
        <div className="container">
            <div className='flex flex-ai-c flex-jc-sb ptb7'>
                <h1>Мои резюме</h1>
                <button className='button button-secondary-bordered'>Создать резюме</button>
            </div>
        <MyResumes resumes={resumes}/>
        </div>
    </main>
  )
}
