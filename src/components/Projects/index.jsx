import React, { useEffect, useState } from "react";

import api from "../../services/api";
import CardProject from "./CardProject";
import MyCarosel from "../../components/Slider";

import "./style.css";


function Projetos() {

  const [ projects, setProjects] = useState(() => [])
  
  useEffect(() => { 
    api.get('/')
      .then(response => {
        const { data } = response
        setProjects(data)
      })
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
