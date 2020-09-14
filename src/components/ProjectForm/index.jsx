import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'
import Logo from '../../assets/Logo.svg'
import AnimatedInput from '../AnimatedInput'
import AnimatedButton from '../AnimatedButton'

import './style.css'

const FormProjectComponent = () => {
    let history = useHistory()

    const [ formValues, setFormValues ] = useState(() => {})

    const submitForm = (event) => {
        event.preventDefault()
        const { Thumbnail, Nome, Descrição, Link } = formValues
        api.post('newProject', {
            thumbnail: Thumbnail,
            name: Nome,
            description: Descrição,
            href: Link
        })
        .then(res => console.log(res))
        .catch(err => {
            if(err.request){
                alert('Sua autorização não está mais válida, por favor, faça o login novamente.')
                history.push('/login')
            }
        })
    }

    const handleChanger = (event) => {
        const { name, value } = event.target

        setFormValues({
            ...formValues,
            [name]: value
        })
    }
    
    return (
        <div className='projectForm'>
            <Link to='/'>
                <img className='projectForm__img' src={Logo} alt="Logo"/>
            </Link>
            <form className='projectForm__form' onSubmit={e => submitForm(e)}>
                <h1 className='projectForm__title'>Cadastre um novo projeto</h1>
            
                <AnimatedInput onChange={e => handleChanger(e)} label='Thumbnail' type='text' />
                <AnimatedInput onChange={e => handleChanger(e)} label='Nome' type='text' />
                <AnimatedInput onChange={e => handleChanger(e)} label='Descrição' type='text' />
                <AnimatedInput onChange={e => handleChanger(e)} label='Link' type='text' />

                <AnimatedButton label='Cadastrar'/>
            </form>
        </div>
        
    )
}

export default FormProjectComponent