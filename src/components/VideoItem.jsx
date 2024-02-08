import React, { useContext, useState } from 'react'
import { Context } from '../App'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';



const VideoItem = ({ video }) => {

  const {currentUser, setCurrentUser} = useContext(Context);



  return (
    
    <div className='relative h-[250px] sm:h-[400px] w-[160px] sm:w-[200px] lg:w-[250px] m-1 sm:m-2 p-1 hover:scale-105'>
        <img className='object-cover w-full h-[242px] sm:h-[392px] rounded-xl' src={video.image}  />  
        <div className='absolute w-[100%] bottom-0 left-0 text-white rounded-xl'>
          <div className='videoItem rounded-xl'>
            <p className='font-semibold text-2xl px-4 pt-5'>{video.title}</p>
            <p className='font-normal text-lg px-4 pb-4'>{video.genre}</p>
          </div>      
        </div>
    </div>
  )
}

export default VideoItem