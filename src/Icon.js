import React from 'react'
import './Icon.css'
function Icon({image, svg, link}) {
    return (
        <div className="icon">
             <a href={link} target="_blank">
             <div className="main">
                    <div className="icons">
                        {svg ? svg : <img className="icon" src={image} alt="github" />}
                    </div>
                    <div className="icon-spinners">
                        <div className="icon-spinner1"></div>
                        <div className="icon-spinner2"></div>
                    </div>

                </div>
             </a>
        </div>
    )
}

export default Icon
