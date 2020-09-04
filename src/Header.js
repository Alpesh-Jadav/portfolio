import React from 'react'
import './Header.css'
function Header() {
    return (
        <div className="header">
            <div className="header__links">
                <li>
                    About
                    <div className="underline"></div>
                </li>
                <li>
                    resume
                    <div className="underline"></div>
                </li>
                <li>
                    Projects
                    <div className="underline"></div>
                </li>
              
            </div>
        </div>
    )
}

export default Header
