import React from 'react'
import Lottie from 'react-lottie'


const Animation = ({ animation }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animation ,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    
    return(
        <Lottie options={defaultOptions}
            height={'100%'}
            width={'100%'}
            isStopped={false}
            isPaused={false}
        />
    )
}

export default Animation