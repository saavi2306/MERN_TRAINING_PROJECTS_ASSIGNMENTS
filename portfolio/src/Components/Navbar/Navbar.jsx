import React from 'react'
import './Navbar.css'
import logo from "./logo.png"

const Navbar = () => {
  return (
    <>
     <div className='fullNav'>
      
        <div className = "logoDiv">
            <img src={logo} alt="logo" className='logo'/> 
        </div> 
        <div classname="linkDiv">
            <ul className="link">
                <li>Services</li>
                <li>Work</li>
                <li>About</li>
                <li>Review</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
        

        <div className='right'>
        <div classname="theme">
            <button className='toggle'><img src="https://www.freeiconspng.com/uploads/crescent-moon-png-21.png" alt="moon logo" className='moon'/></button>
        </div>
        <div>
            <button className='HireME'>HIRE ME</button>
        </div>
        </div>
       
    </div> 


      </>
  
  )
}

export default Navbar
