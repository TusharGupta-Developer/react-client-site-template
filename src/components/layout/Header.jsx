import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">Tushar</a>

        <div className={`nav__menu ${isMenuOpen ? 'open' : ''}`} id="nav--menu">
          <ul className="nav__list">
            <li><a href="#home" className="nav__link" onClick={closeMenu}>Home</a></li>
            <li><a href="#work" className="nav__link" onClick={closeMenu}>Work</a></li>
            <li><a href="#info" className="nav__link" onClick={closeMenu}>My Info</a></li>
            <li><a href="#services" className="nav__link" onClick={closeMenu}>Services</a></li>
            <li><a href="#contact" className="nav__link" onClick={closeMenu}>Contact Me</a></li>
          </ul>

          <div className="nav__close" onClick={closeMenu}>
            <i className="ri-close-line" />
          </div>
        </div>

        <div className="nav__toggle" onClick={toggleMenu}>
          <i className="ri-menu-line" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
