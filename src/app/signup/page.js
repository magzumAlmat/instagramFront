'use client'
import Header from '@/components/header'
import UserLogin from '@/components/auth/user'
import UserSignUp from '@/components/signup'

export default function SignUp() {
  return (
    <main>
      <Header/>
      
      <UserSignUp/>
    </main>
  )
}
