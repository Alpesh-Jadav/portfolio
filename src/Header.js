import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div className="header">
            <div className="header__links">
               
                <li>
                <Link to="/projects">
                    Projects
                    <div className="underline"></div>
                </Link>
                </li>
                
                <li>
                <Link to="/resume">
                     Resume
                    <div className="underline"></div>
                </Link>
                    
                </li>
                <li>
                    <Link to="/about">
                      About
                     <div className="underline"></div>
                    </Link>
                </li>
                
                
              
            </div>
        </div>
    )
}

export default Header
