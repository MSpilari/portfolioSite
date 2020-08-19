import React from 'react'

import './style.css'

const AnimatedButton = ({ label }) => {
    return(
        <button className="buttonSlide slideRight">{label}</button>
    )
}

export default AnimatedButton