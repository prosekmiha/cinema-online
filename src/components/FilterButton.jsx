import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../App';

const FilterButton = ({ genre, pressedIndex, setPressedIndex, index }) => {

    const [btnClicked, setBtnClicked] = useState(false);

    const {filteredItems, setFilteredItems} = useContext(Context);
    const {videosData, setVideoData} = useContext(Context);

    useEffect(() => {
        pressedIndex == index ? setBtnClicked(true) : setBtnClicked(false)
    })
    const [temp, setTemp] = useState();
    const handleFilter = () => {
        scroll();
        if(pressedIndex == index) {
            setPressedIndex(null)
            setFilteredItems(temp);
        } else {
            setTemp(filteredItems)
            setPressedIndex(index)      
            const filter = videosData.filter((video) => video.genre.includes(genre));
            setFilteredItems(filter);
        }
        setBtnClicked(!btnClicked);
    }

    function scroll() {
        document.getElementById("videos").scrollIntoView({ behavior: 'smooth'});
    }

  return (
    <button onClick={() => handleFilter()} className={`border-2 border-[${btnClicked ? "#397cd4" : "gray"}] rounded-3xl h-[45px] px-4 font-medium text-lg hover:bg-[#171717]`}>{genre}</button>
  )
}

export default FilterButton