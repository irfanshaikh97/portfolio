import React from 'react'
import Card2 from './Card2';
import Card1 from './Card1';
import Card3 from './Card3';
// import Project from './Project';
import './resume.css';

function Resume() {


  return (
    <div className='body'>
       <h1 className='heading-1'>Resume</h1>
       <Card1 />
       <Card2 />
       <Card3 />
       {/* <Project /> */}
    </div>
  )
}

export default Resume