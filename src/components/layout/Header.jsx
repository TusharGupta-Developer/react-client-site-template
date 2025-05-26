import { useState, useEffect } from 'react';
import './Header.css'
import { siteConfig } from './../../config/siteConfig';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const handleScroll = () => {
    const scrollY = window.pageYOffset;
    const sections = ['home', 'work', 'info', 'services', 'contact'];

    for (let id of sections) {
      const section = document.getElementById(id);
      if (section) {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveLink(`#${id}`);
        }
      }
    }
  };

  // Header blur effect logic
  const header = document.getElementById("header");
  if (header) {
    if (scrollY > 50) {
      header.classList.add("blur__header");
    } else {
      header.classList.remove("blur__header");
    }
  }


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
