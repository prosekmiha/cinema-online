import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'


const Layout = () => {
  return (
    <div className='px-[10px] md:px-[30px]'>
        <Header />
        <Outlet />
    </div>
  )
}

export default Layout
