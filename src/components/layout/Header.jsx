import { useState, useEffect } from 'react';
import './Header.css'
import { siteConfig } from './../../config/siteConfig';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">{siteConfig.brandName}</a>

        <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav--menu">
          <ul className="nav__list">
            {siteConfig.navLinks.map(link => (
              <li key={link.path}>
                <a
                  href={link.path}
                  className={`nav__link ${activeLink === link.path ? 'active-link' : ''}`}
                  onClick={() => setShowMenu(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav__close" id="nav--close" onClick={() => setShowMenu(false)}>
            <i className="ri-close-large-line"></i>
          </div>
        </div>

        <div className="nav__toggle" id="nav--toggle" onClick={() => setShowMenu(true)}>
          <i className="ri-menu-line"></i>
        </div>
      </nav>
    </header>
  );
}
