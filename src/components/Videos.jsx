import React, { useContext, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import VideoItem from './VideoItem'
import VideoPage from '../pages/VideoPage';
import autoAnimate from '@formkit/auto-animate'
import Filter from './Filter';

const Videos = ({videos}) => {

  const parentRef = useRef(null)

  useEffect(() => {
      if (parentRef.current) {
      autoAnimate(parentRef.current);   
      }
  }, [parentRef])

  return (
    <div id="videos" className='h-full min-h-[100vh] scroll-mt-[90px] bg-black'>
    <Filter />
    <div className='flex flex-wrap justify-center' ref={parentRef}>
        {
        videos.map((video, index) => { 
          return(
            <Link to={`/${video.title}`} element={<VideoPage />} key={index}>
              <VideoItem key={index} video={video}/>
            </Link>
          )
        })}
        
    </div>
    </div>
  )
}

export default Videos