import './globals.css'
import react from 'react'
import  Navbar  from '@/components/navbar'
import Footer from '@/components/footer'
import { StateContext } from '@/context/StateContext'
export const metadata = {
  title: 'e-commerce',
 
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='layout'>
        <StateContext>
        <header>
          <Navbar/>
        </header>
        <main className='main-container'>
          
          {children}
        </main>
       
        <footer>
          <Footer/>
        </footer>
        </StateContext>
        </body>
    </html>
  )
}
