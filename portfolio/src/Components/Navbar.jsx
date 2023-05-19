import React from 'react'
import  { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from "../assets/react.svg"
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="port__navbar">
      <div className="port__navbar-links">
        <div className="port__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="port__navbar-links_container">
        <p><a href="#home">Home</a></p>
            <p><a href="#aboutme">About Me</a></p>
            <p><a href="#work">Work</a></p>
        </div>
      </div>
      <div className="port__navbar-sign">
        
        <button type="button"  _hover={{
          cursor: "pointer",
        }}>Contact Me</button>
      </div>
      <div className="port__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="port__navbar-menu_container scale-up-center">
          <div className="port__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#aboutme">About Me</a></p>
            <p><a href="#work">Work</a></p>
          </div>
          <div className="port__navbar-menu_container-links-sign">
            <button type="button">Contact</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;