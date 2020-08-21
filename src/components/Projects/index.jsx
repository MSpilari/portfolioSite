import React from "react";

import CardProject from "./CardProject";
import MathFlix from "../../assets/mathFlixImg.png";
import Proffy from "../../assets/proffyImg.svg";
import WhatsTheWeather from '../../assets/wtWImg.svg'
import MyCarosel from "../../components/Slider";
import "./style.css";

function Projetos() {
  return (
    <div id='Projects' className="projectsWrapper">
      <h1>Projetos</h1>
      <div className="cardsProjectWrapper">
        <MyCarosel>
          <CardProject
              img={MathFlix}
              title={"Mathflix"}
              coment={
                `Uma cópia da HomePage do Netflix, construído em ReactJs e com Single Page Application(SPA), existem dois formulários na
                aplicação, num deles o usuário cadastra a categoria dos vídeos que aparecem na Home Page, no outro cadastra o próprio vídeo.
                Todas essas informações vão para um banco dedados próprio da aplicação.`
              }
              href={"https://math-flix.vercel.app/"}
          />
          <CardProject
              img={Proffy}
              title={"Proffy"}
              coment={
                  `Um app que busca colocar o professor mais próximo dos alunos, principalmente durante uma pandemia em que 
                  muitos não estão conseguindo frequentar a escola. O app foi construído em ReactJs, usando Typescript e também
                  possui um BackEnd construído em Typescript, utilizando NodeJs, Express, SQLite3 e Knex, com a 
                  finalidade de cadastrar novos professores na plataforma e listar os mesmos na parte de busca.`
              }
              href={"https://findyourproffy.netlify.app"}
          />
          <CardProject
              img={WhatsTheWeather}
              title={"Whats The Weather ?"}
              coment={
                `Um app de previsão do tempo, construído em ReactJs com Single Page Application(SPA). 
                Utiliza a API do AccuWeather, para isso basta o usuário digitar na página de pesquisa o nome da cidade, 
                seguido das siglas do estado e do país, assim o app retornará a previsão do tempo
                para 5 dias a partir do dia em que é realizada a pesquisa. `
              }
              href={"https://whatstheweather.netlify.app"}
          />
        </MyCarosel>
      </div>
    </div>
  );
}

export default Projetos;
