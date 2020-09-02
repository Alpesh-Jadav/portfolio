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
                <h1>Alpesh Jadav</h1>
            </div>
            </div>
            <div className="body__lineContainer">
                <div className="body__line1">
                
                </div>
                <div className="body__line2"></div>
            </div>
            <div className="circle"></div>
        </div>
    )
}

export default Body
