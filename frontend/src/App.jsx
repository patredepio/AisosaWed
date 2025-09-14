import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Home from './components/Home';
import Countdown from './components/Countdown';
import Story from './components/Story';
import Schedule from './components/Schedule';
import Hotels from './components/Hotels';
import Gallery from './components/Gallery';
import TriviaGame from './components/TriviaGame';
import Loader from './components/Loader';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  // Show loader if still loading
  if (isLoading) {
    return (
      <ErrorBoundary>
        <Loader onLoadComplete={handleLoadComplete} />
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <Router>
        <div className="app">
          <Header />

          <main id="main" className="main" role="main">
            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/countdown" element={<Countdown />} />
                <Route path="/story" element={<Story />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/hotels" element={<Hotels />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/trivia" element={<TriviaGame />} />
              </Routes>
            </ErrorBoundary>
          </main>

          <footer style={{
            textAlign: 'center',
            padding: 'var(--space-xl)',
            background: 'var(--color-bg-alt)',
            borderTop: '1px solid var(--color-accent)'
          }}>
            <p className="text-sm" style={{ margin: 0, color: 'var(--color-text-light)' }}>
              Made with 💕 for Aisosa & Kunle's Wedding • A Kind Of Love #AKindOfLove • November 21-22, 2025
            </p>
            <p className="text-xs" style={{ margin: '0.5rem 0 0 0', color: 'var(--color-text-light)' }}>
              © {new Date().getFullYear()} Padres Studios. All rights reserved.
            </p>
          </footer>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;