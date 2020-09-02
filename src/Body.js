import React from 'react'
import './Body.css'
function Body() {
    return (
        <div className="body">
            <div className="container">
           
            <div className="body__profile">
                
                <img src="/assets/profile.jpg" alt="Alpesh Jadav"/>
            </div>
            <div className="name">
                <h1><span className="first-name">Alpesh<div className="body__line1"></div></span> <span className="last-name">Jadav <div className="body__line2"></div></span></h1>
            </div>
            </div>
      
        </div>
    )
}

export default Body
