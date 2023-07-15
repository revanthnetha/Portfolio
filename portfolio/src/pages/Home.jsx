import React from 'react'

import Navbar from './../Components/Navbar'
import Header from './../Components/Header'
import Contact from '../Components/Contact'
import About from '../Components/About'
import Tech from '../Components/Tech'
import Work from '../Components/Work'
import AboutMe from '../Components/AboutMe'
import Footer from '../Components/Footer'
import { Box } from '@chakra-ui/react'

const Home = () => {
  return (
    <div>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
        <Box display={{base : "none",sm : "block"}}>
        <About/>
        </Box>
        <AboutMe/>
        <Tech/>
        <Work/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
