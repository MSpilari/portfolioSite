import React from "react";

import CardProject from "./CardProject";
import MathFlix from "../../assets/mathFlixImg.png";

import "./style.css";

function Projetos() {
  return (
    <div className="projectsWrapper">
      <h1>Projetos</h1>
      <div className="cardsProjectWrapper">
        <CardProject
          img={MathFlix}
          title={"Mathflix"}
          coment={
            "Uma cópia da página principal do NetFlix, toda feita em ReactJs, consumindo uma API com alguns links paras vídeos do Youtube."
          }
          href={"https://math-flix.vercel.app/"}
        />
      </div>
    </div>
  );
}

export default Projetos;
