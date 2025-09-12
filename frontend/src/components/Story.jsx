function Story() {
  const milestones = [
    {
      id: 1,
      date: 'March 2020',
      title: 'First Meeting',
      description: 'We met at a coffee shop in downtown. Sarah was reading a book about web development, and Michael couldn\'t help but ask about it. Little did we know this would be the start of our beautiful journey together.',
      icon: '☕'
    },
    {
      id: 2,
      date: 'August 2020',
      title: 'First Date',
      description: 'Our first official date was a picnic in Central Park. We talked for hours about our dreams, goals, and favorite movies. The connection was instant and undeniable.',
      icon: '🌳'
    },
    {
      id: 3,
      date: 'December 2021',
      title: 'Moving In Together',
      description: 'After a year and a half of dating, we decided to take the big step and move in together. Our little apartment became our sanctuary and the place where our love grew even stronger.',
      icon: '🏠'
    },
    {
      id: 4,
      date: 'June 2023',
      title: 'The Proposal',
      description: 'Michael proposed during a sunset walk on the beach where we had our second date. With the waves gently lapping at our feet and the golden sun setting behind us, Sarah said yes to forever.',
      icon: '💍'
    },
    {
      id: 5,
      date: 'February 2025',
      title: 'Our Wedding Day',
      description: 'The day we\'ve been planning and dreaming about is finally here. Surrounded by our family and friends, we\'ll promise to love and cherish each other for all the days of our lives.',
      icon: '👰‍♀️🤵‍♂️'
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title text-2xl">Our Love Story</h2>
      <p className="text-base" style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-text-light)' }}>
        The journey that led us to this magical day
      </p>

      <div className="timeline" style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
        {milestones.map((milestone, index) => (
          <div
            key={milestone.id}
            className="timeline-item"
            style={{
              display: 'flex',
              marginBottom: '2rem',
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
              alignItems: 'flex-start'
            }}
          >
            {/* Timeline line and icon */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: '60px',
                position: 'relative'
              }}
            >
              {/* Vertical line */}
              {index < milestones.length - 1 && (
                <div
                  style={{
                    position: 'absolute',
                    top: '40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '2px',
                    height: '60px',
                    background: 'var(--color-accent)',
                    zIndex: 0
                  }}
                  aria-hidden="true"
                />
              )}
              
              {/* Icon circle */}
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  position: 'relative',
                  zIndex: 1
                }}
                aria-hidden="true"
              >
                {milestone.icon}
              </div>
            </div>

            {/* Content card */}
            <div
              className="card"
              style={{
                flex: 1,
                marginLeft: index % 2 === 0 ? '1rem' : '0',
                marginRight: index % 2 === 0 ? '0' : '1rem',
                maxWidth: '400px'
              }}
            >
              <div
                className="text-sm"
                style={{
                  color: 'var(--color-primary)',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem'
                }}
              >
                {milestone.date}
              </div>
              <h3 className="text-lg" style={{ margin: '0 0 1rem 0', color: 'var(--color-secondary)' }}>
                {milestone.title}
              </h3>
              <p className="text-base" style={{ margin: 0, lineHeight: '1.6' }}>
                {milestone.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to action */}
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <div className="card" style={{ maxWidth: '500px', margin: '0 auto', background: 'linear-gradient(135deg, var(--color-accent), #f0f0e8)' }}>
          <h3 className="text-xl" style={{ margin: '0 0 1rem 0', color: 'var(--color-secondary)' }}>
            Join Our Celebration
          </h3>
          <p className="text-base" style={{ margin: '0 0 1.5rem 0' }}>
            We can't wait to share this special moment with all of you. Your love and support have been such an important part of our journey.
          </p>
          <p className="text-lg" style={{ margin: 0, fontStyle: 'italic', color: 'var(--color-secondary)' }}>
            "Love is not about how many days, months, or years you have been together. It's about how much you love each other every single day." 💕
          </p>
        </div>
      </div>
    </section>
  );
}

export default Story;