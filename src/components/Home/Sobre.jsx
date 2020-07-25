import React from "react";
import '../../styles/Sobre.css'

function Sobre() {
  return (
    <div className='containerSobre'>
      <div className='Chill'>
        <img src="/assets/Sofa.svg" alt="Chill" />
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
        <button className="swipe-button left-right">Mostrar Mais</button>
      </div>
    </div>
  );
}

export default Sobre;
