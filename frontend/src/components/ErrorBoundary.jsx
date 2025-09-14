import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error for debugging
    console.error('Error Boundary caught an error:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  handleReload = () => {
    // Reset the error state and reload the page
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.reload();
  };

  handleRetry = () => {
    // Just reset the error state to try rendering again
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 'var(--space-xl)',
          background: 'linear-gradient(135deg, var(--color-bg), var(--color-bg-alt))',
          textAlign: 'center'
        }}>
          {/* Wedding themed error message */}
          <div style={{
            background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-2xl)',
            color: 'white',
            maxWidth: '600px',
            width: '100%',
            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
            marginBottom: 'var(--space-xl)'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: 'var(--space-md)' }}>💔</div>
            <h1 className="text-2xl" style={{ margin: '0 0 var(--space-md) 0' }}>
              Oops! Something Went Wrong
            </h1>
            <p className="text-lg" style={{ margin: '0 0 var(--space-lg) 0', opacity: 0.9 }}>
              Don't worry, our love story continues! There was just a small hiccup with the website.
            </p>
            <p className="text-base" style={{ margin: 0, fontStyle: 'italic', opacity: 0.8 }}>
              #AKindOfLove • Aisosa & Kunle's Wedding
            </p>
          </div>

          {/* Action buttons */}
          <div style={{
            display: 'flex',
            gap: 'var(--space-md)',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <button
              onClick={this.handleRetry}
              style={{
                background: 'var(--color-primary)',
                color: 'white',
                border: 'none',
                padding: 'var(--space-md) var(--space-lg)',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-base)',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
              onMouseOver={(e) => {
                e.target.style.background = 'var(--color-secondary)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'var(--color-primary)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Try Again ❤️
            </button>
            <button
              onClick={this.handleReload}
              style={{
                background: 'var(--color-accent)',
                color: 'var(--color-text)',
                border: '2px solid var(--color-primary)',
                padding: 'var(--space-md) var(--space-lg)',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-base)',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
              onMouseOver={(e) => {
                e.target.style.background = 'var(--color-primary)';
                e.target.style.color = 'white';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'var(--color-accent)';
                e.target.style.color = 'var(--color-text)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Refresh Page 🔄
            </button>
          </div>

          {/* Wedding info still accessible */}
          <div style={{
            marginTop: 'var(--space-2xl)',
            background: 'var(--color-bg-alt)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-lg)',
            border: '1px solid var(--color-accent)',
            maxWidth: '500px',
            width: '100%'
          }}>
            <h3 className="text-lg" style={{ margin: '0 0 var(--space-sm) 0', color: 'var(--color-secondary)' }}>
              Wedding Information
            </h3>
            <p className="text-sm" style={{ margin: '0 0 var(--space-sm) 0', color: 'var(--color-text-light)' }}>
              <strong>Traditional Wedding:</strong> November 21, 2025<br />
              <strong>White Wedding:</strong> November 22, 2025<br />
              <strong>Location:</strong> Benin City
            </p>
            <p className="text-xs" style={{ margin: 0, color: 'var(--color-text-light)', fontStyle: 'italic' }}>
              For directions: Contact Pharm Oghogho (09161266193) or Tony (07036886530)
            </p>
          </div>

          {/* Development error details (only in development) */}
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details style={{
              marginTop: 'var(--space-xl)',
              background: '#f5f5f5',
              border: '1px solid #ddd',
              borderRadius: 'var(--radius-sm)',
              padding: 'var(--space-md)',
              maxWidth: '600px',
              width: '100%',
              fontSize: '0.875rem',
              textAlign: 'left'
            }}>
              <summary style={{ cursor: 'pointer', fontWeight: 'bold', marginBottom: 'var(--space-sm)' }}>
                Error Details (Development Only)
              </summary>
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap', color: '#d32f2f' }}>
                {this.state.error.toString()}
              </pre>
              {this.state.errorInfo && (
                <pre style={{ margin: 'var(--space-sm) 0 0 0', whiteSpace: 'pre-wrap', color: '#666' }}>
                  {this.state.errorInfo.componentStack}
                </pre>
              )}
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;