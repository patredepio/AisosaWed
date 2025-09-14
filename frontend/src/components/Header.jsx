import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/story', label: 'Our Story' },
    { path: '/schedule', label: 'Schedule' },
    { path: '/hotels', label: 'Hotels' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/trivia', label: 'Trivia' }
  ];

  return (
    <header className="header-compact">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <div className="header-content">
        <div className="header-title">
          <h1 className="text-xl">Aisosa & Kunle</h1>
          <span className="header-tag text-xs">#AKindOfLove</span>
        </div>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      <nav
        className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        {navigationItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `nav-link text-base ${isActive ? 'active' : ''}`
            }
            onClick={closeMenu}
            aria-current={({ isActive }) => isActive ? 'page' : undefined}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      {isMenuOpen && (
        <div
          className="menu-overlay"
          onClick={toggleMenu}
          aria-hidden="true"
        ></div>
      )}
    </header>
  );
}

export default Header;