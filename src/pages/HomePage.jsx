import React from "react";
import NavBar from '../components/Navbar'
import HelloPage from '../components/Apresentation'
import Sobre from '../components/About'
import Projetos from '../components/Projects'
import Contato from '../components/Contact'
import FooterComp from '../components/Footer'

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