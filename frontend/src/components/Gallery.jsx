import { useState, useEffect } from "react";
import LazyImage from "./LazyImage";

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
      // Pre-wedding and engagement photos for Aisosa & Kunle
      const weddingPhotos = [
        {
          id: 1,
          filename: "pre-wedding 1.jpg",
          caption: "Pre-wedding photoshoot - Romantic moments",
          alt: "Aisosa and Kunle in their beautiful pre-wedding attire",
          folder: "pre-wedding pictures",
        },
        {
          id: 2,
          filename: "pre-wedding 2.jpg",
          caption: "Pre-wedding elegance",
          alt: "Stunning pre-wedding photography session",
          folder: "pre-wedding pictures",
        },
        {
          id: 3,
          filename: "pre-wedding 3.jpg",
          caption: "Love in every frame",
          alt: "Beautiful couple posing for pre-wedding photos",
          folder: "pre-wedding pictures",
        },
        {
          id: 4,
          filename: "pre-wedding 4.jpg",
          caption: "Perfect harmony",
          alt: "Aisosa and Kunle showcasing their love",
          folder: "pre-wedding pictures",
        },
        {
          id: 5,
          filename: "pre-wedding 5.jpg",
          caption: "Timeless moments",
          alt: "Classic pre-wedding photography",
          folder: "pre-wedding pictures",
        },
        {
          id: 6,
          filename: "pre-wedding 6.jpg",
          caption: "Pure joy and love",
          alt: "Happy couple during pre-wedding shoot",
          folder: "pre-wedding pictures",
        },
        {
          id: 7,
          filename: "pre-wedding 7.jpg",
          caption: "Elegant and beautiful",
          alt: "Sophisticated pre-wedding portraits",
          folder: "pre-wedding pictures",
        },
        {
          id: 8,
          filename: "pre-wedding 8.jpg",
          caption: "A Kind Of Love",
          alt: "The perfect couple - #AKindOfLove",
          folder: "pre-wedding pictures",
        },
        {
          id: 9,
          filename: "engagement.jpg",
          caption: "The engagement - Our beautiful ring",
          alt: "Close-up of the stunning engagement ring",
          folder: "engagement",
        },
        {
          id: 10,
          filename: "engagment 2.jpg",
          caption: "Engagement memories",
          alt: "Special moments from the engagement",
          folder: "engagement",
        },
      ];

      // Load photos immediately for better performance
      setPhotos(weddingPhotos);
      setLoading(false);
    } catch (err) {
      setError("Failed to load photos");
      setLoading(false);
    }
  };

  const openLightbox = (photo) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = "hidden"; // Prevent scrolling
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = "unset"; // Restore scrolling
  };

  const handleKeyDown = (event, photo) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openLightbox(photo);
    }
  };

  const handleLightboxKeyDown = (event) => {
    if (event.key === "Escape") {
      closeLightbox();
    }
  };

  // Get actual image URL from public folder
  const getImageUrl = (photo) => {
    return `/images/${photo.folder}/${photo.filename}`;
  };

  if (loading) {
    return (
      <section
        className='section'
        aria-live='polite'
      >
        <h2 className='section-title text-2xl'>Photo Gallery</h2>
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <p className='text-base'>Loading photos...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        className='section'
        aria-live='assertive'
      >
        <h2 className='section-title text-2xl'>Photo Gallery</h2>
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <p
            className='text-base'
            style={{ color: "var(--color-secondary)" }}
          >
            {error}
          </p>
          <button
            className='btn'
            onClick={fetchPhotos}
            style={{ marginTop: "1rem" }}
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className='section'>
        <h2 className='section-title text-2xl'>Our Photo Gallery</h2>
        <p
          className='text-base'
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            color: "var(--color-text-light)",
          }}
        >
          Pre-wedding moments and engagement memories - #AKindOfLove
        </p>

        <div
          className='grid grid-3'
          role='grid'
          aria-label='Wedding photo gallery'
        >
          {photos.map((photo) => (
            <div
              key={photo.id}
              className='card'
              style={{
                cursor: "pointer",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                position: "relative",
              }}
              role='button'
              tabIndex={0}
              aria-label={`View larger image: ${photo.caption}`}
              onClick={() => openLightbox(photo)}
              onKeyDown={(e) => handleKeyDown(e, photo)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
              }}
            >
              <LazyImage
                src={getImageUrl(photo)}
                alt={photo.alt}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "var(--radius-sm)",
                  marginBottom: "1rem",
                }}
                placeholder={
                  <div
                    style={{
                      width: "100%",
                      height: "200px",
                      background:
                        "linear-gradient(135deg, var(--color-accent), var(--color-primary))",
                      borderRadius: "var(--radius-sm)",
                      marginBottom: "1rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      opacity: 0.8,
                    }}
                  >
                    <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                      📸
                    </div>
                    <p
                      className='text-xs'
                      style={{
                        margin: 0,
                        color: "var(--color-secondary)",
                        textAlign: "center",
                        padding: "0 1rem",
                      }}
                    >
                      Loading photo...
                    </p>
                  </div>
                }
              />
              <p
                className='text-sm'
                style={{ margin: 0, color: "var(--color-text-light)" }}
              >
                {photo.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className='lightbox-overlay'
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "2rem",
            overflow: "auto",
          }}
          onClick={closeLightbox}
          onKeyDown={handleLightboxKeyDown}
          role='dialog'
          aria-modal='true'
          aria-labelledby='lightbox-title'
        >
          <div
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              style={{
                position: "absolute",
                top: "-40px",
                right: "0",
                background: "none",
                border: "none",
                color: "white",
                fontSize: "2rem",
                cursor: "pointer",
                padding: "0.5rem",
              }}
              onClick={closeLightbox}
              aria-label='Close image viewer'
            >
              ×
            </button>
            <LazyImage
              src={getImageUrl(selectedPhoto)}
              alt={selectedPhoto.alt}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                borderRadius: "var(--radius-md)",
              }}
              placeholder={
                <div
                  style={{
                    width: "400px",
                    height: "300px",
                    background:
                      "linear-gradient(135deg, var(--color-accent), var(--color-primary))",
                    borderRadius: "var(--radius-md)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                    📸
                  </div>
                  <p
                    className='text-base'
                    style={{ margin: 0, color: "var(--color-secondary)" }}
                  >
                    Loading full-size image...
                  </p>
                </div>
              }
            />
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                padding: "1rem",
                marginTop: "1rem",
                borderRadius: "var(--radius-md)",
                textAlign: "center",
              }}
            >
              <h3
                id='lightbox-title'
                className='text-base'
                style={{ margin: 0 }}
              >
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
