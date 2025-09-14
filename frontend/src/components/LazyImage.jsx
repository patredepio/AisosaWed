import { useState, useRef, useEffect } from 'react';

function LazyImage({
  src,
  alt,
  style = {},
  className = '',
  placeholder = null,
  onLoad = () => {},
  onError = () => {},
  ...props
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad();
  };

  const handleError = () => {
    setIsLoading(false);
    setIsError(true);
    onError();
  };

  const defaultPlaceholder = (
    <div
      style={{
        background: 'linear-gradient(135deg, var(--color-accent), var(--color-primary))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-text)',
        fontSize: '2rem',
        opacity: 0.7,
        ...style
      }}
      className={`${className} ${isError ? '' : 'loading-placeholder loading-pulse'}`}
    >
      {isError ? '❌' : '⏳'}
    </div>
  );

  return (
    <div ref={imgRef} style={{ position: 'relative' }} className={className}>
      {/* Loading/Error Placeholder */}
      {(isLoading || isError) && (
        <div style={{ position: isLoading ? 'static' : 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}>
          {placeholder || defaultPlaceholder}
        </div>
      )}

      {/* Actual Image - Only load when in view */}
      {isInView && !isError && (
        <img
          src={src}
          alt={alt}
          style={{
            ...style,
            opacity: isLoading ? 0 : 1,
            transition: 'opacity 0.3s ease',
            display: 'block',
            width: '100%',
            height: 'auto'
          }}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          {...props}
        />
      )}
    </div>
  );
}

export default LazyImage;