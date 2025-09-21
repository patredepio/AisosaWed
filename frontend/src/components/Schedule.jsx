import HouseIcon from './icons/HouseIcon';
import ChurchIcon from './icons/ChurchIcon';
import ReceptionIcon from './icons/ReceptionIcon';

function Schedule() {
  const events = [
    {
      id: 1,
      date: 'November 20, 2025',
      time: '2:00 PM',
      title: 'Traditional Wedding',
      location: 'Bride\'s Father\'s Residence',
      address: '45B Guobadia Avenue Off Etete GRA, Benin City',
      description: 'Join us for the traditional wedding ceremony at the bride\'s family home.',
      icon: <HouseIcon color="var(--color-primary)" size="2rem" />,
      duration: '6 Hours',
      googleMapsUrl: 'https://maps.google.com/?q=45B+Guobadia+Avenue+Off+Etete+GRA,+Benin+City,+Nigeria'
    },
    {
      id: 2,
      date: 'November 22, 2025',
      time: '12:00 PM',
      title: 'White Wedding',
      location: 'The Redeem Christian Church of God Upper Room Parish',
      address: 'No. 3 Redeemed Christian Church way, off Adesuwa Girls Grammar School Road, G.R.A. Benin City, Edo State, Nigeria',
      description: 'Join us as we exchange vows in a beautiful church ceremony.',
      icon: <ChurchIcon color="var(--color-primary)" size="2rem" />,
      duration: '2 Hours',
      googleMapsUrl: 'https://maps.google.com/?q=No.+3+Redeemed+Christian+Church+way,+off+Adesuwa+Girls+Grammar+School+Road,+G.R.A.+Benin+City,+Edo+State,+Nigeria'
    },
    {
      id: 3,
      date: 'November 22, 2025',
      time: '3:00 PM',
      title: 'Reception',
      location: 'Edo Hotel Marquee',
      address: 'Okada Avenue beside National Industrial Court of Nigeria GRA Benin City Edo State',
      description: 'Celebrate with us at the reception with dinner, dancing, and festivities.',
      icon: <ReceptionIcon color="var(--color-secondary)" size="2rem" />,
      duration: '6 Hours',
      googleMapsUrl: 'https://www.google.com/maps/dir//Horatio+Event+Centre+Marquee,+3+Okada+Avenue,+Gra,+Benin+City+300102,+Edo/@6.3207019,5.6191153,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1040d3001865d08f:0xd471306eeefbb00b!2m2!1d5.6216902!2d6.3206966?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D'
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
      description: 'Buses will be available for our guests flying down to celebrate with us, to convey them from the airport to their respective hotels.',
      icon: '🚌'
    },
    {
      title: 'Wedding Day Colors',
      description: 'For the white wedding ceremony, the colors of the day are Olive Green, Mint Green, Peach, and Cornflower Blue. Feel free to incorporate these beautiful colors in your attire.',
      icon: '🎨'
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title text-2xl">Wedding Day Schedule</h2>
      <p className="text-base" style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-text-light)' }}>
        November 20 & 22, 2025 • A Kind Of Love #AKindOfLove
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
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
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
                  {event.googleMapsUrl && (
                    <a
                      href={event.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      style={{
                        fontSize: 'var(--font-sm)',
                        padding: 'var(--space-sm) var(--space-md)',
                        marginTop: 'var(--space-sm)',
                        display: 'inline-block',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        color: 'white',
                        backgroundColor: 'var(--color-primary)',
                        border: '2px solid var(--color-secondary)',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                      }}
                    >
                      📍 View on Google Maps
                    </a>
                  )}
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