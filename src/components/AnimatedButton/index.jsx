import React from 'react'

import './style.css'

const AnimatedButton = ({ label, onClick }) => {
    return(
        <button 
            className="buttonSlide slideRight"
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default AnimatedButton