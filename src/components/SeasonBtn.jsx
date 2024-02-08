import React, { useState, useEffect } from 'react'

const SeasonBtn = ({ season, index, seasonBtnPressedIndex, setSeasonBtnPressedIndex }) => {

    const [btnClicked, setBtnClicked] = useState(false);

    useEffect(() => {
        seasonBtnPressedIndex == index ? setBtnClicked(true) : setBtnClicked(false)
    })

    const handleFilter = () => {

        setSeasonBtnPressedIndex(index)
        setBtnClicked(!btnClicked);
    }

  return (
    <button onClick={() => handleFilter()} className={`border-2 border-[${btnClicked ? "#397CD4" : "gray"}] rounded-3xl h-[45px] px-4 font-medium text-lg`}>{season}</button>
  )
}

export default SeasonBtn