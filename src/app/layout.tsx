import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Head from './components/Head'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import { Provider } from './components/Provider'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Dustin's Portfolio",
  description: 'My portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark' suppressHydrationWarning>
        <Head />
        
        <body className={`{montserrat.className} flex-1 text-black bg-gradient-to-br from-white from-10% to-green-50`}>
            <Provider>
              <div className={'dark:text-white dark:bg-slate-900'}>
                  <Header /> 
                {children}
                <Navbar />
                <Footer />
              </div>
              
            </Provider>
            
        </body>
    </html>
  )
}
