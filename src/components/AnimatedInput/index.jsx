import React from 'react'
import './style.css'

const AnimatedInput = ({ label, type, onChange }) => {
    return (
        <div className='animatedInput'>
            <input autoComplete='off' onChange={onChange} name={label} className='animatedInput__input' type={type} required />
            <span className='animatedInput__span'>{label}</span>
        </div>
    )
}

export default AnimatedInput