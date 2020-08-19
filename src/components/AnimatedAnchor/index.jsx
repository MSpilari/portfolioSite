import React from "react";

import "./style.css";

const AnimatedAnchor = ({ href }) => {
  return (
    <div className="animatedAnchorWrapper">
      <a
        className="anchorSlide anchorSlideRight"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
      >
        Veja
      </a>
    </div>
  );
};

export default AnimatedAnchor;
