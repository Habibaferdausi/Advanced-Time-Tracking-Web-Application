import { Inter } from 'next/font/google'
import './globals.css'
import AuthProvider from '@/context/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Advanced Time Tracking Web Application',
  description: 'Development by Habiba Ferdausi Ritu',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <main>   {children}</main>
        </AuthProvider>
     
        </body>
    </html>
  )
}
