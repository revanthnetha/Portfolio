import React from 'react'

import Navbar from './../Components/Navbar'
import Header from './../Components/Header'
import Contact from '../Components/Contact'
import About from '../Components/About'

const Home = () => {
  return (
    <div>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
        <About/>
        <Contact/>

      </div>
    </div>
  )
}

export default Home
