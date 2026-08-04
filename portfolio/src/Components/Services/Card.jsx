import React from 'react'
import './Card.css'

const Card = (props) => {
    return (
        <div>
            <div className={`cardDiv ${props.className || ""}`}>
                <div className='mainDiv'>

                    <div className='imgdiv'>
                        <img src={props.img} className='logoimg ' />
                    </div>
                    <div className="headingDiv">
                        <h3 className='h3'>
                            {props.heading}
                        </h3>
                    </div>
                    <div className='paraDiv'>
                        <span className='text-center p-2 descSpan'>
                            {props.description}
                        </span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card
