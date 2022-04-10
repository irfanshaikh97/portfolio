import React from 'react'
import "./project.css";

function Project() {
  return (
    <div className='project-parent'>
       <div className='project-body'>
         <h2 className='project-title'>Google Clone.</h2>
         <h6 className='project-subtitle'>Search Engine</h6>
         <p>Search Engine developed using React JS library, Google Search API.
            Google search API helps to fetch  the queries from the google servers. 
            The user can search in various categories such as<br/> Web Links, Images, Videos, News.
            The results redirect the users to various other websites<br/> which provides required information.
         </p>

         <h2 className='project-title project-title-mobile'>Todo's List</h2>
         <h6 className='project-subtitle'>Todo List</h6>
         <p>Todos List developed using React JS.It provides the user with service of
            maintaining record of the future <br/> task to be done and completed task.
            Todos List keeps the person motivated and Disciplined.
         </p>
        </div>

        <div className='project-body'>
         <h2 className='project-title project-title-mobile'>Human Captcha</h2>
         <h6 className='project-subtitle'>Captcha solver</h6>
         <p>Captcha solver developed which displays different types of task to the user to examine<br/>
          whether the user is a human or robot.It helps the developer to keep the<br/> website free from malicious web crawlers.
         </p>

         <h2 className='project-title project-title-mobile'>Skate OR Die</h2>
         <h6 className='project-subtitle'>Skate Or Die</h6>
         <p>A website for the passionate skaters where they can find skateboards stunt videos <br/>
          also showcase their skating skills.</p>

          <h2 className='project-title project-title-mobile'>tindog</h2>
         <h6 className='project-subtitle'>Social Website</h6>
         <p>A website developed inspired by the idea of dating portal Tinder. As Tinder is for humans,<br/>
          Tindog is developed for the Dogs.</p>
      </div>

      
    </div>
  )
}

export default Project