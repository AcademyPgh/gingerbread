import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GingerBread Timing',
  description: 'WE DO BE RACING',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className='navbar'>
        <Link href="/">Home</Link>
        <Link href="/userhub">My Account</Link>
        <Link href="/login">Log In</Link>
      </div>
        {children}
        </body>
    </html>
  )
}
