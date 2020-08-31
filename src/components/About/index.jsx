import React, { useEffect } from "react";

import Chill from "../../assets/Sofa.svg";
import Animation from "../Animation";
import AnimatedButton from "../AnimatedButton";
import mrCookie from "../../assets/animations/mr-cookie-drink.json";

import "./Sobre.css";

function Sobre() {
  let screenSize = window.innerWidth;

  const toggleText = (e) => {
    const restText = document.querySelector("span.restOfText");
    const dots = document.querySelector("span.dots");

    dots.classList.toggle("hide");
    restText.classList.toggle("hide");

    dots.classList.contains("hide")
      ? (e.target.innerHTML = "Mostrar Menos")
      : (e.target.innerHTML = "Mostrar Mais");
  };

  useEffect(() => {
    const restText = document.querySelector("span.restOfText");
    const dots = document.querySelector("span.dots");

    screenSize < 1024
      ? restText.classList.add("hide")
      : restText.classList.remove("hide");
    screenSize > 1024
      ? dots.classList.add("hide")
      : dots.classList.remove("hide");
  }, [screenSize]);

  return (
    <div id="About" className="containerSobre">
      <div className="text">
        <p>Por que me contratar para sua empresa ?</p>
        <p>
          Como você pode ver neste portfólio e em meus projetos paralelos, todas
          a tecnologias usadas, foram aprendidas de forma autodidata, lendo
          documentação, fazendo experimentações, tentando novamente, encontrando
          os erros,<span className="dots"> ... </span>
          <span className="restOfText">
            entendendo eles, tratando-os.
            <br />
            Tudo isso buscando a constante evolução e entendimento da
            tecnologia, o que você pode esperar de mim como profissional é o
            empenho no projeto, e sempre a busca pelo estudo e pelo crescimento.
            <br />
            Tento usar do estudo e da tecnologia de uma forma lúdica, pois o
            estudo não precisa ser algo maçante, podemos nos divertir estudando
            e aprendendo.
            <br />
            Isso é o que você verá em meus projetos e no Github, um grande
            laboratório de experimentações, com as mais diversas tecnologias
            como ReactJs, NodeJs, Bancos de dados em geral, as colocando em algo
            divertido entretanto, visando o aprendizado.
          </span>
        </p>
      </div>

      <AnimatedButton
        label={"Mostrar Mais"}
        onClick={(event) => toggleText(event)}
      />

      <div className="chillAnimation">
        <Animation animation={mrCookie} height={"100%"} width={"100%"} />
      </div>
      <div className="tecnologies">
        <ul>
          <h1>Conhecimentos técnicos</h1>
          <li>ReactJs</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>Python</li>
          <li>MongoDB</li>
        </ul>
      </div>
      <div className="Chill ">
        <img src={Chill} alt="Chill" />
      </div>
    </div>
  );
}

export default Sobre;
