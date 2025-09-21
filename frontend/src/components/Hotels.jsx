import HotelIcon from './icons/HotelIcon';

function Hotels() {
  const hotels = [
    {
      id: 1,
      name: 'LA GREAT Caribbean Hotel and Suites',
      address: 'Arkhionbare, G.R.A, Benin City, Edo State',
      priceRange: '₦50,000 - ₦120,000',
      icon: <HotelIcon color="var(--color-primary)" size="2rem" />,
      description: 'Comfortable accommodations with excellent service and amenities in the heart of GRA.',
      googleMapsUrl: 'https://maps.google.com/?q=Arkhionbare+G.R.A+Benin+City+Edo+State+Nigeria'
    },
    {
      id: 2,
      name: 'Foxtoonn Hotels Benin',
      address: '37 Akhionbare Street, Off Ihama Road, Benin City',
      priceRange: '₦52,500 - ₦72,500',
      icon: <HotelIcon color="var(--color-secondary)" size="2rem" />,
      description: 'Modern hotel with convenient location and quality facilities. Feel the difference!',
      googleMapsUrl: 'https://maps.google.com/?q=37+Akhionbare+Street+Off+Ihama+Road+Benin+City+Nigeria'
    },
    {
      id: 3,
      name: 'The Residence Hotel and Suites',
      address: '32 Akhionbare Street Oka Benin City 300102 Edo State',
      priceRange: '₦55,000 - ₦200,000',
      icon: <HotelIcon color="var(--color-primary)" size="2rem" />,
      description: 'Premium hotel offering luxury accommodations and superior service in the heart of Oka.',
      googleMapsUrl: 'https://maps.google.com/?q=32+Akhionbare+Street+Oka+Benin+City+300102+Edo+State+Nigeria'
    },
    {
      id: 4,
      name: 'Vertus Hotel and Suites',
      address: '28 Akhionbare Street Off Ihama Road GRA Benin City 300102 Edo State',
      priceRange: '₦85,000 - ₦250,000',
      icon: <HotelIcon color="var(--color-secondary)" size="2rem" />,
      description: 'Luxury hotel with premium amenities and excellent service in the prestigious GRA area.',
      googleMapsUrl: 'https://maps.google.com/?q=28+Akhionbare+Street+Off+Ihama+Road+GRA+Benin+City+300102+Edo+State+Nigeria'
    },
    {
      id: 5,
      name: 'Pearl Hilton INT\'L Hotel LTD',
      address: 'NO 2, OBADIGIE AVENUE, OFF JEMIDE AVENUE OFF GIWA-AMU ROAD GRA, BENIN CITY EDO STATE',
      priceRange: '₦50,000 - ₦100,000',
      icon: <HotelIcon color="var(--color-primary)" size="2rem" />,
      description: 'Quality accommodation with modern facilities and convenient location in GRA.',
      googleMapsUrl: 'https://maps.google.com/?q=NO+2+OBADIGIE+AVENUE+OFF+JEMIDE+AVENUE+OFF+GIWA-AMU+ROAD+GRA+BENIN+CITY+EDO+STATE+Nigeria'
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title text-2xl">Recommended Hotels</h2>
      <p className="text-base" style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-text-light)' }}>
        We've selected these hotels for your convenience during our celebration
      </p>

      <div className="grid" style={{ gap: '1.5rem', maxWidth: '800px', margin: '0 auto', marginBottom: '2rem' }}>
        {hotels.map((hotel) => (
          <div key={hotel.id} className="card">
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div
                style={{ marginRight: '1rem', marginTop: '0.25rem' }}
                aria-hidden="true"
              >
                {hotel.icon}
              </div>
              <div style={{ flex: 1 }}>
                <h3 className="text-lg" style={{ margin: '0 0 0.5rem 0', color: 'var(--color-secondary)' }}>
                  {hotel.name}
                </h3>
                <div className="text-sm" style={{ marginBottom: '0.5rem', color: 'var(--color-text-light)' }}>
                  {hotel.address}
                </div>
                <div className="text-md" style={{ fontWeight: 'bold', color: 'var(--color-primary)' }}>
                  {hotel.priceRange}
                </div>
              </div>
            </div>
            <p className="text-base" style={{ margin: '0 0 1rem 0', lineHeight: '1.5' }}>
              {hotel.description}
            </p>
            {hotel.googleMapsUrl && (
              <a
                href={hotel.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  fontSize: 'var(--font-xs)',
                  padding: 'var(--space-xs) var(--space-sm)',
                  display: 'inline-block',
                  textDecoration: 'none'
                }}
              >
                📍 View on Google Maps
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Special Note */}
      <div style={{ textAlign: 'center' }}>
        <div className="card" style={{ maxWidth: '600px', margin: '0 auto', background: 'linear-gradient(135deg, var(--color-accent), #f0f0e8)' }}>
          <h3 className="text-lg" style={{ margin: '0 0 1rem 0', color: 'var(--color-secondary)' }}>
            📍 Important Note
          </h3>
          <p className="text-base" style={{ margin: 0, lineHeight: '1.6' }}>
            The couple will be staying at a hotel around the Akhionbare axis.
            We kindly ask our dear guests to book hotels nearby to make mobility easier for everyone.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hotels;