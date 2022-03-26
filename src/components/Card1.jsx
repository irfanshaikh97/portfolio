import React from 'react'
import './card1.css';

function Card1() {
  return (
    <div className='education-body'>
      <div className='section-1'>
      <h2 className='year'>Rizvi College Of Arts, Sci & Comm.</h2>
      <section className='details'>
        <p>Bachelor Of Science(Computer Science)</p>
        <p>2016-2019</p>
      </section>
      </div>

      <div className='section-2'>
      <h2 className='year'>Rizvi College Of Arts, Sci & Comm.</h2>
      <section className='details'>
        <p>HSC - Science</p>
        <p>2014-2016</p>
      </section>
      </div>

      <div className='section-2'>
      <h2 className='year'>Sacred Heart Boys High School</h2>
      <section className='details'>
        <p>SSC</p>
        <p className='p-school'>2000-2012</p>
      </section>
      </div>

    </div>
  )
}

export default Card1