import React from "react";

import Chill from '../../assets/Sofa.svg'

import './Sobre.css'
import AnimatedButton from "../AnimatedButton";

function Sobre() {
  return (
    <div className='containerSobre'>
      <div className='Chill'>
        <img src={Chill} alt="Chill" />
      </div>
      <div className='text'>
        <p>Por que me contratar para sua empresa ?</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,
          repellendus unde! Quia at debitis dignissimos nesciunt alias
          blanditiis ipsa eaque nostrum! Vitae animi dolore perferendis suscipit
          dolor voluptate est omnis?
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptatum nam nisi quam quod saepe aliquid laborum
          corporis distinctio! Nesciunt, rerum sed alias optio impedit sunt
          aspernatur quis ipsa quas laborum! 
        </p>
        <AnimatedButton label={'Mostrar mais'}/>
      </div>
    </div>
  );
}

export default Sobre;
