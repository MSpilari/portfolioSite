import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/Logo.svg'

import './style.css'

const NotAdminComponent = () => {
    return (
        <div className='notAdmin'>
            <Link className='notAdmin__anchor' to='/'>
                <img className='notAdmin__img' src={Logo} alt="Logo"/>
            </Link>
            <h1 className='notAdmin__ftitle'>Desculpe, esta página é apenas para administradores.</h1>
            <h6 className='notAdmin__stitle'>Clique no logo para voltar ao início</h6>
        </div>
    )
}

export default NotAdminComponent