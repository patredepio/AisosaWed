import { useState, useEffect } from "react";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isWeddingDay, setIsWeddingDay] = useState(false);

  // Set wedding date - February 14, 2025
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
    >
      <h2 className='section-title text-2xl'>Countdown to Our Wedding</h2>
      <div
        className='countdown-grid'
        style={{
          display: "grid",
          gap: "var(--space-lg)",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <div
          className='card'
          style={{ textAlign: "center" }}
        >
          <div
            className='text-3xl'
            style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}
          >
            {timeLeft.days}
          </div>
          <div
            className='text-base'
            style={{ color: "var(--color-text-light)" }}
          >
            {timeLeft.days === 1 ? "Day" : "Days"}
          </div>
        </div>

        <div
          className='card'
          style={{ textAlign: "center" }}
        >
          <div
            className='text-3xl'
            style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}
          >
            {timeLeft.hours}
          </div>
          <div
            className='text-base'
            style={{ color: "var(--color-text-light)" }}
          >
            {timeLeft.hours === 1 ? "Hour" : "Hours"}
          </div>
        </div>

        <div
          className='card'
          style={{ textAlign: "center" }}
        >
          <div
            className='text-3xl'
            style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}
          >
            {timeLeft.minutes}
          </div>
          <div
            className='text-base'
            style={{ color: "var(--color-text-light)" }}
          >
            {timeLeft.minutes === 1 ? "Minute" : "Minutes"}
          </div>
        </div>

        <div
          className='card'
          style={{ textAlign: "center" }}
        >
          <div
            className='text-3xl'
            style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}
          >
            {timeLeft.seconds}
          </div>
          <div
            className='text-base'
            style={{ color: "var(--color-text-light)" }}
          >
            {timeLeft.seconds === 1 ? "Second" : "Seconds"}
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <p className='text-lg'>Until we say "I do" My Love 💕</p>
      </div>
    </section>
  );
}

export default Countdown;
