import React from 'react'
import './card3.css';

function Card3() {
  return (
    <div className='card3-body'>
        <h1>Interpersonal Skills</h1>
        <div className='interpersonal-skills'>
            <li><span className='span-list'>&#x25A0;</span> Problem-Solving</li>
            <li><span className='span-list'>&#x25A0;</span>Team Work</li>
            <li><span className='span-list'>&#x25A0;</span>Decision-making</li>
            <li><span className='span-list'>&#x25A0;</span>Time-Management</li>
            <li><span className='span-list'>&#x25A0;</span> Communication</li>
            <li><span className='span-list'>&#x25A0;</span>Self Aware</li>
        </div>

        <h1>Hobbies</h1>
        <div className='hobbies'>
            <li><span className='span-list'>&#x25A0;</span>Browsing Articles </li>
            <li><span className='span-list'>&#x25A0;</span>Gym</li>
            <li><span className='span-list'>&#x25A0;</span>Bike Rides</li>
        </div>
    </div>
  )
}

export default Card3