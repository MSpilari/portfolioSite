import React from 'react'
import Carousel from '@brainhubeu/react-carousel'

import '@brainhubeu/react-carousel/lib/style.css'

const MyCarousel = ({ children }) => {    
    const mobileSettings = {
        arrows: true,
        infinite: true,
        slidesPerPage: 1,
        draggable: true,
        animationSpeed: 1500
    }

    const desktopSettings = {
        arrows: true,
        infinite: true,
        slidesPerPage: 3,
        draggable: true,
        animationSpeed: 1500
    }

    let screenSize = window.screen.availWidth < 768 ? mobileSettings : desktopSettings
    
    return(
        <Carousel  {...screenSize} >
            {children}
        </Carousel>
    )
}

export default MyCarousel