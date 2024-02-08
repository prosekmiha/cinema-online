import React from 'react'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <div className='relative w-full h-[30vh] sm:h-[50vh] text-white'>
        <img className='object-cover w-full h-full rounded-xl' src={'https://countryarts.lbcdn.io/uploads/2023/11/wonka_1416.jpg'}  />
        <div id="hero-gradient" className='absolute w-full h-full rounded-xl bottom-0 left-0'>
            <div className='flex flex-col absolute left-10 bottom-10 sm:left-20 sm:bottom-20'>
                <p className='font-semibold text-3xl sm:text-5xl pb-2'>Wonka</p>
                <p className='sm:text-xl text-md pb-6'>Komedija | Pustolovščina | Družinski film</p>
                <Link to={"/Wonka"} className='flex justify-center items-center h-[35px] w-[100px] sm:h-[45px] sm:w-[140px] bg-[#3950d4] hover:bg-[#3962d4] rounded-md text-md sm:text-xl font-medium'>Predvajaj</Link>
            </div>
        </div>
    </div>
  )
}

export default Hero