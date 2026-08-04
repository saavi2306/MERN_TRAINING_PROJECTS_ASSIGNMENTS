import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Service from './Components/Services/Service'
import Reviews from './Components/Reviews/Reviews'
import Work from './Components/Work/Work'
import About from './Components/About/About'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Service />
      <Work/>
      <About />
      <Reviews />
    </div>
  )
}

export default App


