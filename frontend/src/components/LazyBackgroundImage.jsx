import { useState, useRef, useEffect } from 'react';

function LazyBackgroundImage({
  src,
  children,
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
  const [imageLoaded, setImageLoaded] = useState(false);
  const containerRef = useRef(null);

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
        rootMargin: '100px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView && src) {
      const img = new Image();
      img.onload = () => {
        setImageLoaded(true);
        setIsLoading(false);
        onLoad();
      };
      img.onerror = () => {
        setIsError(true);
        setIsLoading(false);
        onError();
      };
      img.src = src;
    }
  }, [isInView, src, onLoad, onError]);

  const defaultPlaceholder = (
    <div
      style={{
        background: 'linear-gradient(135deg, var(--color-accent), var(--color-primary))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '3rem',
        opacity: 0.8,
        ...style
      }}
      className={isError ? '' : 'loading-placeholder loading-pulse'}
    >
      {isError ? '❌' : '⏳'}
    </div>
  );

  const backgroundStyle = imageLoaded && !isError
    ? {
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        ...style
      }
    : style;

  return (
    <div
      ref={containerRef}
      style={backgroundStyle}
      className={className}
      {...props}
    >
      {/* Show placeholder while loading or on error */}
      {(isLoading || isError) && (placeholder || defaultPlaceholder)}

      {/* Show children once image is loaded or if no background image */}
      {(imageLoaded || isError || !src) && children}
    </div>
  );
}

export default LazyBackgroundImage;