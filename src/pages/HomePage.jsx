import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Videos from '../components/Videos'
import { Fade } from "react-awesome-reveal";

const HomePage = ({ hidden, videos }) => {

  document.title = "Home | OnlineCinema";

  return (
    <div className={hidden}>
      <Fade triggerOnce={true} cascade>
          <Hero />
          <Videos videos={videos}/>
      </Fade>
    </div>
  )
}

export default HomePage