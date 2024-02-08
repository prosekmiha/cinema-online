import React from 'react'
import { Bounce, JackInTheBox, Slide } from "react-awesome-reveal";

const IntroAnimation = ({ hidden }) => {
  return (
    <div className={`${hidden} absolute w-full h-full bg-black z-50 justify-center items-center`}>    
        <div className='flex gap-1 text-white font-bold text-[40px] md:text-[100px] cursor-pointer'>
            <Bounce delay={500}><span>Online</span></Bounce>
            <JackInTheBox delay={1200}><span className='text-[#3950d4]'>Cinema</span></JackInTheBox>
        </div>      
    </div>
  )
}

export default IntroAnimation