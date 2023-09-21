import Footer from './components/common/Footer'
import Header from './components/common/Header'
import './globals.css'
import type { Metadata } from 'next'
import {Poppins , Fira_Sans} from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: '800'
})

const fira = Fira_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira',
  weight: '800'
})


export const metadata: Metadata = {
  title: 'Emergent Academy',
  description: '...empowering Women',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${fira.variable} `}>
        <Header />
        {children}
        <Footer/>
        </body>
    </html>
  )
}
