import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Navbar from './Components/Navbar'
import Header from './Components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
    </>
  )
}

export default App
