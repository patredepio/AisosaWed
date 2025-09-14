import { useState, useEffect } from "react";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isWeddingDay, setIsWeddingDay] = useState(false);

  // Set wedding date - November 22, 2025 - Aisosa & Kunle - A Kind Of Love
  const weddingDate = new Date("2025-11-22T00:00:00").getTime();

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
      className='section'
      aria-live='polite'
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/DSC_6440.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "var(--radius-lg)",
        color: "white",
        maxWidth: "600px",
        margin: "0 auto",
        position: "relative",
      }}
    >
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
          gap: "var(--space-md)",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            // background: "rgba(255, 255, 255, 0.9)",
            padding: "var(--space-md)",
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
            padding: "var(--space-md)",
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
            padding: "var(--space-md)",
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
            // background: "rgba(255, 255, 255, 0.9)",
            padding: "var(--space-md)",
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

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <p
          className='text-lg'
          style={{
            margin: 0,
            opacity: 0.95,
            textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
          }}
        >
          Until we say "I do" My Love 💕
        </p>
      </div>
    </section>
  );
}

export default Countdown;
