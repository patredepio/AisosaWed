import LazyImage from './LazyImage';

function Story() {
  const milestones = [
    {
      id: 1,
      date: 'First Meeting',
      title: 'When Our Paths Crossed',
      description: 'From the moment we met, there was something special between us. The connection was instant, and we knew this was the beginning of something beautiful - truly A Kind Of Love.',
      icon: '💫'
    },
    {
      id: 2,
      date: 'Growing Together',
      title: 'Building Our Foundation',
      description: 'Through laughter, shared dreams, and countless memories, our bond grew stronger each day. We discovered that love isn\'t just a feeling - it\'s a choice we make every moment.',
      icon: '🌱'
    },
    {
      id: 3,
      date: 'The Proposal',
      title: 'A Promise of Forever',
      description: 'In a moment filled with pure joy and love, we decided to take the next step in our journey together. The proposal was perfect because it came from the heart.',
      icon: '💍'
    },
    {
      id: 4,
      date: 'November 20, 2025',
      title: 'Traditional Wedding',
      description: 'We celebrate our union in the traditional way at the bride\'s father\'s residence on Guobadia Avenue, surrounded by our families and honoring our heritage.',
      icon: '🏠'
    },
    {
      id: 5,
      date: 'November 22, 2025',
      title: 'White Wedding',
      description: 'At The Redeemed Christian Church of God Upper Room Parish, we exchange vows before God and our loved ones. This marks the beginning of our married life together - #AKindOfLove that will last forever.',
      icon: '💒'
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title text-2xl">Our Love Story</h2>
      <p className="text-base" style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-text-light)' }}>
        The journey of Aisosa & Kunle - #AKindOfLove
      </p>

      {/* Engagement Photo */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div
          className="story-image-container"
          style={{
            maxWidth: '400px',
            margin: '0 auto',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
            position: 'relative'
          }}
        >
          <div style={{ position: 'relative', width: '100%' }}>
            <LazyImage
              src="/images/engagement/engagement.jpg"
              alt="Aisosa and Kunle's engagement photo showing their beautiful ring"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                transition: 'transform 0.3s ease',
                borderRadius: 'var(--radius-lg)'
              }}
              placeholder={
                <div
                  className="story-image-placeholder"
                  style={{
                    width: '100%',
                    height: '300px',
                    background: 'linear-gradient(135deg, var(--color-accent), var(--color-primary))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    border: '2px dashed var(--color-primary)',
                    opacity: 0.8,
                    borderRadius: 'var(--radius-lg)'
                  }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>💍</div>
                  <p className="text-sm" style={{ margin: 0, color: 'var(--color-secondary)', fontStyle: 'italic' }}>
                    Loading engagement photo...
                  </p>
                </div>
              }
            />
          </div>
          <div className="story-image-overlay">
            <p className="text-base story-overlay-text">
              The moment that changed everything 💍
            </p>
          </div>
        </div>
      </div>

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
            We can't wait to share this special moment with all of you. Your love and support mean the world to us as we begin this new chapter together.
          </p>
          <p className="text-lg" style={{ margin: 0, fontStyle: 'italic', color: 'var(--color-secondary)' }}>
            "True love stories never have endings." 💕<br/>
            <span className="text-sm" style={{ opacity: 0.8 }}>#AKindOfLove • November 20 & 22, 2025</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Story;