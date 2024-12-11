import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import Footer from './Footer'
const Layout = () => {
  return (
    <div className='bg-black-300 w-[100%]'>
        <Header/>
        <main><Outlet/></main>
        <Footer/>
    </div>
  )
}

export default Layout