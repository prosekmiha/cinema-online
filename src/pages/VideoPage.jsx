import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import EpisodeItem from '../components/EpisodeItem';
import SeasonBtn from '../components/SeasonBtn';



const VideoPage = ({ videos }) => {
    
    const [seasonBtnPressedIndex, setSeasonBtnPressedIndex] = useState(0);

    const params = useParams();
    let videoData = videos.find(function(item) {
        return item.title == params.videoName ;
    });
    document.title = params.videoName + " | OnlineCinema";

    const [videoUrl, setVideoUrl] = useState();



    const [seasonsBtns, setSeasonsBtns] = useState([]);
    useEffect(() => {
        window.scrollTo(0, 0)
        setVideoUrl(videoData.episodes ? videoData.episodes[0].url : videoData.url)
        
        if(videoData.seasons) {
            for(let i = 0; i < videoData.seasons; i++) {
                seasonsBtns.length != videoData.seasons && setSeasonsBtns(seasonsBtns => [...seasonsBtns, `Sezona ${i + 1}`])       
            }
        }
        
    }, [videoData])

    function scroll() {
        document.getElementById("videoFrame").scrollIntoView({ behavior: 'smooth'});
    }


  return (
    <div className='flex flex-col items-center text-white pt-10'>
        <div className='flex flex-col md:flex-row pb-10 max-w-[1024px]'>
            <div className='w-full md:w-[50%}'>
                <img className='rounded-2xl w-10/12 m-auto' src={videoData.image} />
            </div>
            <div className='flex flex-col px-2 md:px-10 justify-center w-full md:w-[50%}'>
                <div>
                    <h1 className='font-bold text-[40px]'>{videoData.title}</h1>
                    <p className='font-normal text-[20px]'>{videoData.genre}</p>
                </div>
                <div className='py-5'>
                    <Link onClick={() => scroll()} className='flex justify-center items-center h-[50px] w-[150px] bg-[#3950d4] hover:bg-[#3962d4] rounded-md text-xl font-medium'>Predvajaj</Link>
                </div>
                <div className='py-5'>
                    <p className='text-lg'>{videoData.desc}</p>
                </div>
            </div>
        </div>
       {
            seasonsBtns.length > 0 && 
            <div className='w-[1024px] h-[50px] flex gap-5 justify-right mt-4 mb-4'>
                {
                    seasonsBtns.map((season, index) => {
                        console.log(seasonsBtns)
                        return (
                            <SeasonBtn season={season} index={index} seasonBtnPressedIndex={seasonBtnPressedIndex} setSeasonBtnPressedIndex={setSeasonBtnPressedIndex}/>
                        )
                    })
                }
            </div>
       }
        {
            videoData.episodes && 
            <div className='w-full h-[420px] relative flex items-center group'>            
                <div id='slider' className='w-[1024px] m-auto h-full overflow-x-scroll whitespace-nowrap scroll-smooth'>
                {
                    videoData.episodes.map((episode, index) => {
                        if(episode.season == seasonBtnPressedIndex + 1){
                            return (
                                <EpisodeItem key={index} episode={episode} episodeImage={videoData.image} setVideoUrl={setVideoUrl} /> 
                            )
                        }
                    })
                }       
                </div>           
            </div>
        }
        
        <div id='videoFrame' className='w-full lg:w-[1024px] h-[200px] mt-10 sm:h-[400px] md:h-[600px] flex justify-center md:p-10'>
            <iframe className='w-full h-full' src={videoUrl} allowfullscreen="true"></iframe>
        </div>

        
    </div>
  )
}

export default VideoPage