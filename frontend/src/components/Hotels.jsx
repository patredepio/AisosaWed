function Hotels() {
  const hotels = [
    {
      id: 1,
      name: 'LA GREAT Caribbean Hotel and Suites',
      priceRange: '₦50,000 - ₦120,000',
      icon: '🏨',
      description: 'Comfortable accommodations with excellent service and amenities.'
    },
    {
      id: 2,
      name: 'Foxtoonn Hotels Benin',
      priceRange: '₦52,500 - ₦72,500',
      icon: '🏨',
      description: 'Modern hotel with convenient location and quality facilities.'
    },
    {
      id: 3,
      name: 'The Residence Hotel',
      priceRange: '₦55,000 - ₦200,000',
      icon: '🏨',
      description: 'Premium hotel offering luxury accommodations and superior service.'
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
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <span
                style={{ fontSize: '2rem', marginRight: '1rem' }}
                aria-hidden="true"
              >
                {hotel.icon}
              </span>
              <div style={{ flex: 1 }}>
                <h3 className="text-lg" style={{ margin: '0 0 0.5rem 0', color: 'var(--color-secondary)' }}>
                  {hotel.name}
                </h3>
                <div className="text-md" style={{ fontWeight: 'bold', color: 'var(--color-primary)' }}>
                  {hotel.priceRange}
                </div>
              </div>
            </div>
            <p className="text-base" style={{ margin: 0, lineHeight: '1.5' }}>
              {hotel.description}
            </p>
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