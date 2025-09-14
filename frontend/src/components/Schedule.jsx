function Schedule() {
  const events = [
    {
      id: 1,
      date: 'November 21, 2025',
      time: 'All Day',
      title: 'Traditional Wedding',
      location: 'Bride\'s Father\'s Residence',
      address: '45B Guobadia Avenue Off Etete GRA, Benin City',
      description: 'Join us for the traditional wedding ceremony at the bride\'s family home.',
      icon: '🏠',
      duration: 'Full Day'
    },
    {
      id: 2,
      date: 'November 22, 2025',
      time: 'TBD',
      title: 'White Wedding',
      location: 'RCCG Christ Centre',
      address: '13 Guobadia Street Off Etete Road, Benin City',
      description: 'Join us as we exchange vows in a beautiful church ceremony.',
      icon: '💒',
      duration: 'TBD'
    }
  ];

  const importantInfo = [
    {
      title: 'Dress Code',
      description: 'Semi-formal attire. Ladies: cocktail dresses or elegant separates. Gentlemen: suit or dress shirt with slacks.',
      icon: '👗'
    },
    {
      title: 'Airport Transportation',
      description: 'A bus will be provided by the couple from the airport to the venue on the wedding day. Contact us for pickup details.',
      icon: '🚌'
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title text-2xl">Wedding Day Schedule</h2>
      <p className="text-base" style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-text-light)' }}>
        November 21-22, 2025 • A Kind Of Love #AKindOfLove
      </p>

      {/* Main Events Timeline */}
      <div style={{ marginBottom: '3rem' }}>
        <h3 className="text-xl" style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-secondary)' }}>
          Event Timeline
        </h3>
        
        <div className="grid" style={{ gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
          {events.map((event) => (
            <div key={event.id} className="card schedule-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', flexDirection: 'row' }}>
              {/* Time and Icon */}
              <div className="schedule-time-icon" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '80px', flexShrink: 0 }}>
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
                <div className="text-sm" style={{ marginBottom: '0.5rem', color: 'var(--color-primary)', fontWeight: 'bold' }}>
                  {event.date}
                </div>
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
            Contact us for directions and assistance:
          </p>
          <div className="text-base" style={{ margin: '0', fontWeight: 'bold' }}>
            Pharm Oghogho<br />
            📞 09161266193<br />
            <br />
            Tony<br />
            📞 07036886530
          </div>
        </div>
      </div>
    </section>
  );
}

export default Schedule;