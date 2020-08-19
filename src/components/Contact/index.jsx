import React from 'react';

import './style.css'

function Contatos() {
  return(
    <div className="contactWrapper">
      <h1>Vamos ser amigos !</h1>
      <div className="linkedinWrapper">
        <a href="https://www.linkedin.com/in/matheus-bernardes-spilari-2b8068188/">Linkedin</a>
      </div>
      <div className="githubWrapper">
        <a href="https://github.com/MSpilari">GitHub</a>
      </div>
      <div className="emailWrapper">
        <a href="#google.com">Email</a>
      </div>
    </div>
  );
}

export default Contatos;