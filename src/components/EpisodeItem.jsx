import React from 'react'

const EpisodeItem = ({ episode, episodeImage, setVideoUrl }) => {

  return (
    <div onClick={() => setVideoUrl(episode.url)} className='relative h-[350px] w-[200px] inline-block mx-2 my-5 cursor-pointer'>
        <img className='object-cover w-full h-[350px] rounded-xl' src={episodeImage}  />
        <div className='absolute w-[100%] bottom-0 left-0 text-white'>
            <div className='videoItem'>
                <p className='font-semibold text-2xl px-4 pt-5'>{episode.episode}</p>
            </div>      
        </div>
    </div>
  )
}

export default EpisodeItem