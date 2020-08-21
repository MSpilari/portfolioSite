import React from 'react'
import Lottie from 'react-lottie'


const Animation = ({ animation, width, height }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    
    return(
        <Lottie options={defaultOptions}
            height={height}
            width={width}
            isStopped={false}
            isPaused={false}
            style={{
                display: 'flex', 
                alignItems:'center', 
                justifyContent:'center',
                borderRadius:'8px'
            }}
        >
            
        </Lottie>
    )
}

export default Animation