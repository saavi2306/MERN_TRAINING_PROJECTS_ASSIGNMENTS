import React from 'react'
import './RCard.css'

const RCard = (props) => {
  return (
    <div className={props.className}>

      <div className='stars'>
        ⭐ ⭐ ⭐ ⭐ 
      </div>

      <p className='reviewText'>
        "{props.review}"
      </p>

      <div className='person'>

        <img src={props.image} alt="" />

        <div className='personInfo'>
          <h3>{props.name}</h3>
          <h5>{props.position}</h5>
        </div>

      </div>

    </div>
  )
}

export default RCard