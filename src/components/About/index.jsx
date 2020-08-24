import React from "react";

import Chill from '../../assets/Sofa.svg';
import Animation from '../Animation'
import mrCookie from '../../assets/animations/mr-cookie-drink.json'

import './Sobre.css'

function Sobre() {
  return (
    <div id='About' className='containerSobre'>
      <div className='text'>
        <p>Por que me contratar para sua empresa ?</p>
        <p>
          Como você pode ver neste portfólio e em meus projetos paralelos,
          todas a tecnologias usadas, foram aprendidas de forma autodidata,
          lendo documentação, fazendo experimentações, tentando novamente,
          encontrando os erros, entendendo eles, tratando-os.<br/> 
          Tudo isso buscando a constante evolução e entendimento da tecnologia,
          o que você pode esperar de mim como profissional é o empenho no projeto,
          e sempre a busca pelo estudo e pelo crescimento.<br/>
          Tento usar do estudo e da tecnologia de uma forma lúdica, pois o estudo
          não precisa ser algo maçante, podemos nos divertir estudando e aprendendo.<br/>
          Isso é o que você verá em meus projetos e no Github, um grande laboratório
          de experimentações, com as mais diversas tecnologias como ReactJs, NodeJs, Bancos
          de dados em geral, as colocando em algo divertido entretanto, visando o aprendizado.
        </p>
      </div>
      <div className="chillAnimation">
        <Animation animation={mrCookie} height={'100%'} width={'100%'}/>
      </div>
      <div className="tecnologies">
        <h1>Conhecimentos técnicos</h1>
        <p>
          - ReactJs<br/>
          - HTML<br/>
          - CSS<br/>
          - Javascript<br/>
          - Typescript<br/>
          - Python<br/>
          - MongoDB<br/>
        </p>
      </div>
      <div className='Chill '>
        <img src={Chill} alt="Chill" />
      </div>
   </div>
  );
}

export default Sobre;
