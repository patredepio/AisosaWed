import { useState } from 'react';

function Header({ activeSection, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (section) => {
    onNavigate(section);
    setIsMenuOpen(false); // Close menu after navigation
  };

  const navigationItems = [
    { id: 'countdown', label: 'Countdown' },
    { id: 'story', label: 'Our Story' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'hotels', label: 'Hotels' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'trivia', label: 'Trivia' }
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
          <button
            key={item.id}
            className={`nav-link text-base ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => handleNavigation(item.id)}
            aria-current={activeSection === item.id ? 'page' : undefined}
          >
            {item.label}
          </button>
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