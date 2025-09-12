import { useState, useEffect } from 'react';

function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      setLoading(true);
      // For now, using mock data. Will connect to API later
      const mockPhotos = [
        {
          id: 1,
          filename: 'engagement-1.jpg',
          caption: 'Our engagement photoshoot in the park',
          alt: 'Sarah and Michael embracing in a sunny park setting'
        },
        {
          id: 2,
          filename: 'engagement-2.jpg',
          caption: 'Celebrating our engagement with family',
          alt: 'Group photo with families celebrating the engagement'
        },
        {
          id: 3,
          filename: 'date-night.jpg',
          caption: 'One of our favorite date nights',
          alt: 'Sarah and Michael at a restaurant, smiling at the camera'
        }
      ];
      
      setTimeout(() => {
        setPhotos(mockPhotos);
        setLoading(false);
      }, 1000);
    } catch (err) {
      setError('Failed to load photos');
      setLoading(false);
    }
  };

  const openLightbox = (photo) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  const handleKeyDown = (event, photo) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openLightbox(photo);
    }
  };

  const handleLightboxKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeLightbox();
    }
  };

  // Mock image URL generator (will be replaced with actual API calls)
  const getImageUrl = (photo) => {
    return `https://via.placeholder.com/400x300/d4af37/ffffff?text=${photo.filename}`;
  };

  if (loading) {
    return (
      <section className="section" aria-live="polite">
        <h2 className="section-title text-2xl">Photo Gallery</h2>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p className="text-base">Loading photos...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section" aria-live="assertive">
        <h2 className="section-title text-2xl">Photo Gallery</h2>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p className="text-base" style={{ color: 'var(--color-secondary)' }}>
            {error}
          </p>
          <button 
            className="btn" 
            onClick={fetchPhotos}
            style={{ marginTop: '1rem' }}
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="section">
        <h2 className="section-title text-2xl">Photo Gallery</h2>
        <p className="text-base" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Memories from our journey together
        </p>
        
        <div className="grid grid-3" role="grid" aria-label="Wedding photo gallery">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="card"
              style={{ 
                cursor: 'pointer', 
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                position: 'relative'
              }}
              role="button"
              tabIndex={0}
              aria-label={`View larger image: ${photo.caption}`}
              onClick={() => openLightbox(photo)}
              onKeyDown={(e) => handleKeyDown(e, photo)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
              }}
            >
              <img
                src={getImageUrl(photo)}
                alt={photo.alt}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: '1rem'
                }}
                loading="lazy"
              />
              <p className="text-sm" style={{ margin: 0, color: 'var(--color-text-light)' }}>
                {photo.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="lightbox-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '2rem'
          }}
          onClick={closeLightbox}
          onKeyDown={handleLightboxKeyDown}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
        >
          <div
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '2rem',
                cursor: 'pointer',
                padding: '0.5rem'
              }}
              onClick={closeLightbox}
              aria-label="Close image viewer"
            >
              ×
            </button>
            <img
              src={getImageUrl(selectedPhoto)}
              alt={selectedPhoto.alt}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: 'var(--radius-md)'
              }}
            />
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                padding: '1rem',
                marginTop: '1rem',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center'
              }}
            >
              <h3 id="lightbox-title" className="text-base" style={{ margin: 0 }}>
                {selectedPhoto.caption}
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;