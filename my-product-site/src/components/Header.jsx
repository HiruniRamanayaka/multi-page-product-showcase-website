import React from "react";
import "../styles/header.css";
import logo from "../assets/logo.png";
import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      <div className="logo-side">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="company">ShowcaseCo.</h1>
      </div>
      <div className="social-icons">
        <a href="mailto:hello@yourcompany.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
        <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </header>
  );
}

export default Header;