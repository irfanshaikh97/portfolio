import React from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered , faClose} from '@fortawesome/free-solid-svg-icons'
import { useState} from 'react';
 
function Navbar() {
    const [menu_class, setMenuclass] = useState('nav-ul nav-ul-mobile display-none');

    function showMenu(e){
      console.log(e)
      if(menu_class.includes("display-block")){
        setMenuclass('nav-ul nav-ul-mobile display-none')
      }
      else{
        setMenuclass('nav-ul nav-ul-mobile display-block')
      }
    }

   

  return (
    <div>
        <nav className='navbar'>
            <h2 className='nav-heading'><span className='span-box'>&#x25A0;</span> Shaikh Irfan <span className='span-heading'>/ Web Developer</span></h2>

            <ul className={menu_class} onClick={showMenu} id='bar-button'>
              <li><Link className='nav-link'  to='/'>ABOUT ME</Link></li>
              <li><Link className='nav-link'  to='/resume'>RESUME</Link></li>
              <li><Link className='nav-link'  to='/project'>PROJECT</Link></li>
              <li><FontAwesomeIcon onClick={showMenu} className='fa-xl font-close' icon={faClose} /></li>           
            </ul>
            <FontAwesomeIcon onClick={showMenu} className='fa-xl font-bar'  icon={faBarsStaggered}/>
        
        </nav>
    </div>
  )
}


export default Navbar