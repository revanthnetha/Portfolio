import React from 'react'

import Navbar from './../Components/Navbar'
import Header from './../Components/Header'
import Contact from '../Components/Contact'
import About from '../Components/About'
import Tech from '../Components/Tech'
import Work from '../Components/Work'

const Home = () => {
  return (
    <div>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
        <About/>
        <Tech/>
        <Work/>
        <Contact/>

      </div>
    </div>
  )
}

export default Home
