import React, { useContext, useEffect, useState } from 'react'
import FilterButton from './FilterButton'
import FilterButtonType from './FilterButtonType'
import { Context } from '../App';


const Filter = () => {

    const genres = ["Akcija", "Komedija", "Pustolovščina", "Kriminal", "Triler", "Grozljivka", "Romanca", "Znanstvena fantastika", "Drama"]
    const types = ["Film", "Serija"];

    const [pressedIndex, setPressedIndex] = useState(null);
    const [pressedTypeIndex, setPressedTypeIndex] = useState(null);


    const {filteredItems, setFilteredItems} = useContext(Context);
    const {videosData, setVideoData} = useContext(Context);

    useEffect(() => {

        if(pressedIndex != null && pressedTypeIndex != null) {
            const filter = videosData.filter((video) => 
                video.type.includes(types[pressedTypeIndex]) &&
                video.genre.includes(genres[pressedIndex])
            );
            setFilteredItems(filter);
        }
        if(pressedIndex == null && pressedTypeIndex == null) {setFilteredItems(videosData)}
        
    }, [pressedIndex, pressedTypeIndex])

    

  return (
    <div className='hidden lg:flex text-white gap-10 justify-center my-5 py-4 sticky top-[68px] bg-black z-40'>
        <div className='flex gap-5 border-r-2 border-[gray] pr-10'>
        {
            types.map((type, index) => {
                return(
                    <FilterButtonType key={index} index={index} type={type} pressedTypeIndex={pressedTypeIndex} setPressedTypeIndex={setPressedTypeIndex} />
                )
            })
        }
        </div>
        <div className='flex gap-5 flex-wrap justify-center'>
        {
            genres.map((genre, index) => {
                return(
                    <FilterButton key={index} index={index} genre={genre} pressedIndex={pressedIndex} setPressedIndex={setPressedIndex} />
                )
            })
        }
        </div>
    </div>
  )
}

export default Filter