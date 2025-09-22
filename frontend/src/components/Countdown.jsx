import { useState, useEffect } from "react";
const backgroundImg = "/images/pre-wedding%20pictures/pre-wedding-3.jpg";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isWeddingDay, setIsWeddingDay] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Set wedding date - November 20, 2025 (Traditional) & November 22, 2025 (White Wedding) - Aisosa & Kunle - A Kind Of Love
  const weddingDate = new Date("2025-11-20T00:00:00").getTime();

  useEffect(() => {
    let mounted = true;
    const img = new Image();
    const minLoadTime = 1000; // Minimum 1 second to show placeholder
    const startTime = Date.now();

    const handleLoad = () => {
      if (!mounted) return;
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minLoadTime - elapsed);

      setTimeout(() => {
        if (mounted) {
          setImageLoaded(true);
        }
      }, remaining);
    };

    const handleError = () => {
      if (!mounted) return;
      console.warn('Failed to load background image');
      // Still set as loaded to show fallback background
      setTimeout(() => {
        if (mounted) {
          setImageLoaded(true);
        }
      }, minLoadTime);
    };

    img.onload = handleLoad;
    img.onerror = handleError;
    img.src = backgroundImg;

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setIsWeddingDay(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  if (isWeddingDay) {
    return (
      <section
        className='section'
        aria-live='polite'
      >
        <div style={{ textAlign: "center" }}>
          <h2 className='section-title text-2xl'>
            🎉 It's Our Wedding Day! 🎉
          </h2>
          <p
            className='text-lg'
            style={{ marginBottom: "2rem" }}
          >
            Thank you for being part of our special day!
          </p>
          <div
            className='card'
            style={{ maxWidth: "400px", margin: "0 auto" }}
          >
            <h3
              className='text-xl'
              style={{ marginBottom: "1rem" }}
            >
              Live Stream
            </h3>
            <p
              className='text-base'
              style={{ marginBottom: "1rem" }}
            >
              Join us virtually for the ceremony
            </p>
            <a
              href='#livestream'
              className='btn'
              aria-label='Watch wedding ceremony live stream'
            >
              Watch Live
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className='section countdown-hero'
      style={{
        borderRadius: "var(--radius-lg)",
        color: "white",
        minHeight: "100vh",
        position: "relative",
        padding: "var(--space-2xl) var(--space-xl)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundImage: imageLoaded ? `url(${backgroundImg})` : "none",
        backgroundColor: imageLoaded ? "transparent" : "var(--color-bg-alt)",
        backgroundPosition: "center top",
        backgroundSize: "cover",
        backgroundAttachment: "scroll",
        backgroundRepeat: "no-repeat",
        transition: "background-image 0.3s ease-in-out",
      }}
      aria-live='polite'
    >
      {!imageLoaded && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
            borderRadius: "var(--radius-lg)",
            zIndex: 10,
          }}
        >
          <div style={{ textAlign: "center", color: "white" }}>
            <div
              style={{
                width: "60px",
                height: "60px",
                border: "4px solid rgba(255, 255, 255, 0.3)",
                borderTop: "4px solid white",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
                margin: "0 auto 1rem",
              }}
            ></div>
            <p className="text-base" style={{ margin: 0, opacity: 0.9 }}>
              Loading beautiful moments...
            </p>
            <p className="text-sm" style={{ margin: "0.5rem 0 0 0", opacity: 0.7 }}>
              #AKindOfLove
            </p>
          </div>
        </div>
      )}
      <div className='countdown-content' style={{
        position: "relative",
        zIndex: 2,
        opacity: imageLoaded ? 1 : 0,
        transition: "opacity 0.5s ease-in-out"
      }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1
            className='text-2xl'
            style={{
              margin: "0 0 1rem 0",
              fontWeight: "normal",
              letterSpacing: "2px",
            }}
          >
            #AKindOfLove
          </h1>
          <h2
            className='text-xl'
            style={{ margin: 0, opacity: 0.9 }}
          >
            Countdown to Our Wedding
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "var(--space-lg)",
            maxWidth: "600px",
            width: "100%",
            margin: "0 auto",
          }}
          className='countdown-grid'
        >
          <div
            style={{
              textAlign: "center",
              padding: "var(--space-lg)",
              borderRadius: "var(--radius-md)",
              color: "var(--color-text)",
            }}
          >
            <div
              className='text-2xl'
              style={{
                color: "var(--color-primary)",
                marginBottom: "0.25rem",
                fontWeight: "bold",
              }}
            >
              {timeLeft.days}
            </div>
            <div
              className='text-xs'
              style={{ color: "var(--color-text-light)" }}
            >
              {timeLeft.days === 1 ? "Day" : "Days"}
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              // background: "rgba(255, 255, 255, 0.9)",
              padding: "var(--space-lg)",
              borderRadius: "var(--radius-md)",
              color: "var(--color-text)",
            }}
          >
            <div
              className='text-2xl'
              style={{
                color: "var(--color-primary)",
                marginBottom: "0.25rem",
                fontWeight: "bold",
              }}
            >
              {timeLeft.hours}
            </div>
            <div
              className='text-xs'
              style={{ color: "var(--color-text-light)" }}
            >
              {timeLeft.hours === 1 ? "Hour" : "Hours"}
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              // background: "rgba(255, 255, 255, 0.9)",
              padding: "var(--space-lg)",
              borderRadius: "var(--radius-md)",
              color: "var(--color-text)",
            }}
          >
            <div
              className='text-2xl'
              style={{
                color: "var(--color-primary)",
                marginBottom: "0.25rem",
                fontWeight: "bold",
              }}
            >
              {timeLeft.minutes}
            </div>
            <div
              className='text-xs'
              style={{ color: "var(--color-text-light)" }}
            >
              {timeLeft.minutes === 1 ? "Minute" : "Minutes"}
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              padding: "var(--space-lg)",
              borderRadius: "var(--radius-md)",
              color: "var(--color-text)",
            }}
          >
            <div
              className='text-2xl'
              style={{
                color: "var(--color-primary)",
                marginBottom: "0.25rem",
                fontWeight: "bold",
              }}
            >
              {timeLeft.seconds}
            </div>
            <div
              className='text-xs'
              style={{ color: "var(--color-text-light)" }}
            >
              {timeLeft.seconds === 1 ? "Second" : "Seconds"}
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <p
            className='text-xl'
            style={{
              margin: 0,
              opacity: 0.95,
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
              padding: "var(--space-md) 0",
            }}
          >
            Until we say "I do" My Love 💕
          </p>
        </div>
      </div>
    </section>
  );
}

export default Countdown;
