import React from "react";

import Logo from '../../assets/Logo.svg'
import { GiHamburgerMenu } from "react-icons/gi";

import "./NavBar.css";

function NavBar() {
  
  const toggleDropDown = () => document.querySelector('ul.DropDown').classList.toggle('hideDropDown')
  
  return (
    <nav>
      <ul>
        <li>
          <img src={Logo} alt="Logo" />
        </li>
        <li>
          <a href="#agag">Sobre</a>
        </li>
        <li>
          <a href="#agag">Portfolio</a>
        </li>
        <li>
          <a href="#agag">Contatos</a>
        </li>
        <li className="DropDownButton">
          <button onClick={() => toggleDropDown()}>
            <GiHamburgerMenu />
          </button>
        </li>
      </ul>
      <ul className="DropDown hideDropDown">
        <li>
          <a href="#agag">Sobre</a>
        </li>
        <li>
          <a href="#agag">Portfolio</a>
        </li>
        <li>
          <a href="#agag">Contatos</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
