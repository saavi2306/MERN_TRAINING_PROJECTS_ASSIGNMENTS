import React from 'react'
import './Reviews.css'
import RCard from './RCard'

const Reviews = () => {
  return (
    <section className='reviews'>

      <h4>SOCIAL PROOF</h4>

      <h1>What clients say</h1>

      <div className='reviewCards'>

        <RCard
          className="card lightCard"
          image="https://randomuser.me/api/portraits/men/32.jpg"
          name="Sarah Müller"
          position="CPO, Novu"
          review="Eliott delivered our redesign in record time and the quality blew us away. Our conversion rate jumped 28% in the first month. Absolutely recommend."
        />

        <RCard
          className="card darkCard"
          image="https://randomuser.me/api/portraits/men/45.jpg"
          name="Thomas Renault"
          position="Founder, Finlo"
          review="Working with Eliott is a dream. He asks the right questions, moves fast, and the final result always exceeds what we imagined."
        />

        <RCard
          className="card lightCard"
          image="https://randomuser.me/api/portraits/women/44.jpg"
          name="Camille Dufresne"
          position="Creative Director, Orea"
          review="We had a tight deadline and a vague brief. Eliott turned both into a polished site in under two weeks. Clean code, zero hand-holding needed."
        />

      </div>

    </section>
  )
}

export default Reviews