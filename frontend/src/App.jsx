import { useState } from 'react';
import Header from './components/Header';
import Countdown from './components/Countdown';
import Story from './components/Story';
import Schedule from './components/Schedule';
import Gallery from './components/Gallery';
import TriviaGame from './components/TriviaGame';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('countdown');

  const handleNavigation = (section) => {
    setActiveSection(section);
    
    // Smooth scroll to main content for screen readers
    const mainElement = document.getElementById('main');
    if (mainElement) {
      mainElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'countdown':
        return <Countdown />;
      case 'story':
        return <Story />;
      case 'schedule':
        return <Schedule />;
      case 'gallery':
        return <Gallery />;
      case 'trivia':
        return <TriviaGame />;
      default:
        return <Countdown />;
    }
  };

  return (
    <div className="app">
      <Header 
        activeSection={activeSection} 
        onNavigate={handleNavigation} 
      />
      
      <main id="main" className="main" role="main">
        {renderActiveSection()}
      </main>
      
      <footer style={{ 
        textAlign: 'center', 
        padding: 'var(--space-xl)', 
        background: 'var(--color-bg-alt)',
        borderTop: '1px solid var(--color-accent)'
      }}>
        <p className="text-sm" style={{ margin: 0, color: 'var(--color-text-light)' }}>
          Made with 💕 for Sarah & Michael's Wedding • February 14, 2025
        </p>
        <p className="text-xs" style={{ margin: '0.5rem 0 0 0', color: 'var(--color-text-light)' }}>
          Built with React & Express • Accessible & Mobile-First Design
        </p>
      </footer>
    </div>
  );
}

export default App;