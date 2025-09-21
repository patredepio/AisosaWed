function ColorPalette() {
  const colors = [
    {
      name: 'Olive Green',
      value: '#808000',
      description: 'Rich, earthy green for a natural, elegant look'
    },
    {
      name: 'Mint Green',
      value: '#98FB98',
      description: 'Fresh, light green for a soft, romantic touch'
    },
    {
      name: 'Peach',
      value: '#FFCBA4',
      description: 'Warm, gentle peach for a soft, welcoming feel'
    },
    {
      name: 'Cornflower Blue',
      value: '#6495ED',
      description: 'Classic blue for a timeless, serene accent'
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title text-2xl">Wedding Color Palette</h2>
      <p
        className="text-base"
        style={{
          textAlign: 'center',
          marginBottom: '2rem',
          color: 'var(--color-text-light)'
        }}
      >
        Our wedding theme colors for decoration and attire inspiration
      </p>

      <div className="grid" style={{ gap: '1.5rem', maxWidth: '600px', margin: '0 auto' }}>
        {colors.map((color, index) => (
          <div key={index} className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {/* Color Swatch */}
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: color.value,
                  borderRadius: 'var(--radius-md)',
                  border: '2px solid var(--color-secondary)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  flexShrink: 0
                }}
                aria-label={`Color swatch for ${color.name}`}
              ></div>

              {/* Color Details */}
              <div style={{ flex: 1 }}>
                <h3
                  className="text-lg"
                  style={{
                    margin: '0 0 0.5rem 0',
                    color: 'var(--color-secondary)',
                    fontWeight: 'bold'
                  }}
                >
                  {color.name}
                </h3>
                <p
                  className="text-sm"
                  style={{
                    margin: 0,
                    color: 'var(--color-text-light)',
                    lineHeight: '1.4'
                  }}
                >
                  {color.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Usage Note */}
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <div
          className="card"
          style={{
            maxWidth: '500px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, var(--color-accent), #f0f0e8)'
          }}
        >
          <h3
            className="text-lg"
            style={{
              margin: '0 0 1rem 0',
              color: 'var(--color-secondary)'
            }}
          >
            🎨 Color Guide
          </h3>
          <p
            className="text-base"
            style={{
              margin: 0,
              lineHeight: '1.6'
            }}
          >
            These colors represent our wedding theme. Feel free to incorporate them into your attire or use them as inspiration for gifts and decorations.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ColorPalette;