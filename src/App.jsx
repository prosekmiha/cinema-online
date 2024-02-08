import { useState, createContext, useEffect } from 'react'
import './App.css'
import Videos from './components/Videos'
import { Route, Routes, useParams } from 'react-router-dom'
import VideoPage from './pages/VideoPage'
import Layout from '../../cinema-online/src/components/Layout'
import { videos } from './data/data.js'
import HomePage from './pages/HomePage.jsx'
import IntroAnimation from './components/IntroAnimation.jsx'
import { Fade } from "react-awesome-reveal";
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

export const Context = createContext();

function App() {

  const [currentUser, setCurrentUser] = useState("");

  const [videosData, setVideoData] = useState(videos);
  const [filteredItems, setFilteredItems] = useState(videos);


  const [introHidden, setIntroHidden] = useState("flex");  
  const [siteHidden, setSiteHidden] = useState("hidden");

  useEffect(() => {
    sessionStorage.getItem("user") && setCurrentUser(sessionStorage.getItem("user"));
    setTimeout(() => {
      setSiteHidden("");   
      setIntroHidden("hidden");
    }, 3800)
  }, [])

  
  return (
    <>
    <Fade cascade damping={2.5} duration={1200} triggerOnce={true}>
      <IntroAnimation hidden={introHidden}/>
      
      <div className='bg-black min-h-screen'>
        <Context.Provider value={{ filteredItems, setFilteredItems, videosData, setVideoData, currentUser, setCurrentUser }}>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index path='/' element={<HomePage videos={filteredItems} hidden={siteHidden} />}/>
              <Route path='/:videoName' element={<VideoPage videos={videosData} />} />    
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </Context.Provider>
        
      </div>
    </Fade>
    </>
  )
}

export default App
