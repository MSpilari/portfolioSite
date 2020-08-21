import React from 'react';

import Animation from '../Animation'
import LinkedinAnimation from '../../assets/animations/linkedin2.json'
import GithubAnimation from '../../assets/animations/github.json'
import EmailAnimation from '../../assets/animations/email3.json'

import './style.css'

function Contatos() {
  return(
    <div id='Contacts' className="contactWrapper">
      <h1>Vamos ser amigos !</h1>
      <div className="linkedinWrapper">
        <a href="https://www.linkedin.com/in/matheus-bernardes-spilari-2b8068188/">Linkedin</a>
        <div className="animationWrapper">
          <Animation 
            animation={LinkedinAnimation}
            width={'100%'}
            height={'100%'}
          />
        </div>
      </div>
      <div className="githubWrapper">
        <a href="https://github.com/MSpilari">GitHub</a>
        <div className="animationWrapper">
          <Animation 
            animation={GithubAnimation}
            width={'80%'}
            height={'80%'}
          />
        </div>
      </div>
      <div className="emailWrapper">
        <a href="#google.com">Email</a>
        <div className="animationWrapper">
          <Animation 
              animation={EmailAnimation}
              width={'100%'}
              height={'80%'}
            />
        </div>
      </div>
    </div>
  );
}

export default Contatos;