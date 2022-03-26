import React from 'react'
import './card2.css';

function Card2() {
  return (
    <div className='card2-body'>
    <h1>Professional Skillset</h1>
        <div className='skills'>
            <li><span className='span-list'>&#x25A0;</span> React JS</li>
            <li><span className='span-list'>&#x25A0;</span>JavaScript</li>
            <li><span className='span-list'>&#x25A0;</span>Bootstrap</li>
            <li><span className='span-list'>&#x25A0;</span>CSS</li>
            <li><span className='span-list'>&#x25A0;</span>HTML</li>
        </div>

        <h1>Languages</h1>
        <div className='languages'>
            <li><span className='span-list'>&#x25A0;</span>English</li>
            <li><span className='span-list'>&#x25A0;</span>Hindi</li>
            <li><span className='span-list'>&#x25A0;</span>Marathi</li>
        </div>
    </div>
  )
}

export default Card2