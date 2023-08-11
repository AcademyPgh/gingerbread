import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Profile from './usernamebar';

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
    <UserProvider>
      <html lang="en">
        <body className={inter.className}>
        <div className='navbar'>
          <Link href="/">Home</Link>
          <Profile/>
        </div>
          {children}
          </body>
      </html>
    </UserProvider>
  )
}
