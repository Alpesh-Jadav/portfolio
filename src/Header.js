import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div className="header">
            <div className="header__links">
               
                <li>
                <Link to="/projects" className="link">
                    Projects
                    <div className="underline"></div>
                </Link>
                </li>
                
                <li>
                <Link to="/resume" className="link">
                     Resume
                    <div className="underline"></div>
                </Link>
                    
                </li>
                <li>
                    <Link to="/about" className="link">
                      About
                     <div className="underline"></div>
                    </Link>
                </li>
                
                
              
            </div>
        </div>
    )
}

export default Header
