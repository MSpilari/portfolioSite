import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ ...rest}) => {
    const hasToken = localStorage.getItem('token')
    
    return(
        hasToken ? <Route {...rest} /> : <Redirect to='/notAdmin'/> 
    )
}

export default PrivateRoute