import React, { useEffect, useState } from "react";

import CardProject from "./CardProject";
import MyCarosel from "../../components/Slider";
import "./style.css";


function Projetos() {

  const [ projects, setProjects] = useState(() => [])
  
  useEffect(() => { 
    
    fetch('https://portfolioapimspilari.herokuapp.com/')
      .then(response => response.json())
      .then(data => setProjects(data))
  }, [])
  
  return (
    <div id='Projects' className="projectsWrapper">
      <h1>Projetos</h1>
      <div className="cardsProjectWrapper">
        <MyCarosel>         
          {
            projects.map(project => {
              return <CardProject 
                        key={project._id}
                        img={project.thumbnail} 
                        title={project.name}
                        comment={project.description}
                        href={project.href} 
                      />
            })
          }
        </MyCarosel>
      </div>
    </div>
  );
}

export default Projetos;
