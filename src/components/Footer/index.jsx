import React from 'react';

import Logo from '../../assets/Logo.svg'

import './style.css'

function FooterPage() {
  return(
    <footer className="footerWrapper">
      <img src={Logo} alt="Logo"/>
      <span>Feito por MSpilari</span>
    </footer>
  );
}

export default FooterPage;