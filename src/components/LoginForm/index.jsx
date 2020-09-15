import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'


import api from '../../services/api'
import AnimatedInput from '../AnimatedInput'
import AnimatedButton from '../AnimatedButton'
import Logo from '../../assets/Logo.svg'

import './style.css'

const LoginForm = () => {
    
    const [ formValues, setFormValues ] = useState(() => {})
    
    let history = useHistory()
    
    const SubmitForm = (event) => {
        event.preventDefault()
        api.post('login',{
            name: formValues.Nome,
            password: formValues.Senha
        })
        .then(res => {
            const token = res.data['auth-token']
            localStorage.setItem('token', token)
            history.push('/newProject')
        })
        .catch(err => {
            if(err.response){
                history.push('/notAdmin')
            }
        })
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        return setFormValues({
                ...formValues,
                [name]: value
        })
    }
    
    return(
        <div className='form'>
            <Link to='/' className='form__link'>
                <img className='form__img' src={Logo} alt="Logo"/>
            </Link>
            <form className='form__form' onSubmit={(e) => SubmitForm(e)}>
                <h6 className ='form__title'>Faça o Login para adicionar ou deletar projetos.</h6>
                
                <AnimatedInput label='Nome' type='text' onChange={(e) => handleChange(e)} />
                <AnimatedInput label='Senha' type='password' onChange={(e) => handleChange(e)} />
                                
                <AnimatedButton label='Entrar'/>
            </form>
        </div>
    )
}

export default LoginForm