function Schedule() {
  const events = [
    {
      id: 1,
      time: '2:00 PM',
      title: 'Ceremony',
      location: 'Rose Garden Chapel',
      address: '123 Wedding Lane, Love City',
      description: 'Join us as we exchange vows in a beautiful outdoor ceremony surrounded by blooming roses.',
      icon: '💒',
      duration: '45 minutes'
    },
    {
      id: 2,
      time: '3:00 PM',
      title: 'Cocktail Hour',
      location: 'Garden Terrace',
      address: 'Same venue - outdoor terrace',
      description: 'Enjoy signature cocktails, light appetizers, and mingling while we take photos.',
      icon: '🥂',
      duration: '1 hour'
    },
    {
      id: 3,
      time: '4:30 PM',
      title: 'Reception',
      location: 'Grand Ballroom',
      address: 'Same venue - main hall',
      description: 'Dinner, speeches, and dancing to celebrate our new beginning together.',
      icon: '🍽️',
      duration: '4 hours'
    },
    {
      id: 4,
      time: '8:30 PM',
      title: 'Dancing & Celebration',
      location: 'Grand Ballroom',
      address: 'Same venue - dance floor',
      description: 'Let\'s dance the night away! The party continues with music, laughter, and joy.',
      icon: '💃',
      duration: 'Until late'
    }
  ];

  const importantInfo = [
    {
      title: 'Dress Code',
      description: 'Semi-formal attire. Ladies: cocktail dresses or elegant separates. Gentlemen: suit or dress shirt with slacks.',
      icon: '👗'
    },
    {
      title: 'Weather Backup',
      description: 'In case of rain, the ceremony will be moved to the indoor chapel. We\'ll update you via text if needed.',
      icon: '☂️'
    },
    {
      title: 'Parking',
      description: 'Free parking available on-site. Valet service will be provided from 1:30 PM to 9:00 PM.',
      icon: '🚗'
    },
    {
      title: 'Accessibility',
      description: 'The venue is fully wheelchair accessible. Please contact us if you need any special accommodations.',
      icon: '♿'
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title text-2xl">Wedding Day Schedule</h2>
      <p className="text-base" style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-text-light)' }}>
        February 14, 2025 • Valentine's Day
      </p>

      {/* Main Events Timeline */}
      <div style={{ marginBottom: '3rem' }}>
        <h3 className="text-xl" style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-secondary)' }}>
          Event Timeline
        </h3>
        
        <div className="grid" style={{ gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
          {events.map((event) => (
            <div key={event.id} className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              {/* Time and Icon */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '80px' }}>
                <div
                  style={{
                    fontSize: '2rem',
                    marginBottom: '0.5rem'
                  }}
                  aria-hidden="true"
                >
                  {event.icon}
                </div>
                <div className="text-lg" style={{ fontWeight: 'bold', color: 'var(--color-primary)', textAlign: 'center' }}>
                  {event.time}
                </div>
                <div className="text-xs" style={{ color: 'var(--color-text-light)', textAlign: 'center' }}>
                  {event.duration}
                </div>
              </div>

              {/* Event Details */}
              <div style={{ flex: 1 }}>
                <h4 className="text-lg" style={{ margin: '0 0 0.5rem 0', color: 'var(--color-secondary)' }}>
                  {event.title}
                </h4>
                <div style={{ marginBottom: '0.5rem' }}>
                  <div className="text-md" style={{ fontWeight: 'bold', color: 'var(--color-text)' }}>
                    {event.location}
                  </div>
                  <div className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                    {event.address}
                  </div>
                </div>
                <p className="text-base" style={{ margin: 0, lineHeight: '1.5' }}>
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Important Information */}
      <div>
        <h3 className="text-xl" style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-secondary)' }}>
          Important Information
        </h3>
        
        <div className="grid grid-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {importantInfo.map((info, index) => (
            <div key={index} className="card">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <span
                  style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}
                  aria-hidden="true"
                >
                  {info.icon}
                </span>
                <h4 className="text-md" style={{ margin: 0, color: 'var(--color-secondary)' }}>
                  {info.title}
                </h4>
              </div>
              <p className="text-sm" style={{ margin: 0, lineHeight: '1.5' }}>
                {info.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <div className="card" style={{ maxWidth: '500px', margin: '0 auto', background: 'linear-gradient(135deg, var(--color-accent), #f0f0e8)' }}>
          <h3 className="text-lg" style={{ margin: '0 0 1rem 0', color: 'var(--color-secondary)' }}>
            Questions or Need Directions?
          </h3>
          <p className="text-base" style={{ margin: '0 0 1rem 0' }}>
            Contact our wedding coordinator:
          </p>
          <div className="text-base" style={{ margin: '0', fontWeight: 'bold' }}>
            Emily Johnson<br />
            📞 (555) 123-4567<br />
            📧 coordinator@rosegardenvenue.com
          </div>
        </div>
      </div>
    </section>
  );
}

export default Schedule;