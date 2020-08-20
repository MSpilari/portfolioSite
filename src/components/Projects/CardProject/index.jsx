import React from "react";

import AnimatedAnchor from "../../AnimatedAnchor";

import './style.css'

const CardProject = ({ img, title, coment, label, href }) => {
  return (
    <div className="cardProjectWrapper">
      <div className="imgWrapper">
        <img src={img} alt="img" />
      </div>
      <span>{title}</span>
      <span>{coment}</span>
      <AnimatedAnchor href={href} />
    </div>
  );
};
export default CardProject;
