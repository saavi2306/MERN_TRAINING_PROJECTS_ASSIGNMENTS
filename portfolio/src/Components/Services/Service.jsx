import React from 'react'
import Card from './Card'
import './Service.css'

const Service = () => {
  return (
    <div className='gud'>

      <p className='para'>WHAT I DO</p>
      <h1 className='head'>Services</h1>
      <div className='serviceCard'>
        {/* Cards */}
        <Card heading="UI/UX Design" description="fron wireframes to polishedFigma prototypes. Intuitive, visually compelling interfaces that convert visitors into users and put usability first."
          img="" />
        <Card heading="Frontend Dev" 
        description="Production-grade code with Tailwind CSS and Alpine.js.Pixel-perfect, fullyresponsive, SEO_friendly and blazing fast - no bloat, no heavy fragments"
        img=""
        className="secondCard"  />
        <Card heading="Landing Pages" description="High-converting pages for SaaS , apps and personal brands. Designed to communicate value instantly and drive action from the first scroll."
          img="" />

      </div>
    </div>


  )
}

export default Service
