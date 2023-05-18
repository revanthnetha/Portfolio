import React from 'react'

import Navbar from './../Components/Navbar'
import Header from './../Components/Header'
import Contact from '../Components/Contact'

const Home = () => {
  return (
    <div>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
        <Contact/>
      </div>
    </div>
  )
}

export default Home
