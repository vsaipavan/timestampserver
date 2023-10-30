import React from 'react'
import './navbar.css'
import Card from '../Cards/Card';
const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
             <li>
                <a href='#' target='blank'>Categories</a>
                
             </li>
             <li>
                <a href='#' target='blank'>About</a>
                
             </li>
             <li>
                <a href='#' target='blank'>Contact</a>
                
             </li>
       </ul>  
       <li><b>Location : Uppal Hyderabad..</b> <a href='#' target='blank' style={{color:'orange'}}>Change</a></li>    
    </div>
  )
}

export default Navbar;