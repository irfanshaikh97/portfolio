import React from 'react'
import './home.css';
import Profile from "../assets/profile.jpg";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='parent-div'>
        <div className="backround-div">
              <div className="back-1"></div>
              <div className="back-2"></div>
        </div>
        
        <div className="background-div-2">
          <div className="intro-container-1">
               <img src={Profile} className='intro-img' />
               <h1 className='intro-h1'>Irfan<br/>Shaikh</h1>
               <hr/>
               <h4 className='intro-h4'>WEB DEVELOPER</h4>
               <Link to='/resume'><button className='resume-button'>Resume</button></Link>
           <footer></footer> 
         </div>

        <div className="intro-container-2">
           <p className='intro-p-2'>Hello</p>
           <h3 className='intro-h3-2'>Here's who I am & what I do</h3>
           <Link to='/resume'><button className='resume-button'>Resume</button></Link>
           <Link to='/project'><button className='project-button'>Projects</button></Link>
           <p>
              I'm a paragraph. Click here to add your own text and edit me.<br/> It's easy. Just click “Edit Text” 
              or double click me to add your own content and make changes to the font.
              I'm a great place<br/> for you to tell a story and let your users know a little more about you.
           </p>
        </div>
      </div>
    </div>
  )
}

export default Home