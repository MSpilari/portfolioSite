import React, { useEffect, useState } from "react";
import dotenv from 'dotenv'

import CardProject from "./CardProject";
import MyCarosel from "../../components/Slider";
import "./style.css";

dotenv.config()

function Projetos() {

  const [ projects, setProjects] = useState(() => [])

  
  useEffect(() => {
    const API_CALL = document.location.href === 'http://localhost:3333' ? 'http://localhost:3333' : process.env.API_URL 
    
    fetch(API_CALL)
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
