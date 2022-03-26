import React from 'react'
import "./project.css";

function Project() {
  return (
    <div className='project-parent'>
       <div className='project-body'>
         <h2 className='project-title'>Google Clone.</h2>
         <h6 className='project-subtitle'>Search Engine</h6>
         <p>Google Clone is developed using React JS.
            It uses the Google Search API to fetch<br/>
            the results from the Google Server and
            render it on the viewers screen.The user<br/>
            can search from the categories such as
            Images ,Videos ,Web Links, News,etc.
         </p>
         <p>https://irfanshaikh97.github.io/google-search</p>

         <h2 className='project-title project-title-mobile'>Todo's List</h2>
         <h6 className='project-subtitle'>Tasks Manager</h6>
         <p>Google Clone is developed using React JS.
            It uses the Google Search API to fetch<br/>
            the results from the Google Server and
            render it on the viewers screen.The user<br/>
            can search from the categories such as
            Images ,Videos ,Web Links, News,etc.
         </p>
         <p>https://google.com</p>

      </div>
    </div>
  )
}

export default Project