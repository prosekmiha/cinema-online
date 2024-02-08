import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../App';

const Search = () => {

    const [search, setSearch] = useState("");
    const {filteredItems, setFilteredItems} = useContext(Context);
    const {videosData, setVideosData} = useContext(Context);

    useEffect(() => {
        handleSearch();
      }, [search])
  
    const handleSearch = () => {      
        const searchedVideos = videosData.filter(
            (video) => video.title.toLowerCase().includes(search)           
        );          
        setFilteredItems(searchedVideos); 
      }

  return (
    <div>
        <input onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())} value={search} className='flex p-2 bg-black rounded-2xl border-[2px] border-white text-white m-4 sm:m-0' type="text" placeholder='Išči'/>
      </div>
  )
}

export default Search