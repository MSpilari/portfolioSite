import React from 'react'
import Carousel from '@brainhubeu/react-carousel'

import '@brainhubeu/react-carousel/lib/style.css'

const MyCarousel = ({ children }) => {    
    return(
        <Carousel arrows>
            {children}
        </Carousel>
    )
}

export default MyCarousel