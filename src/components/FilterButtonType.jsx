import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../App';

const FilterButton = ({ type, pressedTypeIndex, setPressedTypeIndex, index }) => {

    const [btnClicked, setBtnClicked] = useState(false);

    const {filteredItems, setFilteredItems} = useContext(Context);
    const {videosData, setVideoData} = useContext(Context);

    useEffect(() => {
        pressedTypeIndex == index ? setBtnClicked(true) : setBtnClicked(false)
    })
    const [temp, setTemp] = useState();
    const handleFilter = () => {
        scroll();
        if(pressedTypeIndex == index) {
            setPressedTypeIndex(null)
            setFilteredItems(temp);
        } else {
            setTemp(filteredItems)
            setPressedTypeIndex(index)      
            const filter = videosData.filter((video) => video.type.includes(type));
            setFilteredItems(filter);
        }
        setBtnClicked(!btnClicked);
    }

    function scroll() {
        document.getElementById("videos").scrollIntoView({ behavior: 'smooth'});
    }

  return (
    <button onClick={() => handleFilter()} className={`border-2 border-[${btnClicked ? "#397cd4" : "gray"}] rounded-3xl h-[45px] px-4 font-medium text-lg hover:bg-[#171717]`}>{type}</button>
  )
}

export default FilterButton