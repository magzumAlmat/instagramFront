import './globals.css'
import ReduxProvider from '@/store/provider'

export const metadata = {
  title: 'Second Lesson',
  description: 'Learn nextJS and React',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body>{children}</body>
      </ReduxProvider>
    </html>
  )
}
