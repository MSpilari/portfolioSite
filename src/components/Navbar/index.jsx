import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/Logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

import "./NavBar.css";

function NavBar() {
  const toggleDropDown = () =>
    document.querySelector("ul.DropDown").classList.toggle("hideDropDown");

  return (
    <nav>
      <ul>
        <li>
          <img src={Logo} alt="Logo" />
        </li>
        <li>
          <a href="#About">Sobre</a>
        </li>
        <li>
          <a href="#Projects">Pojetos</a>
        </li>
        <li>
          <a href="#Contacts">Contatos</a>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>

        <li className="DropDownButton">
          <button onClick={() => toggleDropDown()}>
            <GiHamburgerMenu />
          </button>
        </li>
      </ul>
      <ul className="DropDown hideDropDown">
        <li>
          <a href="#About">Sobre</a>
        </li>
        <li>
          <a href="#Projects">Pojetos</a>
        </li>
        <li>
          <a href="#Contacts">Contatos</a>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
