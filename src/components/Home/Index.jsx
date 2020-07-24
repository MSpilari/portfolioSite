import React from "react";
import NavBar from './NavBar'
import HelloPage from './HelloPage'
import Sobre from './Sobre'
import Projetos from './Projetos'
import Contato from './Contatos'
import FooterComp from './Footer'

function Home() {
  return (
    <div>
      <NavBar />
      <HelloPage />
      <Sobre />
      <Projetos />
      <Contato />
      <FooterComp />
    </div>
  );
}

export default Home;
