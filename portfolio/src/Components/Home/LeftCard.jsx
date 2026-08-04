import React from 'react'
import './LeftCard.css'

const LeftCard = () => {
  return (
    <div className='card'> 
      
        <h3 className='h5'>
            Available for work
        </h3>
        <h1 className='h1'>Hi! I'm 
          <span className='orange'> Saavani</span>  
            </h1>
        <p>
            Freelance UI/Ux Designer & Frontend Developer. I designand build products that people love to use - fast,clean and accessible 
        </p>

        <div className='btn'>
            <a href="work.jsx" className='workbtn'>Veiw my work</a>
            <a href="contact" className='contact'>Get in touch</a>
        </div>
        <div className='info'>
            <div  className='box'  >
            <p className='bold'> 34+</p>
            <p> projects done</p>
            </div>
            <div className='box'  >
            <p className='bold'> 21+</p>
            <p> Happy clients</p>
            </div>
            <div className='box'>  
            <p className='bold'> 5y</p>
            <p> Experience</p>
            </div>
        </div>
        
        

     
    </div>
  )
}

export default LeftCard
