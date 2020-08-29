import React, { useEffect, useState } from "react";
import dotenv from 'dotenv'

import CardProject from "./CardProject";
import MyCarosel from "../../components/Slider";
import "./style.css";

dotenv.config()

function Projetos() {

  const [ projects, setProjects] = useState(() => [])
  const API_CALL = process.env.API_URL
  
  useEffect(() => {
    const apiUrl = document.location.host === 'localhost:3000' ? 'http://localhost:3333' : API_CALL 
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setProjects(data))
  }, [API_CALL])
  
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
