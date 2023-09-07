import './globals.css'


export const metadata = {
  title: 'Second Lesson',
  description: 'Learn nextJS and React',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
