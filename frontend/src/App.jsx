import { useState } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Home from './components/Home';
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
      <div className="app">
        <Header />

        <main id="main" className="main" role="main">
          <ErrorBoundary>
            <Home />
          </ErrorBoundary>
        </main>

        <footer style={{
          textAlign: 'center',
          padding: 'var(--space-xl)',
          background: 'var(--color-bg-alt)',
          borderTop: '1px solid var(--color-accent)'
        }}>
          <p className="text-sm" style={{ margin: 0, color: 'var(--color-text-light)' }}>
            Made with 💕 for Aisosa & Kunle's Wedding • A Kind Of Love #AKindOfLove • November 20 & 22, 2025
          </p>
          <p className="text-xs" style={{ margin: '0.5rem 0 0 0', color: 'var(--color-text-light)' }}>
            © {new Date().getFullYear()} Padres Studios. All rights reserved.
          </p>
        </footer>
      </div>
    </ErrorBoundary>
  );
}

export default App;