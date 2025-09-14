function Header({ activeSection, onNavigate }) {
  return (
    <header className="header">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <h1 className="text-3xl">Aisosa & Kunle</h1>
      <p className="text-lg" style={{ margin: '0.25rem 0', opacity: 0.9, fontStyle: 'italic' }}>
        A Kind Of Love #AKindOfLove
      </p>
      <p className="text-lg" style={{ margin: '0.5rem 0 0 0', opacity: 0.9 }}>
        November 21-22, 2025
      </p>
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <button
          className={`nav-link text-base ${activeSection === 'countdown' ? 'active' : ''}`}
          onClick={() => onNavigate('countdown')}
          aria-current={activeSection === 'countdown' ? 'page' : undefined}
        >
          Countdown
        </button>
        <button
          className={`nav-link text-base ${activeSection === 'story' ? 'active' : ''}`}
          onClick={() => onNavigate('story')}
          aria-current={activeSection === 'story' ? 'page' : undefined}
        >
          Our Story
        </button>
        <button
          className={`nav-link text-base ${activeSection === 'schedule' ? 'active' : ''}`}
          onClick={() => onNavigate('schedule')}
          aria-current={activeSection === 'schedule' ? 'page' : undefined}
        >
          Schedule
        </button>
        <button
          className={`nav-link text-base ${activeSection === 'hotels' ? 'active' : ''}`}
          onClick={() => onNavigate('hotels')}
          aria-current={activeSection === 'hotels' ? 'page' : undefined}
        >
          Hotels
        </button>
        <button
          className={`nav-link text-base ${activeSection === 'gallery' ? 'active' : ''}`}
          onClick={() => onNavigate('gallery')}
          aria-current={activeSection === 'gallery' ? 'page' : undefined}
        >
          Gallery
        </button>
        <button
          className={`nav-link text-base ${activeSection === 'trivia' ? 'active' : ''}`}
          onClick={() => onNavigate('trivia')}
          aria-current={activeSection === 'trivia' ? 'page' : undefined}
        >
          Trivia
        </button>
      </nav>
    </header>
  );
}

export default Header;