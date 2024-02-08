import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Search from './Search'
import { Context } from '../App';

const Header = () => {

  const location = useLocation();
  
  const {currentUser, setCurrentUser} = useContext(Context);

  const handleLogout = () => {
    setCurrentUser("");
    sessionStorage.removeItem("user");
  }

  return (   
    <div className='w-full flex flex-col sm:flex-row py-4 justify-between items-center sticky top-0 z-40 bg-black'>
      <Link to="/"><h1 className='text-white font-bold text-3xl cursor-pointer'>Online<span className='text-[#3950d4]'>Cinema</span></h1></Link>
      { 
        location.pathname=== "/" && <Search />
      }
      <div className='text-white flex gap-4 text-xl font-medium items-center'>
        { currentUser ?
          <>
            <p>{currentUser}</p>
            <div onClick={() => handleLogout()} className='bg-[#3950d4] px-4 py-2 rounded-md hover:bg-[#3962d4] cursor-pointer'>Odjava</div>
          </>
          :
          <>
            <Link to="/login" className='cursor-pointer'>Prijava</Link>
            <Link to="/register" className='bg-[#3950d4] px-4 py-2 rounded-md hover:bg-[#3962d4] cursor-pointer'>Registracija</Link>
          </>
        }     
      </div>
    </div>
  )
}

export default Header