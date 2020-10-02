import React from 'react'

import MyImg from '../../assets/NovaFoto.png'
import './HelloPage.css'

function StartPart() {
	return (
		<div className='containerHello'>
			<div className='texts'>
				<p>Olá, eu sou o</p>
				<p>
					Matheus B.
					<br />
					Spilari
				</p>
				<p>Front-End Developer</p>
			</div>
			<div className='photo'>
				<img src={MyImg} alt='Foto' />
			</div>
		</div>
	)
}

export default StartPart
