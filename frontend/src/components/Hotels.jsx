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
      googleMapsUrl: 'https://www.google.com/maps/dir//54+Akhionbare+St,+Oka,+Benin+City+300102,+Edo/@6.3085857,5.5268498,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1040d33bab278a01:0x4ce3e6d9ba0e92c2!2m2!1d5.6092996!2d6.3087047?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D'
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
      googleMapsUrl: 'https://www.google.com/maps/dir//32+Akhionbare+St,+Oka,+Benin+City+300102,+Edo/@6.3067334,5.5319081,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1040d3000f181945:0x6542b433b03da422!2m2!1d5.6143104!2d6.3067493?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 4,
      name: 'Vertus Hotel and Suites',
      address: '28 Akhionbare Street Off Ihama Road GRA Benin City 300102 Edo State',
      priceRange: '₦85,000 - ₦250,000',
      icon: <HotelIcon color="var(--color-secondary)" size="2rem" />,
      description: 'Luxury hotel with premium amenities and excellent service in the prestigious GRA area.',
      googleMapsUrl: 'https://www.google.com/maps/dir//VERTUS+HOTEL+AND+SUITES,+28+Akhionbare+St,+off+Ihama+Road,+GRA,+Benin+City+300102,+Edo/@6.3067744,5.6129269,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1040d3007413f0f1:0x18c06fd9cdf697bd!2m2!1d5.614402!2d6.3063804?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 5,
      name: 'Pearl Hilton INT\'L Hotel LTD',
      address: 'NO 2, OBADIGIE AVENUE, OFF JEMIDE AVENUE OFF GIWA-AMU ROAD GRA, BENIN CITY EDO STATE',
      priceRange: '₦50,000 - ₦100,000',
      icon: <HotelIcon color="var(--color-primary)" size="2rem" />,
      description: 'Quality accommodation with modern facilities and convenient location in GRA.',
      googleMapsUrl: 'https://www.google.com/maps/dir//Pearl+Hilton+Hotel,+Luxury,+2+Obadigie+Ave,+off+Jemide+Avenue,+off+Giwa+Amu+Road,+GRA,+Benin+City+300102,+Edo/@6.3117126,5.603378,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1040d3d829ae04d1:0x9ce97052c891329d!2m2!1d5.6067796!2d6.3114874?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D'
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